import React from 'react';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-200/90 to-blue-300/90">
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="relative w-80 h-28 mb-6">
              <Image
                src="/logo.png"
                alt="Riviera Yachts"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <p className="text-slate-700 mb-6 text-lg">
              Experience the epitome of luxury aboard our premium fleet of yachts. From the sun-drenched shores of the French Riviera to the crystal-clear waters of the Mediterranean.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-slate-900 font-medium mb-4">Services</h4>
            <ul className="space-y-3">
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
            <h4 className="text-slate-900 font-medium mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+37712345678" className="flex items-center text-slate-700 hover:text-slate-900 transition-colors duration-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>+377 (123) 456-789</span>
              </a>
              <a href="mailto:info@rivierayachts.com" className="flex items-center text-slate-700 hover:text-slate-900 transition-colors duration-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@rivierayachts.com</span>
              </a>
              <div className="flex items-center text-slate-700">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Port Hercule, Monaco</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-400/20">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span>© {new Date().getFullYear()} Riviera Yachts</span>
              <a 
                href="https://www.felicita.group" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-slate-900 transition-colors duration-300"
              >
                Part of Felicita Group
              </a>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-900 transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-slate-900 transition-colors duration-300">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;