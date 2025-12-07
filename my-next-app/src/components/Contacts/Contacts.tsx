import * as React from 'react';
import style from './Contacts.module.css';
import Header from '../header/Header';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaTwitter, FaInstagram, FaFacebookF, FaYoutube, FaHeadphones } from 'react-icons/fa';
import Footer from '../footer/footer';

const Contacts = () => {
    return ( 
    <>
      {/* <Header /> */}
      <div className={style.contactsContainer}>
        <div className={style.glowEffect}></div>
        <div className={style.container}>
          
          {/* Hero Section */}
          <div className={style.heroSection}>
            <div className={style.heroContent}>
              <h1 className={style.heroTitle}>
                CONNECT WITH 
                <span className={style.highlight}> TECHERO</span>
              </h1>
              <p className={style.heroSubtitle}>
                Where innovation meets audio excellence. Reach out to our neural network.
              </p>
            </div>
          </div>

          {/* Contact Grid */}
          <div className={style.contactGrid}>
            {/* Contact Info Card */}
            <div className={style.contactCard}>
              <div className={style.cardHeader}>
                <div className={style.cardIcon}>
                  <FaHeadphones />
                </div>
                <h2 className={style.cardTitle}>TECHERO SOUND</h2>
              </div>
              
              <p className={style.cardDescription}>
                Premium audio equipment for the modern listener. Experience sound like never before in our cyberpunk-inspired audio labs.
              </p>
              
              <div className={style.contactInfo}>
                <div className={style.contactItem}>
                  <div className={style.contactIcon}>
                    <FaMapMarkerAlt />
                  </div>
                  <div className={style.contactContent}>
                    <h3 className={style.contactLabel}>Neo-Tokyo HQ</h3>
                    <p className={style.contactText}>
                      2049 Cyber Avenue, District 7<br />
                      Neo-Tokyo, NT 100-0001<br />
                      Japan
                    </p>
                  </div>
                </div>
                
                <div className={style.contactItem}>
                  <div className={style.contactIcon}>
                    <FaPhone />
                  </div>
                  <div className={style.contactContent}>
                    <h3 className={style.contactLabel}>Neural Communications</h3>
                    <p className={style.contactText}>+81 (0)3-2049-0110</p>
                  </div>
                </div>
                
                <div className={style.contactItem}>
                  <div className={style.contactIcon}>
                    <FaEnvelope />
                  </div>
                  <div className={style.contactContent}>
                    <h3 className={style.contactLabel}>Quantum Mail</h3>
                    <p className={style.contactText}>sound@techero.co.jp</p>
                  </div>
                </div>
                
                <div className={style.contactItem}>
                  <div className={style.contactIcon}>
                    <FaClock />
                  </div>
                  <div className={style.contactContent}>
                    <h3 className={style.contactLabel}>Operational Hours</h3>
                    <p className={style.contactText}>
                      24/7 Neural Support<br />
                      Physical Store: 10:00 - 22:00 (JST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className={style.formCard}>
              <h2 className={style.formTitle}>SEND NEURAL MESSAGE</h2>
              <p className={style.formSubtitle}>Connect with our audio specialists</p>
              
              <form className={style.contactForm}>
                <div className={style.formGroup}>
                  <input 
                    type="text" 
                    placeholder="YOUR NAME" 
                    className={style.formInput}
                  />
                </div>
                
                <div className={style.formGroup}>
                  <input 
                    type="email" 
                    placeholder="NEURAL EMAIL" 
                    className={style.formInput}
                  />
                </div>
                
                <div className={style.formGroup}>
                  <select className={style.formSelect}>
                    <option value="">SELECT REASON</option>
                    <option value="support">Technical Support</option>
                    <option value="product">Product Inquiry</option>
                    <option value="business">Business Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className={style.formGroup}>
                  <textarea 
                    placeholder="YOUR MESSAGE" 
                    rows={5}
                    className={style.formTextarea}
                  ></textarea>
                </div>
                
                <button type="submit" className={style.submitButton}>
                  TRANSMIT MESSAGE
                </button>
              </form>
            </div>
          </div>

          {/* Global Offices */}
          <div className={style.officesSection}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>GLOBAL NODES</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.officesGrid}>
              <div className={style.officeCard}>
                <h3 className={style.officeCity}>SAN FRANCISCO</h3>
                <p className={style.officeAddress}>
                  101 Silicon Bay<br />
                  Cyber Valley, CA 94107<br />
                  United States
                </p>
                <p className={style.officeContact}>
                  +1 (415) 2049-0110<br />
                  us.sound@techero.co.jp
                </p>
              </div>
              
              <div className={style.officeCard}>
                <h3 className={style.officeCity}>BERLIN</h3>
                <p className={style.officeAddress}>
                  Techstrasse 77<br />
                  10115 Berlin<br />
                  Germany
                </p>
                <p className={style.officeContact}>
                  +49 (30) 2049-0110<br />
                  eu.sound@techero.co.jp
                </p>
              </div>
              
              <div className={style.officeCard}>
                <h3 className={style.officeCity}>SINGAPORE</h3>
                <p className={style.officeAddress}>
                  Marina Bay Tech Tower<br />
                  018971 Singapore
                </p>
                <p className={style.officeContact}>
                  +65 6204-9011<br />
                  asia.sound@techero.co.jp
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className={style.socialSection}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>CONNECT WITH US</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <p className={style.socialText}>Join our neural network across cyberspace</p>
            
            <div className={style.socialIcons}>
              <a href="#" className={style.socialLink}>
                <FaTwitter />
                <span>Twitter</span>
              </a>
              
              <a href="#" className={style.socialLink}>
                <FaInstagram />
                <span>Instagram</span>
              </a>
              
              <a href="#" className={style.socialLink}>
                <FaFacebookF />
                <span>Facebook</span>
              </a>
              
              <a href="#" className={style.socialLink}>
                <FaYoutube />
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className={style.mapSection}>
            <div className={style.mapPlaceholder}>
              <div className={style.mapText}>
                <h3>NEURAL LOCATION MAP</h3>
                <p>Quantum entangled coordinates loading...</p>
              </div>
              <div className={style.mapGrid}>
                {[...Array(25)].map((_, i) => (
                  <div key={i} className={style.mapCell}></div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </> 
    );
}
 
export default Contacts;