"use client"
import React, { useEffect } from "react";

import style from './mainPage.module.css';

// import Boxes from '../homePageBoxes/boxes';
import headphoneImg from '../../src/app/assets/component1.png';
import speakersImg from '../../src/app/assets/component2.png';
import earphonesImg from '../../src/app/assets/component3.png';
import Link from "next/link";
import Header from "../header/Header";
// import SpeakersComp from '../speakersComponent/speakersComp';
// import { fetchOAuthToken, setCookies } from '../../lib/auth';

interface MainPageProps {
    accessToken: {value: string} | null;
  }

const MainPage = () => {
    useEffect(() => {
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
        
    });

    return (
        <div className={style.homePage}>
            <Header/>
            <section className={style.section1}>
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
            <section className={style.section2}>
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
                {/* <Boxes img={headphoneImg} title='HEADPHONES' link=''/>
                <Boxes img={speakersImg} title='SPEAKERS' link=''/>
                <Boxes img={earphonesImg} title='EARPHONES' link=''/> */}
            </section>
            <footer/>
        </div>
    )
}

export default MainPage;
