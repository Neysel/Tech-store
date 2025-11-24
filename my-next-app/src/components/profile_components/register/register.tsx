"use client"
import Header from '@/components/header/Header';
import Link from 'next/link';
import * as React from 'react';
import style from './register.module.css';
import { clearError, registerUser } from '@/../src/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useRouter } from 'next/navigation';
import GoogleAuth from '@/components/auth/GoogleAuth';

// Validation functions
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password: string): boolean => {
  return password.length >= 8;
};

const validateName = (name: string): boolean => {
  return name.trim().length >= 2;
};

interface FormErrors {
  username?: string;
  name?: string;
  last_name?: string;
  email?: string;
  password?: string;
}

const Register = () => {
     const dispatch = useAppDispatch();
    const router = useRouter();
    const { isLoading, error, isLoggedIn } = useAppSelector((state) => state.auth);
    
    const [formData, setFormData] = React.useState({
        username: '',
        name: '',
        last_name: '',
        email: '',
        password: '',
    });

    // Redirect if already logged in
    React.useEffect(() => {
        if (isLoggedIn) {
            router.push('/login'); // Redirect to home page
        }
    }, [isLoggedIn, router]);

    // Clear error when component unmounts or form changes
    React.useEffect(() => {
        return () => {
            dispatch(clearError());
        };
    }, [dispatch]);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        dispatch(clearError());
        dispatch(registerUser(formData));
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    return ( <>
        <Header/>
        <div className={style.register}>
            <form onSubmit={handleSubmit} className={style.form_register}>
                <h2 className={style.title}>Register</h2>
                 {error && <div className={style.errorMessage}>{error}</div>}

                    <GoogleAuth />
                    <div className={style.divider}>
                        <span>or register with email</span>
                    </div>

               <div className={style.form_register_all_input}>
                        <label htmlFor="username">Login</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={formData.username}
                            onChange={handleChange}
                            required 
                            disabled={isLoading}
                        />
                    </div>

                  <div className={style.form_register_all_input}>
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                            disabled={isLoading}
                        />
                    </div>

                 <div className={style.form_register_all_input}>
                        <label htmlFor="last_name">Lastname</label>
                        <input 
                            type="text" 
                            id="last_name" 
                            name="last_name" 
                            value={formData.last_name}
                            onChange={handleChange}
                            required 
                            disabled={isLoading}
                        />
                    </div>

                <div className={style.form_register_all_input}>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                            disabled={isLoading}
                        />
                    </div>

        <div className={style.form_register_all_input}>
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={formData.password}
                            onChange={handleChange}
                            required 
                            disabled={isLoading}
                        />
                    </div>
       
              <div className={style.lower_section}>
                <button 
                            className={`${style.submit} ${style.form_btn}`} 
                            type="submit"
                            disabled={isLoading}
                        >{isLoading ? 'Creating Account...' : 'Submit'}</button>
                <button className={`${style.register_btn}`}>
                    <Link href="/login">
                         <div>
                            Already have an account? 
                        </div>
                        <div>
                            Login
                        </div> 
                </Link></button>
              </div>
             
            </form>
        </div>

    </> );
}
 
export default Register;