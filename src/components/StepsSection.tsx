import React, { useState } from 'react';
import { Calendar, Ship, Compass, Utensils, Star, MapPin } from 'lucide-react';
import Head from 'next/head';

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
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const metrics: MetricItem[] = [
    {
      value: "15+",
      label: "LUXURY YACHTS"
    },
    {
      value: "100%",
      label: "PRIVATE CHARTERS"
    },
    {
      value: "24/7",
      label: "CONCIERGE"
    },
    {
      value: "10+",
      label: "DESTINATIONS"
    }
  ];

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Luxury Yacht Charter Process",
    "description": "Step-by-step guide to chartering a luxury yacht with Riviera Yachts in Monaco",
    "totalTime": "PT30M",
    "step": processSteps.map((step) => ({
      "@type": "HowToStep",
      "position": step.id,
      "name": step.title,
      "text": step.description,
      "itemListElement": step.details.map(detail => ({
        "@type": "HowToDirection",
        "text": detail
      }))
    }))
  };

  return (
    <>
      <Head>
        <title>Luxury Yacht Charter Process | Riviera Yachts Monaco</title>
        <meta 
          name="description" 
          content="Discover our seamless yacht charter process. From initial consultation to embarking on your journey, experience luxury yachting with Riviera Yachts Monaco."
        />
        <meta
          name="keywords"
          content="yacht charter process, luxury yacht booking, Monaco yacht rental, Mediterranean yacht charter, yacht hire steps"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <section 
        className="w-full bg-gradient-to-b from-blue-200/90 to-blue-300/90 backdrop-blur-sm py-20"
        aria-label="Charter Service Metrics"
      >      
        <div className="max-w-6xl mx-auto px-4">
          <header className="text-center mb-16">
            <h2 className="text-4xl font-serif text-slate-900 mb-2">Excellence in Numbers</h2>
            <div className="flex items-center justify-center">
              <div className="h-px w-12 bg-slate-900" />
              <p className="text-slate-700 mx-4">Luxury Defined by Experience</p>
              <div className="h-px w-12 bg-slate-900" />
            </div>
          </header>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            role="list"
            aria-label="Service metrics"
          >
            {metrics.map((metric, index) => (
              <div 
                key={index} 
                className="text-center group"
                role="listitem"
              >
                <div className="flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:bg-white/30">
                  <div className="text-5xl font-serif text-slate-900 mb-2">{metric.value}</div>
                  <div className="h-px w-12 bg-slate-900 mb-4 group-hover:w-16 transition-all duration-300" />
                  <div className="text-sm text-slate-700 tracking-wider font-medium">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        className="py-24 px-5 bg-slate-50"
        aria-label="Charter Process Steps"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-2 text-slate-900" id="charter-process">
              Your Journey Begins
            </h2>
            <div className="flex items-center justify-center">
              <div className="h-px w-12 bg-blue-200" />
              <p className="mx-4 text-blue-200">Seamless Charter Experience</p>
              <div className="h-px w-12 bg-blue-200" />
            </div>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
              From initial consultation to your final destination, we ensure every moment of your charter 
              experience is crafted to perfection. Let us guide you through the journey of creating your 
              perfect maritime adventure.
            </p>
          </header>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            role="list"
            aria-label="Charter process steps"
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <article
                  key={step.id}
                  className={`
                    relative p-8 rounded-xl transition-all duration-300 
                    ${isActive ? 'bg-white/80 shadow-lg scale-105' : 'bg-transparent hover:bg-white/50'}
                    cursor-pointer group backdrop-blur-sm
                  `}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                  role="listitem"
                  aria-label={`Charter step ${step.id}: ${step.title}`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 opacity-10 rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className={`
                        w-16 h-16 rounded-full flex items-center justify-center
                        ${isActive ? 'bg-blue-200 text-slate-900' : 'bg-white/70 text-blue-200'}
                        transition-all duration-300 shadow-sm
                      `}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-blue-200">{step.phase}</span>
                        </div>
                        <h3 className="font-serif text-xl text-slate-900">{step.title}</h3>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-4">{step.description}</p>
                    
                    <div className={`
                      space-y-2 overflow-hidden transition-all duration-300
                      ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                      <div className="text-sm font-medium text-blue-200 mb-2">{step.timing}</div>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <div className="w-1 h-1 rounded-full bg-blue-200 mt-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default StepsSection;