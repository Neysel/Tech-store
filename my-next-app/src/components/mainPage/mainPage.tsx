"use client"
import React, { useEffect } from "react";
import style from './mainPage.module.css';
import Link from "next/link";
import Header from "../header/Header";
import Footer from "../footer/footer";

interface MainPageProps {
    accessToken: {value: string} | null;
  }

const MainPage = () => {
    useEffect(() => {

        // We are using mock data here instead of fetching data from the server, this project shows the exact interface but without a server.
        // Prevous project used server data but now servers are gone so I created this project with stable products
        // it includes user tokens, products, auth check and security check

        /////
        // const fetchAccessToken = async () => {
        //     if (!accessToken) {
        //         try {
        //             const tokenData = await fetchOAuthToken();
        //             setCookies('', tokenData);
        //         } catch (error) {
        //             console.error("Error fetching access token:", error);
        //         }
        //     }
        // };

        // fetchAccessToken();
        ////
    });


    const partners = [
        { id: 1, name: "SONY", color: "#0066B3" },
        { id: 2, name: "BOSE", color: "#000000" },
        { id: 3, name: "SENNHEISER", color: "#000000" },
        { id: 4, name: "AUDIO-TECH", color: "#000000" },
        { id: 5, name: "JBL", color: "#FF0000" },
        { id: 6, name: "SHURE", color: "#000000" },
        { id: 7, name: "BEYERDYNAMIC", color: "#000000" },
        { id: 8, name: "AKG", color: "#FF0000" }
    ];

    const categories = [
        {
            id: 1,
            name: "HEADPHONES",
            description: "Immersive audio experience",
            image: style.headphones_pic,
            link: "/products/headphones"
        },
        {
            id: 2,
            name: "LOUDSPEAKERS",
            description: "Powerful sound systems",
            image: style.loudspeakers_pic,
            link: "/products/portable_loudspeakers"
        },
        {
            id: 3,
            name: "MICROPHONES",
            description: "Crystal clear recording",
            image: style.microphones_pic,
            link: "/products/microphones"
        },
        {
            id: 4,
            name: "EARPHONES",
            description: "Compact & powerful",
            image: style.earphones_pic,
            link: "/products/earphones"
        }
    ];


    return (
        <div className={style.homePage}>
            <Header/>
            <section className={style.section_1}>
                <div className={style.section1_wrapper}>
                    <div className={style.container}>
                        <div className={style.main_content}>
                            <h1>TECHERO SOUND</h1>
                            <p>Dive into an expansive soundstage that brings studio-quality realism to your daily listening.</p>
                            <Link href="/products/all_products">
                                <button className={style.seeProductBtn}>
                                    EXPLORE PRODUCTS
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Categories Section - Cyberpunk Grid */}
            <section className={style.categoriesSection}>
                <div className={`container mx-auto px-4 ml-auto mr-auto ${style.categoriesSection_container}`}>
                    <h2 className="text-4xl font-bold text-center mb-12" style={{
                        background: 'linear-gradient(45deg, #00ffff, #0099ff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textShadow: '0 0 30px rgba(0, 255, 255, 0.5)'
                    }}>
                        AUDIO CATEGORIES
                    </h2>
                    
                    <div className={style.categoryGrid}>
                        {categories.map((category) => (
                            <Link key={category.id} href={category.link}>
                                <div className={style.categoryCard}>
                                    <div className={`${style.categoryImage} ${category.image}`}></div>
                                    <div className={style.categoryContent}>
                                        <h3 className={style.categoryTitle}>{category.name}</h3>
                                        <p className={style.categoryDescription}>{category.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ad Section 1 - Special Offer */}
            <section className={`py-16 text-white ${style.cyberpunkAd}`}>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-4" style={{
                        background: 'linear-gradient(45deg, #00ffff, #0099ff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        SUMMER CYBER SALE
                    </h2>
                    <p className="text-xl mb-6 max-w-2xl mx-auto text-cyan-100">
                        Get up to 50% off on selected audio gear. Limited time neural network offer!
                    </p>
                    <div className="flex justify-center gap-4 mb-8">
                        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-6 py-3 rounded-lg border border-cyan-400">
                            50% OFF
                        </span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 text-black px-6 py-3 rounded-lg border border-purple-400">
                            FREE SHIPPING
                        </span>
                    </div>
                    <Link href="/products/all_products?sale=true">
                        <button className={style.cyberpunkButton}>
                            ACTIVATE DEAL
                        </button>
                    </Link>
                </div>
            </section>

            {/* Ad Section 2 - New Arrivals */}
            <section className={`py-20 text-white ${style.cyberpunkAd}`}>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h2 className="text-4xl font-bold mb-6" style={{
                                background: 'linear-gradient(45deg, #00ffff, #0099ff)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                                NEURAL NETWORK SERIES
                            </h2>
                            <p className="text-xl mb-6 text-cyan-100">
                                Discover our latest collection of premium audio equipment with quantum-level technology and superior sound quality.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-cyan-100">
                                    <span className="w-3 h-3 bg-cyan-500 rounded-full mr-3 animate-pulse"></span>
                                    AI-enhanced noise cancellation
                                </li>
                                <li className="flex items-center text-cyan-100">
                                    <span className="w-3 h-3 bg-cyan-500 rounded-full mr-3 animate-pulse"></span>
                                    Quantum battery technology
                                </li>
                                <li className="flex items-center text-cyan-100">
                                    <span className="w-3 h-3 bg-cyan-500 rounded-full mr-3 animate-pulse"></span>
                                    Neural interface compatibility
                                </li>
                            </ul>
                            <Link href="/products/all_products?new=true">
                                <button className={style.cyberpunkButton}>
                                    EXPLORE NEURAL TECH
                                </button>
                            </Link>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-center h-64 flex items-center justify-center border border-cyan-400 relative overflow-hidden">
                            <div className="relative z-10">
                                <span className="text-6xl mb-4 block">⚡</span>
                                <p className="text-xl font-semibold text-black">QUANTUM AUDIO GEAR</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scrolling Partners Section */}
            <section className={style.partners_scrolling_section}>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-12" style={{
                        background: 'linear-gradient(45deg, #00ffff, #0099ff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        TRUSTED BY CYBER CORPS
                    </h2>
                    
                    <div className="relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-cyan-900 z-10"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-transparent to-cyan-900 z-10"></div>
                        
                        <div className={`${style.partners_scrolling_section_items_array} ${style['animate-scroll']}`}>
                            {partners.map((partner) => (
                                <div 
                                    key={partner.id} 
                                    className={style.partners_scrolling_section_item}
                                >
                                    <div className={style.partners_scrolling_section_item_text}>
                                        {partner.name}
                                    </div>
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {partners.map((partner) => (
                                <div 
                                    key={`duplicate-${partner.id}`} 
                                    className={style.partners_scrolling_section_item}
                                >
                                    <div className={style.partners_scrolling_section_item_text}>
                                        {partner.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
            
        </div>
    )
}

export default MainPage;
