import * as React from 'react';
import style from "./footer.module.css"
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
    return ( 
        <>
            {/* Cyberpunk Style Footer */}
            <footer className={`bg-gray-950 text-white py-12 relative overflow-hidden ${style.footer_main}`}>
                <div className={style.container}>
                {/* Glowing grid background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>
                
                {/* Grid lines effect */}
                <div className="absolute inset-0 opacity-5">
                    <div className="h-full w-full bg-grid-pattern bg-[length:50px_50px]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                        {/* Brand Column */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center mb-6">
                                <div className="relative">
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                        TECHERO SOUND
                                    </h3>
                                    <div className="h-1 w-full bg-gradient-to-r from-cyan-400 to-blue-500 mt-1"></div>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-6 mt-2 leading-relaxed">
                                Premium audio equipment for the modern listener. 
                                Experience sound like never before in our cyberpunk-inspired audio labs.
                            </p>
                            
                            {/* Address Section */}
                            <div className={`space-y-4 ${style.address_section}`}>
                                <div className={`flex items-start space-x-3 ${style.address_section_item}`}>
                                    <FaMapMarkerAlt className="text-cyan-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h5 className="font-semibold text-cyan-300 mb-1">Neo-Tokyo HQ</h5>
                                        <p className="text-gray-300 text-sm">
                                            2049 Cyber Avenue, District 7<br />
                                            Neo-Tokyo, NT 100-0001<br />
                                            Japan
                                        </p>
                                    </div>
                                </div>
                                <div className={`flex items-center space-x-3 ${style.phone_section}`}>
                                    <FaPhone className="text-cyan-400" />
                                    <span className="text-gray-300">+81 (0)3-2049-0110</span>
                                </div>
                                <div className={`flex items-center space-x-3 ${style.main_sections}`}>
                                    <FaEnvelope className="text-cyan-400" />
                                    <span className="text-gray-300">sound@techero.co.jp</span>
                                </div>
                            </div>
                        </div>

                        {/* Categories Column */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 relative inline-block">
                                <span className="relative z-10">CATEGORIES</span>
                                <div className="absolute -bottom-1 left-0 w-12 h-1 bg-cyan-400"></div>
                            </h4>
                            <ul className={`space-y-3 ${style.categories_list}`}>
                                {[
                                    { href: "/products/headphones", label: "Cyber Headphones" },
                                    { href: "/products/earphones", label: "Neural Earphones" },
                                    { href: "/products/microphones", label: "Quantum Mics" },
                                    { href: "/products/portable_loudspeakers", label: "Holo-Speakers" }
                                ].map((item) => (
                                    <li key={item.href}>
                                        <Link 
                                            href={item.href} 
                                            className={`group flex items-center text-gray-300 hover:text-cyan-300 transition-all duration-300 ${style.categories_items}`}
                                        >
                                            <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                                            <span className="group-hover:translate-x-2 transition-transform duration-300">{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support Column */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 relative inline-block">
                                <span className="relative z-10">SUPPORT</span>
                                <div className="absolute -bottom-1 left-0 w-12 h-1 bg-blue-400"></div>
                            </h4>
                            <ul className={`space-y-3 ${style.support_list}`}>
                                {[
                                    { href: "/contact", label: "Neural Support" },
                                    { href: "/shipping", label: "Drone Delivery" },
                                    { href: "/returns", label: "Cyber Returns" },
                                    { href: "/warranty", label: "Quantum Warranty" }
                                ].map((item) => (
                                    <li key={item.href}>
                                        <Link 
                                            href={item.href} 
                                            className="text-gray-300 hover:text-blue-300 transition-all duration-300 hover:pl-2 block"
                                        >
                                            <span className="relative before:absolute before:-left-3 before:top-1/2 before:w-0 before:h-0.5 before:bg-blue-400 before:transition-all before:duration-300 hover:before:w-2">
                                                {item.label}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter Column */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 relative inline-block">
                                <span className="relative z-10">NEWSLETTER</span>
                                <div className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                            </h4>
                            <p className={`text-gray-300 mb-6 text-sm ${style.newsletter_text}`}>
                                Subscribe for cyber updates and neural offers
                            </p>
                            <div className="space-y-4">
                                <div className={`relative group ${style.newsletter_text_email_input_wrapper}`}>
                                    <input 
                                        type="email" 
                                        placeholder="your@neural.net" 
                                        className={`w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 group-hover:border-cyan-500/50 ${style.newsletter_text_email_input}`}
                                    />
                                    <div className="absolute inset-0 rounded-lg border border-cyan-500/0 group-hover:border-cyan-500/30 transition-all duration-500 pointer-events-none"></div>
                                </div>
                                <button className={`w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden group ${style.newsletter_text_subscribe_button}`}>
                                    <span className="relative z-10">SUBSCRIBE</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </div>

                            {/* Social Links */}
                            <div className="mt-8">
                                <h5 className="font-semibold text-gray-300 mb-4">CONNECT WITH US</h5>
                                <div className={`flex space-x-4 ${style.social_links}`}>
                                    {[
                                        { icon: FaTwitter, color: "hover:text-cyan-400" },
                                        { icon: FaInstagram, color: "hover:text-purple-400" },
                                        { icon: FaFacebookF, color: "hover:text-blue-400" },
                                        { icon: FaYoutube, color: "hover:text-red-400" }
                                    ].map((SocialIcon, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className={`w-10 h-10 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center text-gray-400 ${SocialIcon.color} transition-all duration-300 hover:border-cyan-500/50 hover:scale-110`}
                                        >
                                            <SocialIcon.icon />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-800 pt-8 mt-8 relative">
                        {/* Glowing bar effect */}
                        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                        
                        <div className={`flex flex-col md:flex-row justify-between items-center ${style.bottom_bar}`}>
                            <p className="text-gray-400 text-sm">
                                &copy; 2077 Techero Sound. All neural rights reserved.
                            </p>
                            
                            <div className="flex space-x-6 mt-4 md:mt-0 gap-4">
                                {/* <div className="mt-[200px] bg-blue-500 p-4">This should have 200px margin</div> */}
                                <Link href="/privacy" className="text-gray-400 hover:text-cyan-300 text-sm transition-colors">
                                    Privacy Protocol
                                </Link>
                                <Link href="/terms" className="text-gray-400 hover:text-cyan-300 text-sm transition-colors">
                                    Terms of Service
                                </Link>
                                <Link href="/cookies" className="text-gray-400 hover:text-cyan-300 text-sm transition-colors">
                                    Cookie Matrix
                                </Link>
                            </div>
                        </div>
                    
                    </div>
                </div>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;