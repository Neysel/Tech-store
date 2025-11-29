"use client"
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { checkAuth, logout, updateProfile } from '@/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import style from './profile.module.css';
import Header from '@/components/header/Header';

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { currentUser, isLoggedIn } = useAppSelector((state) => state.auth);
    
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        last_name: '',
        email: '',
    });

    // Redirect if not logged in
    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/login');
        }
    }, [isLoggedIn, router]);

    // Populate form with current user data
    useEffect(() => {
        if (currentUser) {
            setFormData({
                username: currentUser.username || '',
                name: currentUser.name || '',
                last_name: currentUser.last_name || '',
                email: currentUser.email || '',
            });
        }
    }, [currentUser]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(updateProfile(formData));
        setIsEditing(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (!isLoggedIn || !currentUser) {
        return <div className={style.loading}>Loading...</div>;
    }

    return (
        <>
        <Header/>
        <div className={style.profilePage}>
            {/* Side Navigation */}
            <aside className={style.sidebar}>
                <nav className={style.nav}>
                    <a href="/products/all_products" className={style.navLink}>
                        🎧 All Products
                    </a>
                    <a href="/products/orders" className={style.navLink}>
                        📦 Orders
                    </a>
                   <a href="/products/headphones" className={style.navLink}>
                        Headphones
                    </a>
                    <a href="/products/microphone_stands" className={style.navLink}>
                        Microphone stands
                    </a>
                    <a href="/products/microphones" className={style.navLink}>
                        Microphones
                    </a>
                    <a href="/products/portable_loudspeakers" className={style.navLink}>
                        Portable loudspeakers
                    </a>
                    <a href="/products/earphones" className={style.navLink}>
                        Earphones
                    </a>
                </nav>
            </aside>

            {/* Main Profile Content */}
            <main className={style.mainContent}>
                <div className={style.profileCard}>
                    <div className={style.profileHeader}>
                        <div className={style.avatar}>
                            🎧
                        </div>
                        <h1 className={style.profileName}>
                            {currentUser.name} {currentUser.last_name}
                        </h1>
                        <p className={style.profileTitle}>Audio Enthusiast</p>
                    </div>

                    <form onSubmit={handleSubmit} className={style.profileForm}>
                        <div className={style.formGrid}>
                            <div className={style.formGroup}>
                                <label className={style.label}>Username</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        className={style.input}
                                        placeholder="Enter username"
                                    />
                                ) : (
                                    <div className={style.displayValue}>{currentUser.username}</div>
                                )}
                            </div>

                            <div className={style.formGroup}>
                                <label className={style.label}>First Name</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={style.input}
                                        placeholder="Enter first name"
                                    />
                                ) : (
                                    <div className={style.displayValue}>{currentUser.name}</div>
                                )}
                            </div>

                            <div className={style.formGroup}>
                                <label className={style.label}>Last Name</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={formData.last_name}
                                        onChange={handleChange}
                                        className={style.input}
                                        placeholder="Enter last name"
                                    />
                                ) : (
                                    <div className={style.displayValue}>{currentUser.last_name}</div>
                                )}
                            </div>

                            <div className={style.formGroup}>
                                <label className={style.label}>Email</label>
                                {isEditing ? (
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={style.input}
                                        placeholder="Enter email"
                                    />
                                ) : (
                                    <div className={style.displayValue}>{currentUser.email}</div>
                                )}
                            </div>
                        </div>

                        <div className={style.buttonGroup}>
                            {isEditing ? (
                                <>
                                    <button type="submit" className={style.saveButton}>
                                        💾 Save Changes
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => setIsEditing(false)}
                                        className={style.cancelButton}
                                    >
                                        ❌ Cancel
                                    </button>
                                </>
                            ) : (
                                <button 
                                    type="button" 
                                    onClick={() => setIsEditing(true)}
                                    className={style.editButton}
                                >
                                    ✏️ Edit Profile
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </main>

            {/* Right Sidebar */}
            <aside className={style.rightSidebar}>
                <div className={style.statsCard}>
                    <h3>📊 Your Stats</h3>
                    <div className={style.statItem}>
                        <span>Products Viewed</span>
                        <strong>156</strong>
                    </div>
                    <div className={style.statItem}>
                        <span>Member Since</span>
                        <strong>2024</strong>
                    </div>
                </div>

                <div className={style.quickActions}>
                    <h3>⚡ Quick Actions</h3>
                </div>
            </aside>
        </div>
        </>
    );
};

export default ProfilePage;