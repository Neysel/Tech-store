import * as React from 'react';
import style from './About-us.module.css';
import Header from '../header/Header';
import Footer from '../footer/footer';


const About_Us = () => {
    return ( 
    <>
      {/* <Header /> */}
      <div className={style.aboutContainer}>
        <div className={style.glowEffect}></div>
        <div className={style.container}>
          {/* Hero Section */}
          <div className={style.heroSection}>
            <div className={style.heroContent}>
              <h1 className={style.heroTitle}>
                REDEFINING AUDIO
                <span className={style.highlight}> IN THE CYBER ERA</span>
              </h1>
              <p className={style.heroSubtitle}>
                Where cutting-edge technology meets immersive sound experiences
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>OUR MISSION</h2>
              <div className={style.titleUnderline}></div>
            </div>
            <div className={style.sectionContent}>
              <p className={style.text}>
                At <span className={style.accent}>TECHERO SOUND</span>, we're on a mission to revolutionize the way 
                humanity experiences audio. Born in the neon-lit streets of Neo-Tokyo, we combine 
                cutting-edge technology with artistic craftsmanship to create audio equipment that 
                doesn't just play sound—it <span className={style.accent}>transcends reality</span>.
              </p>
            </div>
          </div>

          {/* Timeline Section */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>OUR JOURNEY</h2>
              <div className={style.titleUnderline}></div>
            </div>
            <div className={style.timeline}>
              <div className={style.timelineItem}>
                <div className={style.timelineYear}>2077</div>
                <div className={style.timelineContent}>
                  <h3 className={style.timelineTitle}>FOUNDATION</h3>
                  <p className={style.timelineText}>
                    Established in the heart of Neo-Tokyo's tech district by audio engineer 
                    Kaito Saito and cybernetics expert Maya Chen.
                  </p>
                </div>
              </div>
              
              <div className={style.timelineItem}>
                <div className={style.timelineYear}>2080</div>
                <div className={style.timelineContent}>
                  <h3 className={style.timelineTitle}>NEURAL AUDIO BREAKTHROUGH</h3>
                  <p className={style.timelineText}>
                    Developed the world's first neural-linked audio interface, allowing 
                    direct brain-sound connection for immersive experiences.
                  </p>
                </div>
              </div>
              
              <div className={style.timelineItem}>
                <div className={style.timelineYear}>2083</div>
                <div className={style.timelineContent}>
                  <h3 className={style.timelineTitle}>GLOBAL EXPANSION</h3>
                  <p className={style.timelineText}>
                    Expanded to 15 major cities worldwide, bringing our cyberpunk audio 
                    technology to millions of users across the globe.
                  </p>
                </div>
              </div>
              
              <div className={style.timelineItem}>
                <div className={style.timelineYear}>2085</div>
                <div className={style.timelineContent}>
                  <h3 className={style.timelineTitle}>THE FUTURE</h3>
                  <p className={style.timelineText}>
                    Currently developing quantum-resonance audio technology that promises 
                    to eliminate all physical audio hardware by 2090.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>THE FOUNDERS</h2>
              <div className={style.titleUnderline}></div>
            </div>
            <div className={style.teamGrid}>
              <div className={style.teamCard}>
                <div className={style.teamAvatar}>
                  <div className={style.avatarIcon}>KS</div>
                </div>
                <h3 className={style.teamName}>KAITO SAITO</h3>
                <p className={style.teamRole}>Chief Audio Engineer</p>
                <p className={style.teamBio}>
                  Former NASA audio specialist who revolutionized zero-gravity acoustics. 
                  Holds 47 patents in audio technology.
                </p>
              </div>
              
              <div className={style.teamCard}>
                <div className={style.teamAvatar}>
                  <div className={style.avatarIcon}>MC</div>
                </div>
                <h3 className={style.teamName}>MAYA CHEN</h3>
                <p className={style.teamRole}>Cybernetics Director</p>
                <p className={style.teamBio}>
                  Neural interface pioneer with a background in cybernetic enhancements. 
                  Her work bridges biology and technology.
                </p>
              </div>
              
              <div className={style.teamCard}>
                <div className={style.teamAvatar}>
                  <div className={style.avatarIcon}>RD</div>
                </div>
                <h3 className={style.teamName}>RENJI DATSUSHI</h3>
                <p className={style.teamRole}>Quantum Physicist</p>
                <p className={style.teamBio}>
                  Leading our quantum audio division. His research in sound particle 
                  manipulation is changing audio forever.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Section */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>OUR TECHNOLOGY</h2>
              <div className={style.titleUnderline}></div>
            </div>
            <div className={style.techGrid}>
              <div className={style.techItem}>
                <div className={style.techIcon}>⚡</div>
                <h3 className={style.techTitle}>Neural Sync</h3>
                <p className={style.techDesc}>
                  Direct brain-audio interface technology for unparalleled immersion
                </p>
              </div>
              
              <div className={style.techItem}>
                <div className={style.techIcon}>🔬</div>
                <h3 className={style.techTitle}>Quantum Resonance</h3>
                <p className={style.techDesc}>
                  Manipulating sound at quantum level for crystal clear audio
                </p>
              </div>
              
              <div className={style.techItem}>
                <div className={style.techIcon}>🌀</div>
                <h3 className={style.techTitle}>Holo-Acoustics</h3>
                <p className={style.techDesc}>
                  3D sound fields that create audio holograms in your space
                </p>
              </div>
              
              <div className={style.techItem}>
                <div className={style.techIcon}>🌌</div>
                <h3 className={style.techTitle}>Zero-G Audio</h3>
                <p className={style.techDesc}>
                  Space-tested audio technology for perfect sound in any environment
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={style.ctaSection}>
            <h2 className={style.ctaTitle}>JOIN THE AUDIO REVOLUTION</h2>
            <p className={style.ctaText}>
              Experience sound that transcends reality. Welcome to the future of audio.
            </p>
            <a href="/products/all_products" className={style.ctaButton}>
              EXPLORE PRODUCTS
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </> 
    );
}
 
export default About_Us;