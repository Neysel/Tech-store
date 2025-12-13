"use client"
import Link from 'next/link';
import * as React from 'react';
import { useState, useEffect } from 'react';
import style from './Header.module.css';
import { useAppSelector } from '@/hooks/hooks';
import { useAppDispatch } from '@/hooks/redux';
import { checkAuth, logout } from '@/features/auth/authSlice';
import CartIcon from '../basket/CartIcon';

const Header = () => {
    const dispatch = useAppDispatch();
    const { isLoggedIn } = useAppSelector((state) => state.auth);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

//      const dispatch = useAppDispatch();
//      const { isLoggedIn } = useAppSelector((state) => state.auth);
//     // let isLoggedIn = false;

//     useEffect(() => {
//     // Check auth when header loads
//     dispatch(checkAuth());
//   }, [dispatch]);

    useEffect(() => {
        // Check auth when header loads
        dispatch(checkAuth());
        
        // Check if mobile
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, [dispatch]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogout = () => {
        dispatch(logout());
        if (isMobile) {
            setIsMobileMenuOpen(false);
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return ( 
        <div>
            <div className={style.header_wrapper}>
                {/* Logo/Home Link */}
                <Link href="/">
                    <button className={style.header_btn}>
                        Home
                    </button>
                </Link>

                {/* Desktop Navigation Links */}
                <div className={style.nav_links}>
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
                </div>

                {/* User Links & Cart */}
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

                            <div onClick={handleLogout}>
                                <button className={style.header_btn}>
                                    Logout
                                </button>
                            </div>
                        </>
                    ) : (
                        <Link href="/login">
                            <button className={style.header_btn_blue}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.12 12.78a1 1 0 0 0-.24 0 3.27 3.27 0 0 1-3.16-3.27c0-1.81 1.46-3.28 3.28-3.28a3.276 3.276 0 0 1 .12 6.55M18.74 19.38A9.93 9.93 0 0 1 12 22c-2.6 0-4.96-.99-6.74-2.62.1-.94.7-1.86 1.77-2.58 2.74-1.82 7.22-1.82 9.94 0 1.07.72 1.67 1.64 1.77 2.58"></path>
                                    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"></path>
                                </svg>
                                <span>Login</span>
                            </button>
                        </Link>
                    )}
                                    
                    <Link href="/basket">
                        <button className={style.header_btn_cart}>
                            <CartIcon/>
                        </button>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button 
                        className={style.mobile_menu_btn}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${style.mobile_menu} ${isMobileMenuOpen ? style.active : ''}`}>
                <Link href="/products/all_products" onClick={closeMobileMenu}>
                    <div className={style.mobile_menu_link}>
                        Products
                    </div>
                </Link>

                <Link href="/contacts" onClick={closeMobileMenu}>
                    <div className={style.mobile_menu_link}>
                        Contacts
                    </div>
                </Link>

                <Link href="/about-us" onClick={closeMobileMenu}>
                    <div className={style.mobile_menu_link}>
                        About Us
                    </div>
                </Link>

                {isLoggedIn ? (
                    <>
                        <Link href="/profile" onClick={closeMobileMenu}>
                            <div className={style.mobile_menu_link}>
                                Profile
                            </div>
                        </Link>

                        {/* <div className={style.mobile_menu_link} onClick={handleLogout}>
                            Logout
                        </div> */}
                    </>
                ) : (
                    <div className={style.mobile_auth_buttons}>
                        <Link href="/login" onClick={closeMobileMenu}>
                            <button className={style.header_btn_blue}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                                    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.12 12.78a1 1 0 0 0-.24 0 3.27 3.27 0 0 1-3.16-3.27c0-1.81 1.46-3.28 3.28-3.28a3.276 3.276 0 0 1 .12 6.55M18.74 19.38A9.93 9.93 0 0 1 12 22c-2.6 0-4.96-.99-6.74-2.62.1-.94.7-1.86 1.77-2.58 2.74-1.82 7.22-1.82 9.94 0 1.07.72 1.67 1.64 1.77 2.58"></path>
                                    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"></path>
                                </svg>
                                Login
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default Header;