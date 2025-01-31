import React from 'react';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <div className="relative mt-16">
      <footer className="bg-gradient-to-b from-blue-200/90 to-blue-300/90 backdrop-blur-sm py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {/* Brand Section */}
            <div className="md:col-span-2 pr-8">
              <h3 className="text-2xl font-serif text-slate-900 mb-6">
                Riviera Yachts
              </h3>
              <p className="text-slate-700 mb-8 leading-relaxed text-lg">
                Experience the epitome of luxury aboard our premium fleet of yachts. From the sun-drenched shores of the French Riviera to the crystal-clear waters of the Mediterranean.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-all duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-all duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-all duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Services Section */}
            <div>
              <h4 className="text-lg font-medium text-slate-900 mb-6">Services</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-slate-700 hover:text-slate-900 transition-colors duration-300">Private Charters</a>
                </li>
                <li>
                  <a href="#" className="text-slate-700 hover:text-slate-900 transition-colors duration-300">Event Planning</a>
                </li>
                <li>
                  <a href="#" className="text-slate-700 hover:text-slate-900 transition-colors duration-300">Destination Guides</a>
                </li>
                <li>
                  <a href="#" className="text-slate-700 hover:text-slate-900 transition-colors duration-300">Concierge Service</a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="text-lg font-medium text-slate-900 mb-6">Contact</h4>
              <div className="space-y-4">
                <a href="tel:+37712345678" className="flex items-center text-slate-700 hover:text-slate-900 transition-colors duration-300">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+377 (123) 456-789</span>
                </a>
                <a href="mailto:info@rivierayachts.com" className="flex items-center text-slate-700 hover:text-slate-900 transition-colors duration-300">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>info@rivierayachts.com</span>
                </a>
                <div className="flex items-center text-slate-700">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Port Hercule, Monaco</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-slate-400/30">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <span>© {new Date().getFullYear()} Riviera Yachts</span>
                <span className="text-slate-400">|</span>
                <a 
                  href="https://www.felicita.group" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-500 hover:text-slate-900 transition-colors duration-300"
                >
                  Part of Felicita Group
                </a>
              </div>
              <div className="flex gap-8 text-slate-600">
                <a href="#" className="hover:text-slate-900 transition-colors duration-300">Privacy</a>
                <a href="#" className="hover:text-slate-900 transition-colors duration-300">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;