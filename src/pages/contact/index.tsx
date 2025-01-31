import React, { useState } from 'react';
import Navigation from "@/components/Navigation";
import { Anchor, Mail, Phone, ArrowRight, Compass, Shield, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [boat1Images] = useState(
    Array.from({ length: 14 }, (_, i) => `/photos/boat1/00000${i + 1}.jpg`)
  );
  const [boat2Images] = useState(
    Array.from({ length: 6 }, (_, i) => `/photos/boat2/00000${i + 1}.jpeg`)
  );

  const [activeBoat, setActiveBoat] = useState<'boat1' | 'boat2'>('boat1');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting Riviera Yachts! We will get back to you shortly.');
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % (activeBoat === 'boat1' ? boat1Images.length : boat2Images.length));
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + (activeBoat === 'boat1' ? boat1Images.length : boat2Images.length)) % (activeBoat === 'boat1' ? boat1Images.length : boat2Images.length));
  };

  return (
    <div className="min-h-screen bg-[#F5F4F0]">
      <Head>
        <title>Contact Riviera Yachts | Luxury Yacht Charters</title>
        <meta name="description" content="Experience the ultimate in luxury yacht charters with Riviera Yachts. Contact us to book your Mediterranean adventure today." />
      </Head>

      <Navigation transparent />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-stone-100 to-[#F5F4F0]">
        <div className="absolute inset-0 bg-[url('/photos/boat1/000001.jpg')] bg-cover bg-center opacity-50" />
        <div className="relative text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#1C1917] mb-6">
            Discover the Mediterranean in Style
          </h1>
          <p className="text-xl text-[#44403C] mb-8">
            Embark on an unforgettable journey aboard our luxurious yachts. Contact us today to book your exclusive charter.
          </p>
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center justify-center gap-3 bg-[#8B2635] text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-[#7A2230] transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Boat Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Prestigious Fleet</h2>
            <p className="text-lg text-[#44403C]">Explore our luxurious yachts and find the perfect vessel for your journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Boat 1 */}
            <div className="bg-stone-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-96 bg-[url('/photos/boat1/000001.jpg')] bg-cover bg-center">
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Boat 1: The Elegance</h3>
                <p className="text-[#44403C] mb-4">A masterpiece of modern design, offering unparalleled comfort and luxury.</p>
                <button
                  onClick={() => setActiveBoat('boat1')}
                  className="text-[#8B2635] font-medium hover:text-[#7A2230] transition-colors duration-300 flex items-center gap-2"
                >
                  View Gallery <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Boat 2 */}
            <div className="bg-stone-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-96 bg-[url('/photos/boat2/000001.jpeg')] bg-cover bg-center">
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Boat 2: The Serenity</h3>
                <p className="text-[#44403C] mb-4">A blend of classic elegance and modern amenities, perfect for intimate voyages.</p>
                <button
                  onClick={() => setActiveBoat('boat2')}
                  className="text-[#8B2635] font-medium hover:text-[#7A2230] transition-colors duration-300 flex items-center gap-2"
                >
                  View Gallery <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-[#8B2635] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Plan Your Luxury Charter</h2>
            <p className="text-lg text-stone-200">
              Fill out the form below, and our team will contact you to arrange your dream voyage.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-[#8B2635] py-4 rounded-lg text-lg font-semibold hover:bg-stone-100 transition-colors duration-300"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;