"use client";
import * as React from 'react';
import style from './warranty.module.css';
import Header from '../header/Header';
import Footer from '../footer/footer';

const Warranty = () => {
    return ( 
    <>
      <Header />
      <div className={style.warrantyContainer}>
        <div className={style.glowEffect}></div>
        <div className={style.container}>
          
          {/* Hero Section */}
          <div className={style.heroSection}>
            <div className={style.heroContent}>
              <h1 className={style.heroTitle}>
                QUANTUM 
                <span className={style.highlight}> WARRANTY</span>
              </h1>
              <p className={style.heroSubtitle}>
                Advanced protection for your audio technology. Peace of mind, guaranteed.
              </p>
            </div>
          </div>

          {/* Warranty Overview */}
          <div className={style.overviewSection}>
            <div className={style.overviewCard}>
              <div className={style.overviewHeader}>
                <h2 className={style.overviewTitle}>TECHERO QUANTUM WARRANTY</h2>
                <p className={style.overviewSubtitle}>Version 3.7 | Effective 2085</p>
              </div>
              
              <div className={style.warrantyBadge}>
                <div className={style.badgeIcon}>⚡</div>
                <div className={style.badgeContent}>
                  <h3>STANDARD WARRANTY</h3>
                  <p>24 MONTHS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage Section */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>COVERAGE DETAILS</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.coverageGrid}>
              <div className={style.coverageItem}>
                <div className={style.coverageIcon}>🔧</div>
                <h3 className={style.coverageTitle}>Manufacturing Defects</h3>
                <p className={style.coverageText}>
                  Full coverage for any defects in materials or workmanship for 24 months from purchase.
                </p>
              </div>
              
              <div className={style.coverageItem}>
                <div className={style.coverageIcon}>⚡</div>
                <h3 className={style.coverageTitle}>Power Surge Protection</h3>
                <p className={style.coverageText}>
                  Protection against power surges up to 10kV, including quantum resonance events.
                </p>
              </div>
              
              <div className={style.coverageItem}>
                <div className={style.coverageIcon}>🔬</div>
                <h3 className={style.coverageTitle}>Technical Support</h3>
                <p className={style.coverageText}>
                  24/7 neural support for setup, troubleshooting, and optimization of your equipment.
                </p>
              </div>
              
              <div className={style.coverageItem}>
                <div className={style.coverageIcon}>🔄</div>
                <h3 className={style.coverageTitle}>Advanced Replacement</h3>
                <p className={style.coverageText}>
                  Next-day replacement service for qualified claims within the first 12 months.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Section */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>WARRANTY TERMS</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.termsList}>
              <div className={style.termItem}>
                <div className={style.termNumber}>01</div>
                <div className={style.termContent}>
                  <h3 className={style.termTitle}>Eligibility</h3>
                  <p className={style.termText}>
                    This warranty applies only to products purchased directly from Techero Sound 
                    or authorized retailers. Proof of purchase is required for all warranty claims.
                  </p>
                </div>
              </div>
              
              <div className={style.termItem}>
                <div className={style.termNumber}>02</div>
                <div className={style.termContent}>
                  <h3 className={style.termTitle}>Exclusions</h3>
                  <p className={style.termText}>
                    Damage caused by misuse, accidents, modifications, unauthorized repairs, 
                    environmental factors, or normal wear and tear is not covered.
                  </p>
                </div>
              </div>
              
              <div className={style.termItem}>
                <div className={style.termNumber}>03</div>
                <div className={style.termContent}>
                  <h3 className={style.termTitle}>Neural Network Damage</h3>
                  <p className={style.termText}>
                    Damage resulting from improper neural interface connections or exceeding 
                    recommended brain-wave synchronization levels is excluded from coverage.
                  </p>
                </div>
              </div>
              
              <div className={style.termItem}>
                <div className={style.termNumber}>04</div>
                <div className={style.termContent}>
                  <h3 className={style.termTitle}>Transferability</h3>
                  <p className={style.termText}>
                    This warranty is transferable to subsequent owners for the remainder of 
                    the warranty period with proper registration transfer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Claim Process */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>CLAIM PROCESS</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.processSteps}>
              <div className={style.processStep}>
                <div className={style.stepNumber}>1</div>
                <div className={style.stepContent}>
                  <h3 className={style.stepTitle}>Diagnostic Scan</h3>
                  <p className={style.stepText}>
                    Run the Techero Quantum Diagnostic app on your device to identify issues.
                  </p>
                </div>
              </div>
              
              <div className={style.processStep}>
                <div className={style.stepNumber}>2</div>
                <div className={style.stepContent}>
                  <h3 className={style.stepTitle}>Neural Support</h3>
                  <p className={style.stepText}>
                    Connect with our AI support system for initial troubleshooting and guidance.
                  </p>
                </div>
              </div>
              
              <div className={style.processStep}>
                <div className={style.stepNumber}>3</div>
                <div className={style.stepContent}>
                  <h3 className={style.stepTitle}>Claim Submission</h3>
                  <p className={style.stepText}>
                    Submit your claim through our quantum portal with diagnostic results attached.
                  </p>
                </div>
              </div>
              
              <div className={style.processStep}>
                <div className={style.stepNumber}>4</div>
                <div className={style.stepContent}>
                  <h3 className={style.stepTitle}>Resolution</h3>
                  <p className={style.stepText}>
                    Receive repair, replacement, or quantum credit within 5 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Extended Warranty */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>EXTENDED PROTECTION</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.extendedGrid}>
              <div className={style.extendedCard}>
                <h3 className={style.extendedTitle}>QUANTUM PLUS</h3>
                <div className={style.extendedPrice}>$99<span>/year</span></div>
                <ul className={style.extendedFeatures}>
                  <li>Extended to 5 years total</li>
                  <li>Accidental damage coverage</li>
                  <li>Neural interface protection</li>
                  <li>Priority quantum support</li>
                  <li>Annual device calibration</li>
                </ul>
                <button className={style.extendedButton}>UPGRADE NOW</button>
              </div>
              
              <div className={style.extendedCard}>
                <h3 className={style.extendedTitle}>NEURAL PRO</h3>
                <div className={style.extendedPrice}>$199<span>/year</span></div>
                <ul className={style.extendedFeatures}>
                  <li>Lifetime warranty</li>
                  <li>Complete accident protection</li>
                  <li>Neural network insurance</li>
                  <li>24/7 human specialist</li>
                  <li>Annual hardware upgrade</li>
                </ul>
                <button className={style.extendedButton}>GET PROTECTED</button>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>FREQUENTLY ASKED QUESTIONS</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.faqList}>
              <div className={style.faqItem}>
                <h3 className={style.faqQuestion}>Does the warranty cover quantum resonance damage?</h3>
                <p className={style.faqAnswer}>
                  Yes, standard warranty covers quantum resonance events up to 5.3 terahertz. 
                  For higher frequencies, Quantum Plus or Neural Pro coverage is recommended.
                </p>
              </div>
              
              <div className={style.faqItem}>
                <h3 className={style.faqQuestion}>How do I transfer warranty to a new owner?</h3>
                <p className={style.faqAnswer}>
                  Use the Techero Neural Network app to initiate transfer. Both parties must 
                  verify identity through quantum biometrics.
                </p>
              </div>
              
              <div className={style.faqItem}>
                <h3 className={style.faqQuestion}>Are neural interface malfunctions covered?</h3>
                <p className={style.faqAnswer}>
                  Standard warranty covers manufacturer defects in neural interfaces. 
                  User-induced malfunctions require Neural Pro coverage.
                </p>
              </div>
              
              <div className={style.faqItem}>
                <h3 className={style.faqQuestion}>What's the response time for claims?</h3>
                <p className={style.faqAnswer}>
                  Standard claims: 5 business days. Quantum Plus: 48 hours. Neural Pro: 
                  12 hours with quantum teleportation option.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={style.ctaSection}>
            <h2 className={style.ctaTitle}>NEED WARRANTY SUPPORT?</h2>
            <p className={style.ctaText}>
              Connect with our quantum warranty system for immediate assistance.
            </p>
            <div className={style.ctaButtons}>
              <a href="/contacts" className={style.ctaButton}>CONTACT SUPPORT</a>
              <a href="#" className={style.ctaButtonSecondary}>CHECK WARRANTY STATUS</a>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </> 
    );
}
 
export default Warranty;