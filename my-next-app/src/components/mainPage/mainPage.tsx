"use client"
import React, { useEffect } from "react";

import style from './mainPage.module.css';
// import Boxes from '../homePageBoxes/boxes';
import headphoneImg from '../../src/app/assets/component1.png';
import speakersImg from '../../src/app/assets/component2.png';
import earphonesImg from '../../src/app/assets/component3.png';
// import SpeakersComp from '../speakersComponent/speakersComp';
// import { fetchOAuthToken, setCookies } from '../../lib/auth';
interface MainPageProps {
    accessToken: {value: string} | null;
  }
const MainPage: React.FC<MainPageProps> = ({accessToken}) => {
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
        
    }, [accessToken]);

    return (
        <div className={style.homePage}>
            <section className={style.section1}>
                <div className={style.section1SubDiv}>
                    <div className={style.titleDescription}>
                        <p className={style.newProd}>NEW PRODUCT</p>
                        <h1>XX99 MARK II HEADPHONES</h1>
                        <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>

                        <button className={style.seeProductBtn}>SEE PRODUCT</button>
                        <h2 className={style.promoCode}>Promo Code: HeadPhone345</h2>
                    </div>
                </div>
            </section>
            <section className={style.section2}>
                {/* <Boxes img={headphoneImg} title='HEADPHONES' link=''/>
                <Boxes img={speakersImg} title='SPEAKERS' link=''/>
                <Boxes img={earphonesImg} title='EARPHONES' link=''/> */}
            </section>
            {/* <SpeakersComp/> */}
        </div>
    )
}

export default MainPage;
