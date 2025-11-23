"use client"
import Header from '@/components/header/Header';
import * as React from 'react';
import { useEffect } from 'react';
import style from './login.module.css';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useRouter } from 'next/navigation';
import { clearError, loginUser } from '../../../features/auth/authSlice';

const Login = () => {

    const dispatch = useAppDispatch();
    const router = useRouter();
    const { isLoading, error, isLoggedIn } = useAppSelector((state) => state.auth);
    
    const [formData, setFormData] = React.useState({
        username: '',
        password: '',
    });

    //   Redirect if already logged in
    useEffect(() => {
        if (isLoggedIn) {
            router.push('/products/all_products'); // Redirect to home page
        }
    }, [isLoggedIn, router]);

    // Error 
    useEffect(() => {
        console.log(error)
        return () => {
            dispatch(clearError());
        };
    }, [dispatch]);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
         console.log('error submit', error)
        dispatch(clearError());
        dispatch(loginUser(formData));
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }


    return ( <>
        <Header/>
        <div className={style.login}>
            <form onSubmit={handleSubmit} className={style.form_login}>
                <h2 className={style.title}>Login</h2>
                {error && <div className={style.errorMessage}>{error}</div>}
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
                        />
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
                />
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