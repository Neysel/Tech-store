import * as React from 'react';
import style from './Shipping.module.css';
import Header from '../header/Header';
import { FaRocket, FaBox, FaGlobe, FaBoxOpen, FaShieldAlt, FaClock, FaMapMarkerAlt, FaTruck } from 'react-icons/fa';
import Footer from '../footer/footer';

const Shipping = () => {
    return ( 
    <>
      <Header />
      <div className={style.shippingContainer}>
        <div className={style.glowEffect}></div>
        <div className={style.container}>
          
          {/* Hero Section */}
          <div className={style.heroSection}>
            <div className={style.heroContent}>
              <h1 className={style.heroTitle}>
                QUANTUM
                <span className={style.highlight}> DELIVERY NETWORK</span>
              </h1>
              <p className={style.heroSubtitle}>
                Instant shipping across dimensions. Your audio, delivered at light speed.
              </p>
            </div>
          </div>

          {/* Delivery Options */}
          <div className={style.optionsSection}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>DELIVERY OPTIONS</h2>
              <div className={style.titleUnderline}></div>
              <p className={style.sectionSubtitle}>Choose your delivery experience</p>
            </div>
            
            <div className={style.optionsGrid}>
              <div className={style.optionCard}>
                <div className={style.optionHeader}>
                  <div className={style.optionIcon}>
                    <FaRocket />
                  </div>
                  <h3 className={style.optionName}> INSTANT</h3>
                </div>
                <div className={style.optionPrice}>$49.99</div>
                <div className={style.optionDescription}>
                  Teleportation delivery within 15 minutes to any location
                </div>
                <ul className={style.optionFeatures}>
                  <li>15-minute delivery guarantee</li>
                  <li> teleportation</li>
                  <li>No size or weight restrictions</li>
                  <li>Interdimensional tracking</li>
                  <li>Zero carbon footprint</li>
                </ul>
                <div className={style.optionTag}>MOST POPULAR</div>
              </div>
              
              <div className={style.optionCard}>
                <div className={style.optionHeader}>
                  <div className={style.optionIcon}>
                    <FaBox />
                  </div>
                  <h3 className={style.optionName}>DRONE EXPRESS</h3>
                </div>
                <div className={style.optionPrice}>$19.99</div>
                <div className={style.optionDescription}>
                  AI-guided drone delivery within 2 hours to urban areas
                </div>
                <ul className={style.optionFeatures}>
                  <li>2-hour delivery window</li>
                  <li>AI-optimized routes</li>
                  <li>Signature verification</li>
                  <li>Real-time hologram tracking</li>
                  <li>Weather-resistant drones</li>
                </ul>
                <div className={style.optionTag}>ECO-FRIENDLY</div>
              </div>
              
              <div className={style.optionCard}>
                <div className={style.optionHeader}>
                  <div className={style.optionIcon}>
                    <FaTruck />
                  </div>
                  <h3 className={style.optionName}>STANDARD NEURAL</h3>
                </div>
                <div className={style.optionPrice}>$9.99</div>
                <div className={style.optionDescription}>
                  Standard neural network delivery within 1-3 business days
                </div>
                <ul className={style.optionFeatures}>
                  <li>1-3 business days</li>
                  <li>Carbon-neutral shipping</li>
                  <li>Secure package handling</li>
                  <li>Neural network tracking</li>
                  <li>Free for orders over $500</li>
                </ul>
                <div className={style.optionTag}>FREE OVER $500</div>
              </div>
            </div>
          </div>

          {/* Tracking System */}
          <div className={style.trackingSection}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}> TRACKING</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.trackingDemo}>
              <div className={style.trackingVisual}>
                <div className={style.trackingGrid}>
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className={style.gridCell}></div>
                  ))}
                </div>
                <div className={style.trackingPath}>
                  <div className={style.trackingDot} style={{ animationDelay: '0s' }}></div>
                  <div className={style.trackingDot} style={{ animationDelay: '0.5s' }}></div>
                  <div className={style.trackingDot} style={{ animationDelay: '1s' }}></div>
                  <div className={style.trackingDot} style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
              
              <div className={style.trackingInfo}>
                <h3 className={style.trackingTitle}>REAL-TIME  TRACKING</h3>
                <p className={style.trackingText}>
                  Track your package across multiple dimensions in real-time. Our  
                  tracking system provides updates every 0.5 seconds, including:
                </p>
                
                <div className={style.trackingStats}>
                  <div className={style.statItem}>
                    <div className={style.statValue}>0.5s</div>
                    <div className={style.statLabel}>Update Frequency</div>
                  </div>
                  <div className={style.statItem}>
                    <div className={style.statValue}>99.9%</div>
                    <div className={style.statLabel}>Accuracy Rate</div>
                  </div>
                  <div className={style.statItem}>
                    <div className={style.statValue}>∞</div>
                    <div className={style.statLabel}>Dimensions Tracked</div>
                  </div>
                </div>
                
                <div className={style.trackingInput}>
                  <input 
                    type="text" 
                    placeholder="ENTER  TRACKING CODE" 
                    className={style.trackInput}
                  />
                  <button className={style.trackButton}>TRACK NOW</button>
                </div>
              </div>
            </div>
          </div>

          {/* International Shipping */}
          <div className={style.internationalSection}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>GLOBAL COVERAGE</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.coverageContent}>
              <div className={style.coverageMap}>
                <div className={style.mapVisual}>
                  <div className={style.mapDot} style={{ top: '30%', left: '75%' }}></div>
                  <div className={style.mapDot} style={{ top: '45%', left: '50%' }}></div>
                  <div className={style.mapDot} style={{ top: '40%', left: '20%' }}></div>
                  <div className={style.mapDot} style={{ top: '60%', left: '60%' }}></div>
                  <div className={style.mapDot} style={{ top: '70%', left: '85%' }}></div>
                </div>
              </div>
              
              <div className={style.coverageInfo}>
                <h3 className={style.coverageTitle}>WORLDWIDE  DELIVERY</h3>
                <p className={style.coverageText}>
                  We deliver to every corner of the globe, including off-world colonies 
                  and lunar bases. Our  delivery network spans:
                </p>
                
                <div className={style.regionList}>
                  <div className={style.regionItem}>
                    <FaGlobe className={style.regionIcon} />
                    <div className={style.regionContent}>
                      <h4>Earth Delivery</h4>
                      <p>All countries and territories</p>
                    </div>
                  </div>
                  
                  <div className={style.regionItem}>
                    <FaRocket className={style.regionIcon} />
                    <div className={style.regionContent}>
                      <h4>Lunar Bases</h4>
                      <p>Moon colonies and research stations</p>
                    </div>
                  </div>
                  
                  <div className={style.regionItem}>
                    <FaShieldAlt className={style.regionIcon} />
                    <div className={style.regionContent}>
                      <h4>Orbital Stations</h4>
                      <p>Space stations and orbital habitats</p>
                    </div>
                  </div>
                  
                  <div className={style.regionItem}>
                    <FaMapMarkerAlt className={style.regionIcon} />
                    <div className={style.regionContent}>
                      <h4>Mars Colonies</h4>
                      <p>Red planet settlements (extra charges apply)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Times */}
          <div className={style.timesSection}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>DELIVERY TIMELINES</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.timeline}>
              <div className={style.timelineItem}>
                <div className={style.timeIcon}>
                  <FaClock />
                </div>
                <div className={style.timeContent}>
                  <h3 className={style.timeTitle}>ORDER PROCESSING</h3>
                  <p className={style.timeText}>0-15 minutes</p>
                  <p className={style.timeDesc}>
                     scanning and verification of your order
                  </p>
                </div>
              </div>
              
              <div className={style.timelineItem}>
                <div className={style.timeIcon}>
                  <FaBoxOpen />
                </div>
                <div className={style.timeContent}>
                  <h3 className={style.timeTitle}>PACKAGING</h3>
                  <p className={style.timeText}>5-10 minutes</p>
                  <p className={style.timeDesc}>
                    Anti-gravity packaging and  seal application
                  </p>
                </div>
              </div>
              
              <div className={style.timelineItem}>
                <div className={style.timeIcon}>
                  <FaTruck />
                </div>
                <div className={style.timeContent}>
                  <h3 className={style.timeTitle}>DISPATCH</h3>
                  <p className={style.timeText}>Instant</p>
                  <p className={style.timeDesc}>
                     teleportation or drone deployment
                  </p>
                </div>
              </div>
              
              <div className={style.timelineItem}>
                <div className={style.timeIcon}>
                  <FaShieldAlt />
                </div>
                <div className={style.timeContent}>
                  <h3 className={style.timeTitle}>DELIVERY & VERIFICATION</h3>
                  <p className={style.timeText}>15min - 3 days</p>
                  <p className={style.timeDesc}>
                    Delivery based on selected option + biometric verification
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Packaging */}
          <div className={style.packagingSection}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}> PACKAGING</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.packagingGrid}>
              <div className={style.packageFeature}>
                <div className={style.featureIcon}>🌌</div>
                <h3 className={style.featureTitle}>Anti-Gravity Foam</h3>
                <p className={style.featureText}>
                  Zero-gravity protection that adapts to any shape
                </p>
              </div>
              
              <div className={style.packageFeature}>
                <div className={style.featureIcon}>🌀</div>
                <h3 className={style.featureTitle}> Seal</h3>
                <p className={style.featureText}>
                  Tamper-proof seal that only opens for verified recipients
                </p>
              </div>
              
              <div className={style.packageFeature}>
                <div className={style.featureIcon}>❄️</div>
                <h3 className={style.featureTitle}>Temporal Stasis</h3>
                <p className={style.featureText}>
                  Time-locked packaging that prevents aging or damage
                </p>
              </div>
              
              <div className={style.packageFeature}>
                <div className={style.featureIcon}>♻️</div>
                <h3 className={style.featureTitle}>Self-Recycling</h3>
                <p className={style.featureText}>
                  Packaging that dissolves into harmless nanoparticles after use
                </p>
              </div>
            </div>
          </div>

          {/* Restrictions */}
          <div className={style.restrictionsSection}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>DELIVERY RESTRICTIONS</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.restrictionsGrid}>
              <div className={style.restrictionCard}>
                <h3 className={style.restrictionTitle}> ZONES</h3>
                <p className={style.restrictionText}>
                  Areas with  interference may experience delayed teleportation. 
                  These include time dilation fields and black hole proximities.
                </p>
              </div>
              
              <div className={style.restrictionCard}>
                <h3 className={style.restrictionTitle}>WEATHER CONDITIONS</h3>
                <p className={style.restrictionText}>
                  Severe  storms or solar flares may temporarily disrupt 
                  interdimensional delivery networks. Check space weather alerts.
                </p>
              </div>
              
              <div className={style.restrictionCard}>
                <h3 className={style.restrictionTitle}>CUSTOMS & REGULATIONS</h3>
                <p className={style.restrictionText}>
                  Interplanetary deliveries require compliance with local  
                  import laws. Additional documentation may be needed for Mars.
                </p>
              </div>
              
              <div className={style.restrictionCard}>
                <h3 className={style.restrictionTitle}>SIZE LIMITATIONS</h3>
                <p className={style.restrictionText}>
                   teleportation limited to items under 1000kg. Larger items 
                  require special dimensional expansion protocols.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className={style.faqSection}>
            <div className={style.sectionHeader}>
              <h2 className={style.sectionTitle}>FREQUENTLY ASKED QUESTIONS</h2>
              <div className={style.titleUnderline}></div>
            </div>
            
            <div className={style.faqGrid}>
              <div className={style.faqItem}>
                <h3 className={style.faqQuestion}>How does  teleportation delivery work?</h3>
                <p className={style.faqAnswer}>
                  We convert your package into  data, transmit it via  entanglement, 
                  and reassemble it at the destination. The process takes less than 15 minutes.
                </p>
              </div>
              
              <div className={style.faqItem}>
                <h3 className={style.faqQuestion}>Is drone delivery available in my area?</h3>
                <p className={style.faqAnswer}>
                  Drone delivery is available in 95% of urban areas worldwide. Enter your 
                  address during checkout to check availability in real-time.
                </p>
              </div>
              
              <div className={style.faqItem}>
                <h3 className={style.faqQuestion}>What happens if I'm not home for delivery?</h3>
                <p className={style.faqAnswer}>
                  Our  delivery system can hold packages in temporal stasis until 
                  you're available, or deliver to a secure  locker near you.
                </p>
              </div>
              
              <div className={style.faqItem}>
                <h3 className={style.faqQuestion}>Can I change delivery option after ordering?</h3>
                <p className={style.faqAnswer}>
                  Yes, you can upgrade to faster delivery up to the moment of dispatch 
                  through your neural order management interface.
                </p>
              </div>
              
              <div className={style.faqItem}>
                <h3 className={style.faqQuestion}>How are packages protected during teleportation?</h3>
                <p className={style.faqAnswer}>
                  Each package is surrounded by a  stability field that maintains 
                  molecular integrity across all 11 dimensions of travel.
                </p>
              </div>
              
              <div className={style.faqItem}>
                <h3 className={style.faqQuestion}>What's your delivery success rate?</h3>
                <p className={style.faqAnswer}>
                  99.97% success rate across all delivery methods. Our  AI 
                  continuously optimizes routes and resolves delivery anomalies.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={style.ctaSection}>
            <h2 className={style.ctaTitle}>READY FOR  DELIVERY?</h2>
            <p className={style.ctaText}>
              Experience the future of shipping with our instant delivery network.
            </p>
            <div className={style.ctaButtons}>
              <a href="/products/all_products" className={style.ctaButton}>SHOP NOW</a>
              <a href="/contacts" className={style.ctaButtonSecondary}>CONTACT SHIPPING SUPPORT</a>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </> 
    );
}
 
export default Shipping;