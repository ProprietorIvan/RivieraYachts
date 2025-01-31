import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

interface NavigationProps {
  currentPage?: string;
  showActions?: boolean;
  transparent?: boolean;
}

const Navigation = ({ currentPage, showActions = true, transparent }: NavigationProps) => {
  const { push } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { text: 'HOME', url: '/' },
    { text: 'OUR FLEET', url: '/fleet' },
    { text: 'TESTIMONIALS', url: '/testimonials' },
    { text: 'CONTACT', url: '/contact' },
  ];

  return (
    <nav className={`relative ${
      transparent 
        ? 'bg-transparent !absolute left-0 top-0 w-full z-50' 
        : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-40 md:h-32">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-64 sm:w-80 md:w-144 h-20 sm:h-24 md:h-48">
              <Image 
                src="/logo.png"
                alt='Riviera Yachts'
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className='flex items-center gap-12'>
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    push(link.url)
                  }}
                  className={`text-lg font-semibold hover:text-blue-400 transition-colors ${
                    transparent ? 'text-white hover:text-blue-200' : 'text-slate-900'
                  }`}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl hover:bg-black/5 transition-colors"
            >
              {isMenuOpen ? (
                <X className={`h-6 w-6 ${transparent ? 'stroke-white' : 'stroke-slate-900'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${transparent ? 'stroke-white' : 'stroke-slate-900'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    push(link.url);
                    setIsMenuOpen(false);
                  }}
                  className="block py-3 px-4 text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;