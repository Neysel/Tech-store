"use client";
import * as React from 'react';
import style from './PrivacyPolicy.module.css';
import Header from '../header/Header';
import Footer from '../footer/footer';


const PrivacyPolicy = () => {
    return ( 
    <>
      <Header />
      <div className={style.privacyContainer}>
        <div className={style.glowEffect}></div>
        <div className={style.container}>
          
          {/* Hero Section */}
          <div className={style.heroSection}>
            <div className={style.heroContent}>
              <h1 className={style.heroTitle}>
                {/* QUANTUM */}
                <span className={style.highlight}> PRIVACY PROTOCOL</span>
              </h1>
              <p className={style.heroSubtitle}>
                Version 5.2 | Last Updated: 2085-12-01
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className={style.introSection}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>INTRODUCTION</h2>
              <div className={style.titleUnderline}></div>
            </div>
            <div className={style.content}>
              <p className={style.text}>
                At <span className={style.accent}>Techero Sound</span>, we understand that privacy in the cyber age 
                is paramount. Our Privacy Protocol represents the most advanced 
                data protection system in existence, combining quantum encryption, neural 
                anonymization, and temporal data management to ensure your information 
                remains secure across all dimensions.
              </p>
              <p className={style.text}>
                This document outlines how we collect, use, and protect your personal 
                and neural data when you interact with our products and services.
              </p>
            </div>
          </div>

          {/* Data Collection */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>DATA WE COLLECT</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.dataGrid}>
              <div className={style.dataCard}>
                <div className={style.dataIcon}>👤</div>
                <h3 className={style.dataTitle}>Personal Information</h3>
                <ul className={style.dataList}>
                  <li>Name and contact details</li>
                  <li>Payment information</li>
                  <li>Shipping addresses</li>
                  <li>Account credentials</li>
                </ul>
              </div>
              
              <div className={style.dataCard}>
                <div className={style.dataIcon}>🧠</div>
                <h3 className={style.dataTitle}>Neural Data</h3>
                <ul className={style.dataList}>
                  <li>Brain-wave patterns</li>
                  <li>Audio preference profiles</li>
                  <li>Neural interface metrics</li>
                  <li>Immersion levels</li>
                </ul>
              </div>
              
              <div className={style.dataCard}>
                <div className={style.dataIcon}>📊</div>
                <h3 className={style.dataTitle}>Usage Data</h3>
                <ul className={style.dataList}>
                  <li>Product interaction logs</li>
                  <li>Feature utilization patterns</li>
                  <li>Performance metrics</li>
                  <li>Quantum resonance data</li>
                </ul>
              </div>
              
              <div className={style.dataCard}>
                <div className={style.dataIcon}>🔒</div>
                <h3 className={style.dataTitle}>Security Data</h3>
                <ul className={style.dataList}>
                  <li>Access logs</li>
                  <li>Authentication attempts</li>
                  <li>Quantum encryption keys</li>
                  <li>Temporal access patterns</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Usage */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>HOW WE USE YOUR DATA</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.usageList}>
              <div className={style.usageItem}>
                <h3 className={style.usageTitle}>Product Enhancement</h3>
                <p className={style.usageText}>
                  We analyze usage patterns to improve our audio technology, 
                  creating personalized experiences that adapt to your neural preferences.
                </p>
              </div>
              
              <div className={style.usageItem}>
                <h3 className={style.usageTitle}>Quantum Personalization</h3>
                <p className={style.usageText}>
                  Your neural data helps us create custom audio profiles that 
                  evolve with your brain's unique response patterns over time.
                </p>
              </div>
              
              <div className={style.usageItem}>
                <h3 className={style.usageTitle}>Security Optimization</h3>
                <p className={style.usageText}>
                  We use access patterns and quantum metrics to continuously 
                  enhance our security protocols and protect against threats.
                </p>
              </div>
              
              <div className={style.usageItem}>
                <h3 className={style.usageTitle}>Research & Development</h3>
                <p className={style.usageText}>
                  Anonymized, aggregated data contributes to our ongoing research 
                  in quantum audio technology and neural interfaces.
                </p>
              </div>
            </div>
          </div>

          {/* Quantum Protection */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>QUANTUM PROTECTION</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.protectionGrid}>
              <div className={style.protectionItem}>
                <div className={style.protectionIcon}>🔐</div>
                <div className={style.protectionContent}>
                  <h3 className={style.protectionTitle}>Quantum Encryption</h3>
                  <p className={style.protectionText}>
                    All data is encrypted using quantum-resistant algorithms that 
                    are mathematically unbreakable by current or future computers.
                  </p>
                </div>
              </div>
              
              <div className={style.protectionItem}>
                <div className={style.protectionIcon}>🌌</div>
                <div className={style.protectionContent}>
                  <h3 className={style.protectionTitle}>Temporal Anonymization</h3>
                  <p className={style.protectionText}>
                    Your data exists in multiple temporal states simultaneously, 
                    making it impossible to pinpoint to a specific individual.
                  </p>
                </div>
              </div>
              
              <div className={style.protectionItem}>
                <div className={style.protectionIcon}>🌀</div>
                <div className={style.protectionContent}>
                  <h3 className={style.protectionTitle}>Neural Obfuscation</h3>
                  <p className={style.protectionText}>
                    Neural data is processed through quantum neural networks that 
                    separate identity from behavioral patterns.
                  </p>
                </div>
              </div>
              
              <div className={style.protectionItem}>
                <div className={style.protectionIcon}>⚡</div>
                <div className={style.protectionContent}>
                  <h3 className={style.protectionTitle}>Instant Deletion</h3>
                  <p className={style.protectionText}>
                    When you request data deletion, it's immediately purged from 
                    all quantum states across the temporal continuum.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>YOUR RIGHTS</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.rightsTable}>
              <div className={style.rightsRow}>
                <div className={style.rightsCell}>
                  <h3 className={style.rightsTitle}>ACCESS</h3>
                  <p className={style.rightsText}>
                    Request a quantum copy of all data we hold about you
                  </p>
                </div>
                <div className={style.rightsCell}>
                  <h3 className={style.rightsTitle}>CORRECTION</h3>
                  <p className={style.rightsText}>
                    Update or correct any inaccurate personal information
                  </p>
                </div>
              </div>
              
              <div className={style.rightsRow}>
                <div className={style.rightsCell}>
                  <h3 className={style.rightsTitle}>DELETION</h3>
                  <p className={style.rightsText}>
                    Request complete deletion of your data across all quantum states
                  </p>
                </div>
                <div className={style.rightsCell}>
                  <h3 className={style.rightsTitle}>RESTRICTION</h3>
                  <p className={style.rightsText}>
                    Limit how we process your neural and personal data
                  </p>
                </div>
              </div>
              
              <div className={style.rightsRow}>
                <div className={style.rightsCell}>
                  <h3 className={style.rightsTitle}>PORTABILITY</h3>
                  <p className={style.rightsText}>
                    Receive your data in a quantum-readable format
                  </p>
                </div>
                <div className={style.rightsCell}>
                  <h3 className={style.rightsTitle}>OBJECTION</h3>
                  <p className={style.rightsText}>
                    Object to specific data processing activities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cookies & Tracking */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>QUANTUM COOKIES</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.cookiesContent}>
              <p className={style.text}>
                We use quantum cookies that exist in superposition states, allowing 
                them to serve multiple purposes simultaneously while maintaining 
                user privacy. These include:
              </p>
              
              <div className={style.cookiesList}>
                <div className={style.cookieItem}>
                  <h3 className={style.cookieTitle}>Essential Cookies</h3>
                  <p className={style.cookieDesc}>
                    Required for basic site functionality and quantum operations
                  </p>
                </div>
                
                <div className={style.cookieItem}>
                  <h3 className={style.cookieTitle}>Performance Cookies</h3>
                  <p className={style.cookieDesc}>
                    Help us understand how visitors interact with our quantum interfaces
                  </p>
                </div>
                
                <div className={style.cookieItem}>
                  <h3 className={style.cookieTitle}>Personalization Cookies</h3>
                  <p className={style.cookieDesc}>
                    Remember your preferences for customized audio experiences
                  </p>
                </div>
              </div>
              
              <p className={style.text}>
                You can manage quantum cookie preferences through our Neural Control Panel.
              </p>
            </div>
          </div>

          {/* Data Sharing */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>DATA SHARING</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.sharingContent}>
              <p className={style.text}>
                We never sell your personal or neural data. We only share data with:
              </p>
              
              <div className={style.sharingList}>
                <div className={style.sharingItem}>
                  <div className={style.sharingIcon}>🤖</div>
                  <div className={style.sharingText}>
                    <strong>Quantum Service Providers:</strong> Partners who help us deliver 
                    our services under strict confidentiality agreements
                  </div>
                </div>
                
                <div className={style.sharingItem}>
                  <div className={style.sharingIcon}>⚖️</div>
                  <div className={style.sharingText}>
                    <strong>Legal Authorities:</strong> Only when required by quantum law 
                    enforcement with proper temporal warrants
                  </div>
                </div>
                
                <div className={style.sharingItem}>
                  <div className={style.sharingIcon}>🔬</div>
                  <div className={style.sharingText}>
                    <strong>Research Institutions:</strong> Anonymized, aggregated data for 
                    scientific advancement in audio technology
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* International Transfers */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>QUANTUM DATA TRANSFERS</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.transferContent}>
              <p className={style.text}>
                Your data may be processed in quantum servers located across different 
                temporal zones. All transfers are protected by:
              </p>
              
              <div className={style.transferFeatures}>
                <div className={style.feature}>
                  <div className={style.featureDot}></div>
                  <span>Quantum encryption during transit</span>
                </div>
                <div className={style.feature}>
                  <div className={style.featureDot}></div>
                  <span>Temporal anonymization protocols</span>
                </div>
                <div className={style.feature}>
                  <div className={style.featureDot}></div>
                  <span>Neural data separation algorithms</span>
                </div>
                <div className={style.feature}>
                  <div className={style.featureDot}></div>
                  <span>Interdimensional privacy shields</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Updates */}
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>CONTACT & UPDATES</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.contactContent}>
              <p className={style.text}>
                For privacy-related inquiries or to exercise your rights, contact our 
                Privacy Officer:
              </p>
              
              <div className={style.contactInfo}>
                <div className={style.contactItem}>
                  <strong>Email:</strong> privacy@techero.co.jp
                </div>
                <div className={style.contactItem}>
                  <strong>Quantum Mail:</strong> QPO-42@techero.neuralnet
                </div>
                <div className={style.contactItem}>
                  <strong>Neural Link:</strong> Access through Techero Neural App
                </div>
              </div>
              
              <p className={style.updateNote}>
                <strong>Note:</strong> This Privacy Protocol may be updated to 
                reflect new technological capabilities. Changes will be communicated 
                through quantum entanglement notifications 30 days before taking effect.
              </p>
            </div>
          </div>

          {/* Acceptance */}
          <div className={style.acceptanceSection}>
            <div className={style.acceptanceContent}>
              <h2 className={style.acceptanceTitle}>ACCEPTANCE OF PROTOCOL</h2>
              <p className={style.acceptanceText}>
                By using Techero products and services, you acknowledge and consent to 
                this Privacy Protocol. Your continued use after protocol updates 
                constitutes acceptance of the revised terms.
              </p>
              <div className={style.acceptanceDate}>
                Effective Date: 2085-12-01 | Protocol Version: 5.2
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </> 
    );
}
 
export default PrivacyPolicy;