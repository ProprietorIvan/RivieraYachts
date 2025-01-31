import React from 'react';
import { ArrowRight, Compass, Wine, Waves, Utensils } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';

const ComparisonSection: React.FC = () => {
  const router = useRouter();
  
  const features = [
    {
      title: "Luxury Experience",
      description: "Premium amenities and personalized service aboard our exclusive yachts",
      icon: Wine,
      image: "/photos/boat1/000003.jpeg"
    },
    {
      title: "Mediterranean Adventure",
      description: "Explore hidden coves and prestigious ports along the French Riviera",
      icon: Compass,
      image: "/photos/boat1/000007.jpeg"
    },
    {
      title: "World-Class Cuisine",
      description: "Exquisite dining experiences prepared by our private chefs",
      icon: Utensils,
      image: "/photos/boat1/000010.jpeg"
    },
    {
      title: "Water Activities",
      description: "Complete suite of water toys and equipment for ocean adventures",
      icon: Waves,
      image: "/photos/boat1/000014.jpeg"
    }
  ];

  // Structured data for rich snippets
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
      "itemListElement": features.map((feature, index) => ({
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
        className="py-24 px-5 bg-slate-50"
        aria-label="Yacht Charter Features"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 text-slate-900">
              Experience Excellence at Sea
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover the pinnacle of maritime luxury with our curated yacht experiences
            </p>
          </header>

          <div 
            className="grid md:grid-cols-2 gap-8"
            role="list"
            aria-label="Charter features"
          >
            {features.map((feature, index) => (
              <article 
                key={index}
                onClick={() => router.push('/')}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                role="listitem"
              >
                <div className="relative h-64">
                  <Image
                    src={feature.image}
                    alt={`${feature.title} - Riviera Yachts Luxury Charter Service`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <feature.icon 
                      className="w-6 h-6 text-blue-400 mt-1"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-900">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <span className="inline-flex items-center gap-2 text-blue-400 font-medium group-hover:text-blue-500">
                      Learn More
                      <ArrowRight 
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center gap-2 bg-blue-200 text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-blue-300 transition-all duration-300 group"
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