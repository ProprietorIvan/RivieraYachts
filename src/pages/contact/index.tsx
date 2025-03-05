import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import {
  Phone,
  Mail,
  MessageSquare,
  Anchor,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Head from "next/head";

interface YachtFeature {
  name: string;
  images: string[];
  specs: string;
  price: string;
  features: string[];
}

interface YachtCategory {
  title: string;
  description: string;
  yachts: YachtFeature[];
}

const yachtCategories: YachtCategory[] = [
  {
    title: "Luxury Day Yachts (30-50ft)",
    description: "Perfect for day trips and coastal adventures",
    yachts: [
      {
        name: "Sunseeker Portofino 40",
        images: [
          "https://images.unsplash.com/photo-1540946485063-a40da27545f8",
          "https://images.unsplash.com/photo-1599257552611-efe0e3a0d748",
          "https://images.unsplash.com/photo-1599257552649-6b1c31fc36f6",
        ],
        specs: "40ft • Up to 8 guests • 2 cabins",
        price: "from €5,000/day",
        features: [
          "Spacious Sundeck",
          "Water Sports Equipment",
          "Premium Sound System",
        ],
      },
      {
        name: "Azimut 45",
        images: [
          "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a",
          "https://images.unsplash.com/photo-1599257552611-efe0e3a0d748",
          "https://images.unsplash.com/photo-1540946485063-a40da27545f8",
        ],
        specs: "45ft • Up to 10 guests • 2 cabins",
        price: "from €6,000/day",
        features: ["Flybridge", "Swim Platform", "Gourmet Galley"],
      },
      {
        name: "Princess V48",
        images: [
          "https://images.unsplash.com/photo-1558627769-d5d54f838196",
          "https://images.unsplash.com/photo-1599257552611-efe0e3a0d748",
          "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a",
        ],
        specs: "48ft • Up to 12 guests • 3 cabins",
        price: "from €7,000/day",
        features: ["Sports Cruiser", "Tender Garage", "Beach Club"],
      },
    ],
  },
  {
    title: "Premium Cruising Yachts (50-80ft)",
    description: "Ideal for extended cruising and luxury stays",
    yachts: [
      {
        name: "Ferretti 75",
        images: [
          "https://images.unsplash.com/photo-1599687267812-35c05ff70ee9",
          "https://images.unsplash.com/photo-1540946485063-a40da27545f8",
          "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a",
        ],
        specs: "75ft • Up to 12 guests • 4 cabins",
        price: "from €15,000/day",
        features: ["Master Suite", "Jacuzzi", "Professional Crew"],
      },
      {
        name: "Pershing 64",
        images: [
          "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13",
          "https://images.unsplash.com/photo-1599687267812-35c05ff70ee9",
          "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a",
        ],
        specs: "64ft • Up to 10 guests • 3 cabins",
        price: "from €12,000/day",
        features: ["High Performance", "Stabilizers", "Entertainment System"],
      },
      {
        name: "Riva 68",
        images: [
          "https://images.unsplash.com/photo-1599257552611-efe0e3a0d748",
          "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a",
          "https://images.unsplash.com/photo-1599687267812-35c05ff70ee9",
        ],
        specs: "68ft • Up to 12 guests • 4 cabins",
        price: "from €13,000/day",
        features: ["Italian Design", "Beach Platform", "Wine Cellar"],
      },
    ],
  },
  {
    title: "Superyachts (80ft+)",
    description: "The ultimate in luxury and prestige",
    yachts: [
      {
        name: "Benetti Classic 120",
        images: [
          "https://images.unsplash.com/photo-1540946485063-a40da27545f8",
          "https://images.unsplash.com/photo-1599687267812-35c05ff70ee9",
          "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a",
        ],
        specs: "120ft • Up to 12 guests • 6 cabins",
        price: "from €50,000/day",
        features: ["Helipad", "Cinema Room", "Spa"],
      },
      {
        name: "Heesen 164",
        images: [
          "https://images.unsplash.com/photo-1599687267812-35c05ff70ee9",
          "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a",
          "https://images.unsplash.com/photo-1540946485063-a40da27545f8",
        ],
        specs: "164ft • Up to 12 guests • 7 cabins",
        price: "from €80,000/day",
        features: ["Beach Club", "Gym", "Multiple Decks"],
      },
      {
        name: "CRN Mega 200",
        images: [
          "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a",
          "https://images.unsplash.com/photo-1599687267812-35c05ff70ee9",
          "https://images.unsplash.com/photo-1540946485063-a40da27545f8",
        ],
        specs: "200ft • Up to 12 guests • 8 cabins",
        price: "from €100,000/day",
        features: ["Multiple Salons", "Elevator", "Swimming Pool"],
      },
    ],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    guests: "",
    message: "",
  });

  const [selectedYacht, setSelectedYacht] = useState<YachtFeature | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleYachtClick = (yacht: YachtFeature) => {
    setSelectedYacht(yacht);
    setCurrentImageIndex(0);
  };

  const handleCloseGallery = () => {
    setSelectedYacht(null);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    if (!selectedYacht) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedYacht.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    if (!selectedYacht) return;
    setCurrentImageIndex((prev) =>
      prev === selectedYacht.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <Head>
        <title>Charter Your Dream Yacht | Riviera Yachts</title>
        <meta
          name="description"
          content="Experience the ultimate in luxury yacht charters. Choose from our premium fleet and let us create your perfect Mediterranean adventure."
        />
      </Head>

      <div className="min-h-screen bg-slate-50">
        <Navigation transparent={false} />

        {/* Hero Section with proper padding */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#93C5FD]/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-serif mb-6 text-slate-900">
                Experience Luxury at Sea
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Discover our exclusive fleet of luxury yachts and create
                unforgettable memories along the French Riviera
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="#request-quote"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-colors text-lg font-medium"
                >
                  <Anchor className="w-5 h-5" />
                  <span>Get Custom Quote</span>
                </a>
                <a
                  href="https://wa.me/+37793501234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors text-lg font-medium"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat Now</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Yacht Categories */}
        {yachtCategories.map((category, index) => (
          <section key={index} className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif mb-4 text-slate-900">
                  {category.title}
                </h2>
                <p className="text-lg text-slate-600">{category.description}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {category.yachts.map((yacht, yachtIndex) => (
                  <div
                    key={yachtIndex}
                    className="group relative cursor-pointer"
                    onClick={() => handleYachtClick(yacht)}
                  >
                    <div className="relative h-[400px] rounded-xl overflow-hidden">
                      <Image
                        src={`${yacht.images[0]}?w=800&q=80&auto=format`}
                        alt={yacht.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                        quality={85}
                        loading="lazy"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-medium mb-2">
                        {yacht.name}
                      </h3>
                      <p className="text-lg text-white/90 mb-2">
                        {yacht.price}
                      </p>
                      <p className="text-sm text-white/80 mb-4">
                        {yacht.specs}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {yacht.features.map((feature, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center text-xs bg-white/20 px-3 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Gallery Modal */}
        {selectedYacht && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <div className="relative w-full max-w-6xl mx-4">
              <button
                onClick={handleCloseGallery}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative h-[80vh]">
                <Image
                  src={`${selectedYacht.images[currentImageIndex]}?w=1600&q=90&auto=format`}
                  alt={selectedYacht.name}
                  fill
                  sizes="90vw"
                  quality={90}
                  priority
                  className="object-contain"
                />
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>
              <div className="text-white text-center mt-4">
                <h3 className="text-2xl font-medium mb-2">
                  {selectedYacht.name}
                </h3>
                <p className="text-lg mb-2">{selectedYacht.price}</p>
                <p className="text-sm mb-4">{selectedYacht.specs}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href="#request-quote"
                    onClick={handleCloseGallery}
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Anchor className="w-5 h-5" />
                    <span>Request Quote</span>
                  </a>
                  <a
                    href="https://wa.me/+37793501234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Chat Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Why Choose Us Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Why Choose Riviera Yachts
              </h2>
              <p className="text-lg text-slate-300">
                Experience unmatched luxury and service on the French Riviera
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-medium mb-3">Premium Fleet</h3>
                <p className="text-slate-300">
                  Meticulously maintained yachts from world-renowned
                  manufacturers
                </p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-medium mb-3">Expert Crew</h3>
                <p className="text-slate-300">
                  Professional, multilingual crew dedicated to your comfort
                </p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-medium mb-3">Prime Location</h3>
                <p className="text-slate-300">
                  Based in Monaco with access to the best Mediterranean
                  destinations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Simplified Contact Form Section */}
        <section
          id="request-quote"
          className="py-20 bg-gradient-to-b from-white to-slate-50"
        >
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-slate-900">
                Start Your Journey
              </h2>
              <p className="text-lg text-slate-600">
                Tell us about your perfect yacht charter experience
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#93C5FD] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#93C5FD] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#93C5FD] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Preferred Dates
                  </label>
                  <input
                    type="text"
                    name="dates"
                    value={formData.dates}
                    onChange={handleChange}
                    placeholder="e.g., July 15-22"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#93C5FD] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Number of Guests
                </label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  min="1"
                  max="12"
                  placeholder="Up to 12 guests"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#93C5FD] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your ideal yacht charter experience..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#93C5FD] focus:border-transparent"
                ></textarea>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-colors text-lg font-medium"
                >
                  <Anchor className="w-5 h-5" />
                  <span>Request Quote</span>
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <a
                href="https://wa.me/+37793501234"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#93C5FD]/10 mb-4">
                  <MessageSquare className="w-6 h-6 text-[#93C5FD]" />
                </div>
                <h3 className="text-lg font-medium mb-2">WhatsApp</h3>
                <p className="text-slate-600">Message us anytime</p>
                <span className="mt-4 text-[#93C5FD] group-hover:text-[#93C5FD]/80 transition-colors">
                  +377 93 50 12 34
                </span>
              </a>
              <a
                href="tel:+37793501234"
                className="p-6 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#93C5FD]/10 mb-4">
                  <Phone className="w-6 h-6 text-[#93C5FD]" />
                </div>
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <p className="text-slate-600">24/7 Availability</p>
                <span className="mt-4 block text-[#93C5FD] group-hover:text-[#93C5FD]/80 transition-colors">
                  +377 93 50 12 34
                </span>
              </a>
              <div className="p-6 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#93C5FD]/10 mb-4">
                  <MapPin className="w-6 h-6 text-[#93C5FD]" />
                </div>
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <p className="text-slate-600">Port Hercule, Monaco</p>
                <p className="text-slate-600">98000 Monaco</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
