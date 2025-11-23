export interface User {
  user_id: string;
  username: string;
  name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface AuthState {
  currentUser: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface RegisterData {
  username: string;
  name: string;
  last_name: string;
  email: string;
  password: string;
}