"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import style from './header.module.css'; // or create a new CSS file
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { logout } from '@/features/auth/authSlice';

const Profile = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { currentUser, isLoggedIn } = useAppSelector((state) => state.auth);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = () => {
        dispatch(logout());
        if (typeof window !== 'undefined') {
            localStorage.removeItem('techero_current_user');
        }
        setIsDropdownOpen(false);
        router.push('/login');
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    if (!isLoggedIn || !currentUser) {
        return (
            <div className={style.authButtons}>
                <a href="/login" className={style.loginBtn}>Login</a>
                <a href="/register" className={style.registerBtn}>Register</a>
            </div>
        );
    }

    return (
            <div className={style.userMenu}>
                <button onClick={toggleDropdown} className={style.userButton}>
                    Welcome, {currentUser.name}!
                </button>
                {isDropdownOpen && (
                    <div className={style.dropdown}>
                        <div className={style.userInfo}>
                            <p><strong>{currentUser.name} {currentUser.last_name}</strong></p>
                            <p>{currentUser.email}</p>
                        </div>
                        <button onClick={handleLogout} className={style.logoutBtn}>
                            Logout
                        </button>
                    </div>
                )}
            </div>
    );
};

export default Profile;