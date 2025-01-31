import React, { useState } from 'react';
import { ArrowRight, Compass, Wine, Waves, Utensils } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';

const ComparisonSection: React.FC = () => {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const features = [
    {
      title: "Luxury Experience",
      description: "Premium amenities and personalized service aboard our exclusive yachts",
      details: "Experience unparalleled luxury with our premium amenities, including master suites with panoramic views, private balconies, and state-of-the-art entertainment systems.",
      icon: Wine,
      image: "/photos/boat1/000003.jpeg"
    },
    {
      title: "Mediterranean Adventure",
      description: "Explore hidden coves and prestigious ports along the French Riviera",
      details: "Discover secluded beaches, pristine bays, and world-famous harbors. From Monaco's glamour to Corsica's wild beauty, every day brings a new adventure.",
      icon: Compass,
      image: "/photos/boat1/000007.jpeg"
    },
    {
      title: "World-Class Cuisine",
      description: "Exquisite dining experiences prepared by our private chefs",
      details: "Indulge in gourmet cuisine crafted by expert chefs, featuring fresh local ingredients and fine wines. From intimate dinners to sunset celebrations.",
      icon: Utensils,
      image: "/photos/boat1/000010.jpeg"
    },
    {
      title: "Water Activities",
      description: "Complete suite of water toys and equipment for ocean adventures",
      details: "Dive into adventure with our extensive collection of water toys - jet skis, seabobs, paddleboards, and more. Create unforgettable moments on the Mediterranean.",
      icon: Waves,
      image: "/photos/boat1/000014.jpeg"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Riviera Yachts Charter Services",
    "description": "Luxury yacht charter services in Monaco and the French Riviera",
    "provider": {
      "@type": "Organization",
      "name": "Riviera Yachts",
      "image": "/logo.png"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Monaco and French Riviera"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Yacht Charter Services",
      "itemListElement": features.map((feature) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature.title,
          "description": feature.description
        }
      }))
    }
  };

  return (
    <>
      <Head>
        <title>Luxury Yacht Charter Services in Monaco | Riviera Yachts</title>
        <meta 
          name="description" 
          content="Experience the ultimate in maritime luxury with Riviera Yachts. Premium yacht charters featuring world-class amenities, gourmet dining, and exclusive Mediterranean adventures."
        />
        <meta 
          name="keywords" 
          content="luxury yacht charter, Monaco yacht rental, Mediterranean yacht cruise, private yacht charter, luxury boat rental Monaco"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <section 
        className="py-24 px-5 bg-white"
        aria-label="Yacht Charter Features"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-24">
            <h2 className="text-5xl font-serif mb-4 text-slate-900">
              Experience Excellence at Sea
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Discover the pinnacle of maritime luxury with our curated yacht experiences
            </p>
          </header>

          <div 
            className="flex flex-col gap-8"
            role="list"
            aria-label="Charter features"
          >
            {features.map((feature, index) => (
              <article 
                key={index}
                onClick={() => router.push('/contact')}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
                role="listitem"
              >
                <div className="grid md:grid-cols-2 items-center">
                  <div className={`relative h-[500px] md:h-[600px] overflow-hidden ${
                    index % 2 === 0 ? 'order-1' : 'order-1 md:order-2'
                  }`}>
                    <Image
                      src={feature.image}
                      alt={`${feature.title} - Riviera Yachts Luxury Charter Service`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                    />
                    {/* Simple overlay that darkens slightly on hover */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
                  </div>
                  
                  <div className={`p-12 md:p-16 ${
                    index % 2 === 0 ? 'order-2' : 'order-2 md:order-1'
                  }`}>
                    <div className="flex items-start gap-6">
                      <div className="p-4 rounded-full bg-blue-200/20 group-hover:bg-blue-200/30 transition-colors duration-300">
                        <feature.icon 
                          className="w-8 h-8 text-blue-200"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="text-3xl font-serif mb-4 text-slate-900">
                          {feature.title}
                        </h3>
                        <p className="text-xl text-slate-700 mb-6">{feature.description}</p>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                          {feature.details}
                        </p>
                        <span className="inline-flex items-center gap-2 text-blue-200 font-medium group-hover:text-slate-900 transition-colors duration-300">
                          Discover More
                          <ArrowRight 
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center gap-2 bg-white/80 text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-white transition-all duration-300 group backdrop-blur-sm"
              aria-label="View all yacht charter features"
            >
              Explore All Features
              <ArrowRight 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComparisonSection;