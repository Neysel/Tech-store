"use client"
import Link from 'next/link';
import * as React from 'react';
import style from './Header.module.css';
import { useAppSelector } from '@/hooks/hooks';
import router from 'next/navigation';
import { useAppDispatch } from '@/hooks/redux';
import { checkAuth, logout } from '@/features/auth/authSlice';
import { useEffect } from 'react';
import CartIcon from '../basket/CartIcon';


const Header = () => {
     const dispatch = useAppDispatch();
     const { isLoggedIn } = useAppSelector((state) => state.auth);
    // let isLoggedIn = false;

    useEffect(() => {
    // Check auth when header loads
    dispatch(checkAuth());
  }, [dispatch]);

    return ( 
        <div>
            <div className={style.header_wrapper}>
                <Link href="/">
                <button className={style.header_btn}>
                    Home
                </button>
                </Link>

                <Link href="/products/all_products">
                <button className={style.header_btn}>
                Products
                </button>
                </Link>  

                <Link href="/contacts">
                <button className={style.header_btn}>
                    Contacts
                    </button>
                    </Link>  
                <Link href="/about-us">
                <button className={style.header_btn}>
                    About Us
                    </button>
                    </Link>  

                <div className={style.user_links}>
                {isLoggedIn ? (
                        <>
                        <div>
                        <Link href="/profile">
                        <button className={style.header_btn}>
                            Profile
                        </button>
                        </Link>
                        </div>

                        <div onClick={() => dispatch(logout())}>
                        <button className={style.header_btn}>
                            Logout
                        </button>
                        </div>
                        </>

                ) : (
                    <Link href="/login">
                        <button className={style.header_btn_blue}>
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.12 12.78a1 1 0 0 0-.24 0 3.27 3.27 0 0 1-3.16-3.27c0-1.81 1.46-3.28 3.28-3.28a3.276 3.276 0 0 1 .12 6.55M18.74 19.38A9.93 9.93 0 0 1 12 22c-2.6 0-4.96-.99-6.74-2.62.1-.94.7-1.86 1.77-2.58 2.74-1.82 7.22-1.82 9.94 0 1.07.72 1.67 1.64 1.77 2.58"></path><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"></path></svg> */}
                            Login
                        </button>
                    </Link>
                )}
                                    
                <Link href="/basket">
                <button className={style.header_btn_blue}>
                    {/* Cart */}
                    <CartIcon/>
                </button>
                </Link>
                </div>  
            </div>
        </div>
     );
}
 
export default Header;