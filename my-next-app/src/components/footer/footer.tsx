import * as React from 'react';
import style from "./footer.module.css"
import Link from 'next/link';

export const Footer = () => {
    return ( 
        <>
                       {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">TECHERO SOUND</h3>
                            <p className="text-gray-400">
                                Premium audio equipment for the modern listener. Experience sound like never before.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Categories</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/products/headphones" className="hover:text-white transition-colors">Headphones</Link></li>
                                <li><Link href="/products/earphones" className="hover:text-white transition-colors">Earphones</Link></li>
                                <li><Link href="/products/microphones" className="hover:text-white transition-colors">Microphones</Link></li>
                                <li><Link href="/products/portable_loudspeakers" className="hover:text-white transition-colors">Speakers</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                                <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
                                <li><Link href="/returns" className="hover:text-white transition-colors">Returns</Link></li>
                                <li><Link href="/warranty" className="hover:text-white transition-colors">Warranty</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Newsletter</h4>
                            <p className="text-gray-400 mb-4">Subscribe for updates and offers</p>
                            <div className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Your email" 
                                    className="px-4 py-2 rounded-l-lg text-gray-900 flex-1"
                                />
                                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Techero Sound. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;