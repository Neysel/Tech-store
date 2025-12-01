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
            <Link href="/products/all_products?sale=true">
            <div className={ `container mx-auto px-4 text-center relative z-10 ${style.cyberpunkAd_container}`}>
                    <h2 className="text-4xl font-bold mb-4" style={{
                        // background: 'linear-gradient(45deg, #00ffff, #0099ff)',
                        WebkitBackgroundClip: 'text',
                        // WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        SUMMER SALE
                    </h2>
                    <p className="text-xl mb-6 max-w-2xl mx-auto text-cyan-100 ">
                        Get up to 50% off on selected audio gear. Limited time neural network offer!
                    </p>
                    <div className="flex justify-center gap-4 mb-8">
                        <span className="text-2xl font-bold bg-gradient-to-r">
                            50% OFF
                        </span>
                        <span className="text-2xl font-bold bg-gradient-to-r">
                            FREE SHIPPING
                        </span>
                    </div>
                    
                        <button className={style.cyberpunkButton}>
                            ACTIVATE DEAL  <svg width="26px" height="26px" viewBox="-19.04 0 75.804 75.804" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_65" data-name="Group 65" transform="translate(-831.568 -384.448)"> <path id="Path_57" data-name="Path 57" d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z" fill="#0c2c67"></path> </g> </g></svg>
                        </button>
                      </div>
                  </Link>
            </section>

            {/* Ad Section 2 - New Arrivals */}
            <section className={`py-20 text-white ${style.cyberpunkAd}`}>
                <div className={`container mx-auto px-4 ${style.cyberpunkAd_container_two_parts_container}`}>
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 ${style.cyberpunkAd_wrapper}`}>

                        {/* first part */}
                         <Link href="https://www.youtube.com/" target="_blank">
                        <div className={style.image_podcast_ad}>                            
                        </div>
                        </Link>

                        {/* second part */}
                         <div className={style.image_empty_ad}>                            
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
