import Navigation from '@/components/Navigation';
import { Anchor, Phone, Mail, ArrowRight, Compass, Shield, Star } from 'lucide-react';
import { useRouter } from 'next/router';
import ComparisonSection from '@/components/ComparisonSection';
import FAQ from '@/components/FAQ';
import StepsSection from '@/components/StepsSection';

const Home = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation transparent={true} />
      {/* Hero Section with Video Background */}
      <section className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full object-cover"
          >
            <source src="/photos/homepage/background.mp4" type="video/mp4" />
          </video>
          {/* Balanced blue tint overlay */}
          <div className="absolute inset-0 bg-[#95c4ef]/60" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center justify-end">
          <div className="max-w-2xl text-white text-right">
            <h1 className="text-6xl md:text-7xl font-serif mb-6">
              Experience the Ultimate in Luxury Yacht Charters
            </h1>
            <p className="text-xl mb-8 text-blue-50">
              Discover the Mediterranean&apos;s most exclusive destinations aboard our prestigious fleet of luxury yachts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <button
                onClick={() => handleNavigation('/fleet')}
                className="group flex items-center justify-center gap-2 bg-blue-200 text-slate-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-300 transition-colors"
              >
                <Anchor className="w-5 h-5" />
                <span>Explore Our Fleet</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleNavigation('/contact')}
                className="group flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-4 inline-flex p-3 bg-blue-100 rounded-full">
                <Compass className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Exclusive Destinations</h3>
              <p className="text-slate-600">Experience the finest ports and hidden gems of the Mediterranean.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex p-3 bg-blue-100 rounded-full">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Crew</h3>
              <p className="text-slate-600">Expert captains and attentive staff at your service.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex p-3 bg-blue-100 rounded-full">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Luxury Experience</h3>
              <p className="text-slate-600">Unparalleled comfort and service on every journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <ComparisonSection />
      <StepsSection />
      <FAQ />

      {/* CTA Section */}
      <section className="relative py-24 bg-blue-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] bg-repeat opacity-20" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Begin Your Maritime Journey
          </h2>
          <p className="text-blue-200 mb-12 text-lg max-w-2xl mx-auto">
            Let us create your perfect Mediterranean escape aboard our luxury vessels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNavigation('/contact')}
              className="group flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Inquire Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;