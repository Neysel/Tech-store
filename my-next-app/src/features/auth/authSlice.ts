import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User, LoginCredentials, RegisterData } from '../../interfaces/auth';
import mockData from '../../mock_data/users.json';
import { signOut } from 'next-auth/react';


const generateUserId = (): string => {
  return `USR-${Date.now()}`;
};

//  save users to localStorage (for persistence)
const saveUsersToLocalStorage = (users: User[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('techero_users', JSON.stringify(users));
  }
};

// load users from localStorage or mock data
const loadUsers = (): User[] => {
  if (typeof window !== 'undefined') {
    const storedUsers = localStorage.getItem('techero_users');
    if (storedUsers) {
      return JSON.parse(storedUsers);
    }
  }
  // If no stored users, use mock data and save it
  const users = mockData.users as User[];
  saveUsersToLocalStorage(users);
  return users;
};

const initialState: AuthState = {
  currentUser: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Login action
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.isLoggedIn = true;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
      state.currentUser = null;
    },

    // Register action  
    registerStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    registerSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.isLoggedIn = true;
      state.error = null;
    },
    registerFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
      state.currentUser = null;
    },

    // Logout action
    logout: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
      state.error = null;
      localStorage.removeItem('techero_current_user');
      signOut({ redirect: false });
    },

    // Clear error
    clearError: (state) => {
      state.error = null;
    },

    // Check if user is logged in (for page refresh)
    checkAuth: (state) => {
        const storedUser = localStorage.getItem('techero_current_user');
        if (storedUser) {
          state.currentUser = JSON.parse(storedUser);
          state.isLoggedIn = true;
        }
    },
    updateProfile: (state, action: PayloadAction<{username: string; name: string; last_name: string; email: string}>) => {
  if (state.currentUser) {
    state.currentUser = {
      ...state.currentUser,
      ...action.payload
    };
    // Update localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('techero_current_user', JSON.stringify(state.currentUser));
    }
  }
},
  },
});

// Thunk actions for async operations
export const loginUser = (credentials: LoginCredentials) => (dispatch: any) => {
  dispatch(loginStart());
  
  try {
    const users = loadUsers();
    
    // Allow login with either username or email
    const user = users.find(
      data => (data.username === credentials.username || data.email === credentials.username) 
        && data.password === credentials.password
    );

    if (user) {
      // Save to localStorage for persistence
    //   if (typeof window !== 'undefined') {
        localStorage.setItem('techero_current_user', JSON.stringify(user));
    //   }
      dispatch(loginSuccess(user));
    } else {
      dispatch(loginFailure('Invalid username/email or password'));
    }
  } catch (error) {
    dispatch(loginFailure('Login failed. Please try again.'));
  }
};

export const registerUser = (userData: RegisterData) => (dispatch: any) => {
  dispatch(registerStart());
  
  try {
    const users = loadUsers();
    
    // Check if user already exists
    const existingUser = users.find(
      u => u.username === userData.username || u.email === userData.email
    );
    
    if (existingUser) {
      dispatch(registerFailure('Username or email already exists'));
      return;
    }

    // Create new user
    const newUser: User = {
      ...userData,
      user_id: generateUserId(),
    };

    // Add to users array and save
    const updatedUsers = [...users, newUser];
    saveUsersToLocalStorage(updatedUsers);
    
    // Also save as current user
    if (typeof window !== 'undefined') {
      localStorage.setItem('techero_current_user', JSON.stringify(newUser));
    }

    dispatch(registerSuccess(newUser));
  } catch (error) {
    dispatch(registerFailure('Registration failed. Please try again.'));
  }
};

export const { 
  loginStart, 
  loginSuccess, 
  loginFailure, 
  registerStart, 
  registerSuccess, 
  registerFailure, 
  logout, 
  clearError,
  checkAuth,
  updateProfile
} = authSlice.actions;

export default authSlice.reducer;