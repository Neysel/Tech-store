"use client"
import Header from '@/components/header/Header';
import Link from 'next/link';
import * as React from 'react';
import style from './register.module.css';
import { clearError, registerUser } from '@/../src/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useRouter } from 'next/navigation';
import GoogleAuth from '@/components/auth/GoogleAuth';
import { useEffect, useState } from 'react';

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
    
   
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        last_name: '',
        email: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState({
        username: false,
        name: false,
        last_name: false,
        email: false,
        password: false,
    });

    // Validate form
    const validateForm = (): boolean => {
        const errors: FormErrors = {};

        // Validate username
        if (!formData.username.trim()) {
            errors.username = 'Username is required';
        } else if (formData.username.length < 3) {
            errors.username = 'Username must be at least 3 characters long';
        }

        // Validate name
        if (!formData.name.trim()) {
            errors.name = 'First name is required';
        } else if (!validateName(formData.name)) {
            errors.name = 'First name must be at least 2 characters long';
        }

        // Validate last name
        if (!formData.last_name.trim()) {
            errors.last_name = 'Last name is required';
        } else if (!validateName(formData.last_name)) {
            errors.last_name = 'Last name must be at least 2 characters long';
        }

        // Validate email
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        // Validate password
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
        // const allFieldsTouched = Object.values(touched).every(Boolean);
        if (Object.values(touched).some(field => field)) {
            validateForm();
        }
    }, [formData, touched]);


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
        
        // Mark all fields as touched
        setTouched({
            username: true,
            name: true,
            last_name: true,
            email: true,
            password: true,
        });

        // Validate form
        if (!validateForm()) {
            return;
        }

        dispatch(clearError());
        dispatch(registerUser(formData));
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
                            className={formErrors.username ? style.inputError : ''}
                        />
                         {formErrors.username && (
                            <div className={style.fieldError}>{formErrors.username}</div>
                        )}
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
                            className={formErrors.name ? style.inputError : ''}
                        />
                         {formErrors.name && (
                            <div className={style.fieldError}>{formErrors.name}</div>
                        )}
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
                            className={formErrors.last_name ? style.inputError : ''}
                        />
                        {formErrors.last_name && (
                            <div className={style.fieldError}>{formErrors.last_name}</div>
                        )}
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
                             className={formErrors.email ? style.inputError : ''}
                        />
                         {formErrors.email && (
                            <div className={style.fieldError}>{formErrors.email}</div>
                        )}
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
                             className={formErrors.password ? style.inputError : ''}
                        />
                        {formErrors.password && (
                            <div className={style.fieldError}>{formErrors.password}</div>
                        )}
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