"use client"
import { signIn, signOut, useSession } from 'next-auth/react';
import { useAppDispatch } from '@/hooks/hooks';
import { loginSuccess, logout } from '@/features/auth/authSlice';
import { useEffect } from 'react';
import style from './GoogleAuth.module.css';

const GoogleAuth = () => {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();

  // Sync NextAuth session with Redux
  useEffect(() => {
    if (session?.user) {
      // Create user data from Google session
      const userData = {
        user_id: session.user.email!, // Use email as ID for Google users
        username: session.user.email!.split('@')[0],
        name: session.user.name?.split(' ')[0] || 'User',
        last_name: session.user.name?.split(' ').slice(1).join(' ') || '',
        email: session.user.email!,
        password: 'google_oauth', // Mark as Google user
      };
      
      dispatch(loginSuccess(userData));
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('techero_current_user', JSON.stringify(userData));
      }
    }
  }, [session, dispatch]);

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/profile' });
  };

  const handleGoogleSignOut = () => {
    signOut({ callbackUrl: '/' });
    dispatch(logout());
    if (typeof window !== 'undefined') {
      localStorage.removeItem('techero_current_user');
    }
  };

  if (session) {
    return (
      <button onClick={handleGoogleSignOut} className={style.googleButton}>
        <span className={style.googleIcon}>🚪</span>
        Sign Out of Google
      </button>
    );
  }

  return (
    <button onClick={handleGoogleSignIn} className={style.googleButton}>
      <span className={style.googleIcon}>🔵</span>
      Continue with Google
    </button>
  );
};

export default GoogleAuth;