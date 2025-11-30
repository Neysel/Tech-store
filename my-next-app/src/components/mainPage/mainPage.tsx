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
        { id: 1, name: "Sony", logo: "/partners/sony.png" },
        { id: 2, name: "Bose", logo: "/partners/bose.png" },
        { id: 3, name: "Sennheiser", logo: "/partners/sennheiser.png" },
        { id: 4, name: "Audio-Technica", logo: "/partners/audio-technica.png" },
        { id: 5, name: "JBL", logo: "/partners/jbl.png" },
        { id: 6, name: "Shure", logo: "/partners/shure.png" },
        { id: 7, name: "Beyerdynamic", logo: "/partners/beyerdynamic.png" },
        { id: 8, name: "AKG", logo: "/partners/akg.png" },
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
                            SEE OUR PRODUCTS
                        </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.section_2}>
                <div className={style.category_section}>
                    <div className={style.subcategory_section}> 
                        <div>
                        HEADPHONES
                        </div>
                        <div>
                        LOUDSPEAKERS
                        </div>
                    </div>

                    <div className={style.subcategory_section}>
                        <div>
                            MICROPHONES
                        </div>
                        <div>
                            EARPHONES
                        </div>
                    </div>

                </div>

            </section>
            {/* ads section */}
            <section className={style.section_3}>

            </section>

            {/* ads section */}
            <section className={style.section_4}>

            </section>

            {/* partners */}
            <section className={style.section_5}>

            </section>  
            <Footer/>
            
        </div>
    )
}

export default MainPage;
