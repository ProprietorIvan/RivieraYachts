import React, { useState } from 'react';
import { Calendar, Ship, Compass, Utensils, Star, MapPin, ArrowRight } from 'lucide-react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface MetricItem {
  value: string;
  label: string;
}

interface ProcessStep {
  id: number;
  icon: React.ElementType;
  phase: string;
  title: string;
  description: string;
  timing: string;
  details: string[];
}

const StepsSection: React.FC = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Using same data structure but updating display
  const metrics: MetricItem[] = [
    { value: "15+", label: "LUXURY YACHTS" },
    { value: "100%", label: "PRIVATE CHARTERS" },
    { value: "24/7", label: "CONCIERGE" },
    { value: "10+", label: "DESTINATIONS" }
  ];

  // Keeping same process steps data
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      icon: Calendar,
      phase: "PLANNING PHASE",
      title: "Initial Consultation",
      description: "Personalized charter planning to match your preferences",
      timing: "Start your journey",
      details: [
        "Discuss preferred dates and destinations",
        "Define group size and requirements",
        "Review yacht options and amenities",
        "Outline special requests and preferences",
        "Initial budget consideration"
      ]
    },
    {
      id: 2,
      icon: Ship,
      phase: "SELECTION PHASE",
      title: "Yacht Selection",
      description: "Choose your perfect vessel from our premium fleet",
      timing: "Find your match",
      details: [
        "Detailed yacht specifications review",
        "Virtual or in-person yacht tours",
        "Crew profiles and expertise",
        "Available dates confirmation",
        "Technical specifications discussion"
      ]
    },
    {
      id: 3,
      icon: MapPin,
      phase: "ITINERARY PHASE",
      title: "Route Planning",
      description: "Craft your ideal Mediterranean journey",
      timing: "Chart your course",
      details: [
        "Destination selection and timing",
        "Port and marina arrangements",
        "Activity and excursion planning",
        "Weather consideration and alternatives",
        "Special event coordination"
      ]
    },
    {
      id: 4,
      icon: Utensils,
      phase: "PREPARATION PHASE",
      title: "Personal Preferences",
      description: "Customize every aspect of your experience",
      timing: "Tailor your experience",
      details: [
        "Menu planning and wine selection",
        "Special dietary requirements",
        "Onboard entertainment preferences",
        "Water sports equipment selection",
        "Special occasion arrangements"
      ]
    },
    {
      id: 5,
      icon: Ship,
      phase: "EMBARKATION PHASE",
      title: "Welcome Aboard",
      description: "Begin your luxury maritime adventure",
      timing: "Start your journey",
      details: [
        "Private transfer to yacht",
        "Captain's welcome and safety briefing",
        "Yacht tour and orientation",
        "Stateroom allocation",
        "Initial departure preparation"
      ]
    },
    {
      id: 6,
      icon: Star,
      phase: "EXPERIENCE PHASE",
      title: "Luxury Journey",
      description: "Enjoy your premium yachting experience",
      timing: "Your adventure awaits",
      details: [
        "Personalized itinerary execution",
        "Gourmet dining experiences",
        "Exclusive destination access",
        "Water sports and activities",
        "Unforgettable memories creation"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Metrics Section */}
      <section className="py-24 border-t border-slate-100" aria-label="Charter Service Metrics">      
        <div className="max-w-7xl mx-auto px-4">
          <header className="text-center mb-20">
            <h2 className="text-5xl font-serif mb-4 text-slate-900">Excellence in Numbers</h2>
            <p className="text-xl text-slate-600">Redefining Luxury at Sea</p>
          </header>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <span className="text-6xl font-serif text-slate-900 font-light">{metric.value}</span>
                </div>
                <div className="text-sm tracking-widest text-slate-500">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-24 bg-slate-50" aria-label="Charter Process">
        <div className="max-w-7xl mx-auto px-4">
          <header className="text-center mb-24">
            <h2 className="text-5xl font-serif mb-4 text-slate-900">Your Journey Begins</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From initial consultation to your final destination, we ensure every moment is crafted to perfection.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <article
                  key={step.id}
                  onClick={() => router.push('/contact')}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`
                    relative p-8 rounded-xl transition-all duration-300 cursor-pointer
                    ${isActive ? 'bg-white shadow-lg' : 'hover:bg-white'}
                  `}
                >
                  <div className="flex items-center mb-6">
                    <div className={`
                      w-16 h-16 rounded-full flex items-center justify-center bg-white
                      ${isActive ? 'shadow-md' : 'shadow-sm'}
                    `}>
                      <Icon className="w-8 h-8 text-blue-200" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-blue-200">{step.phase}</div>
                      <h3 className="text-xl font-serif text-slate-900">{step.title}</h3>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6">{step.description}</p>
                  
                  <div className={`
                    space-y-3 overflow-hidden transition-all duration-300
                    ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <div className="text-sm text-blue-200 mb-4">{step.timing}</div>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600">
                          <ArrowRight className="w-4 h-4 mt-1 text-blue-200 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StepsSection;