"use client"
import Header from '@/components/header/Header';
import * as React from 'react';
import { useEffect, useState } from 'react';
import style from './login.module.css';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useRouter, useSearchParams } from 'next/navigation';
import { clearError, loginUser } from '../../../features/auth/authSlice';
import GoogleAuth from '@/components/auth/GoogleAuth';
import { useSession } from 'next-auth/react';

// Validation functions
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password: string): boolean => {
  return password.length >= 8;
};

interface FormErrors {
  username?: string;
  password?: string;
}

const Login = () => {
    // const searchParams = useSearchParams();
     const { data: session, status } = useSession();

    const dispatch = useAppDispatch();
    const router = useRouter();
    const { isLoading, error, isLoggedIn } = useAppSelector((state) => state.auth);
    
   const [formData, setFormData] = React.useState({
        username: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState({
        username: false,
        password: false,
    });

    // Validate form
    const validateForm = (): boolean => {
        const errors: FormErrors = {};

        // Check if username is empty
        if (!formData.username.trim()) {
            errors.username = 'Username or email is required';
        } else if (formData.username.includes('@') && !validateEmail(formData.username)) {
            // If it looks like an email, validate email format
            errors.username = 'Please enter a valid email address';
        }

        // Check password
        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (!validatePassword(formData.password)) {
            errors.password = 'Password must be at least 8 characters long';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Validate on form data change
    useEffect(() => {
        if (touched.username || touched.password) {
            validateForm();
        }
    }, [formData, touched])
    

 // Redirect if already logged in - Check BOTH Redux and NextAuth
    useEffect(() => {
        // Only redirect if we're sure about the auth state
        if (status === 'loading') return; // Wait for NextAuth to load
        
        if (isLoggedIn || session) {
            // console.log('Redirecting because:', { isLoggedIn, hasSession: !!session });
            router.push('/products/all_products');
        }
    }, [isLoggedIn, session, status, router]); // Added status dependency

    // Error 
    useEffect(() => {
        console.log(error)
        return () => {
            dispatch(clearError());
        };
    }, [dispatch]);

      function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        // Mark all fields as touched
        setTouched({
            username: true,
            password: true,
        });

        // Validate form
        if (!validateForm()) {
            return;
        }

        // console.log('Submitting form', formData);
        dispatch(clearError());
        dispatch(loginUser(formData));
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
        setTouched({
            ...touched,
            [e.target.name]: true,
        });
    }

    // Show loading state while checking authentication
    if (status === 'loading') {
        return (
            <>
                <Header/>
                <div className={style.login}>
                    <div className={style.form_login}>
                        <h2 className={style.title}>Loading...</h2>
                    </div>
                </div>
            </>
        );
    }

    return ( <>
        <Header/>
        <div className={style.login}>
            <form onSubmit={handleSubmit} className={style.form_login}>
                <h2 className={style.title}>Login</h2>
                {error && <div className={style.errorMessage}>{error}</div>}
                
                {/* GOOGLE AUTH */}
                    <GoogleAuth />
                    <div className={style.divider}>
                        <span>or continue with email</span>
                    </div>

                <div className={style.form_login_all_input}>
                    <label htmlFor="username">Email or Login:</label>
                     <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={formData.username}
                            onChange={handleChange}
                            required 
                            disabled={isLoading}
                            className={formErrors.username ? style.inputError : ''}
                        />
                        {formErrors.username && (
                            <div className={style.fieldError}>{formErrors.username}</div>
                        )}
                </div>

        <div className={style.form_login_all_input}>
              <label htmlFor="password">Password:</label>
              <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={formData.password}
                    onChange={handleChange}
                    required 
                    disabled={isLoading}
                    className={formErrors.password ? style.inputError : ''}
                />
                 {formErrors.password && (
                            <div className={style.fieldError}>{formErrors.password}</div>
                        )}
        </div>
       
              <div className={style.lower_section}>
                <button className={`${style.submit} ${style.form_btn}`} type="submit"  disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Submit'}
                </button>
                <button className={`${style.register_btn}`}>
                    <Link href="/register">
                         <div>
                            Don't have account? 
                        </div>
                        <div>
                            Register
                        </div> 
                </Link></button>
              </div>
             
            </form>
        </div>

    </> );
}
 
export default Login;