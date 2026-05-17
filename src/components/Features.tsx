"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Bot, 
  LineChart, 
  Zap, 
  Users, 
  BarChart3, 
  Terminal 
} from "lucide-react";

const features = [
  {
    title: "AI Automation",
    description: "Automate repetitive tasks with advanced AI models trained on your specific business logic.",
    icon: <Bot className="text-primary" />,
    color: "primary"
  },
  {
    title: "Smart Analytics",
    description: "Gain deep insights into your operations with real-time predictive analytics and custom dashboards.",
    icon: <LineChart className="text-secondary" />,
    color: "secondary"
  },
  {
    title: "Workflow Builder",
    description: "Visual drag-and-drop builder to construct complex automated workflows without writing code.",
    icon: <Zap className="text-tertiary" />,
    color: "tertiary"
  },
  {
    title: "Team Collaboration",
    description: "Built-in tools for teams to review, approve, and iterate on automated processes together.",
    icon: <Users className="text-primary" />,
    color: "primary"
  },
  {
    title: "Real-time Insights",
    description: "Monitor performance metrics as they happen with low-latency streaming data connections.",
    icon: <BarChart3 className="text-secondary" />,
    color: "secondary"
  },
  {
    title: "API Integrations",
    description: "Connect with your favorite tools seamlessly through our robust, webhooks and REST APIs.",
    icon: <Terminal className="text-tertiary" />,
    color: "tertiary"
  }
];

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Header entrance animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Cards staggered entrance animation
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-section-gap px-gutter max-w-container-max mx-auto">
      <div ref={headerRef} className="text-center mb-20">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface mb-6">
          Powerful Features for <span className="text-gradient">Modern Teams</span>
        </h2>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
          Everything you need to automate your work and scale your business with intelligent AI.
        </p>
      </div>
      
      <div className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className={`feature-card glass-card-3d shadow-3d-${feature.color} p-8 rounded-xl flex flex-col gap-6 group`}
          >
            {/* Bevel reflection highlight inside the card */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/[0.01] to-white/[0.04] pointer-events-none"></div>
            
            <div className={`w-14 h-14 rounded-xl bg-${feature.color}/10 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-${feature.color}/20 duration-300 shadow-inner relative z-10`} style={{ transform: "translateZ(20px)" }}>
              {React.cloneElement(feature.icon as React.ReactElement<{ size?: number }>, { size: 28 })}
            </div>
            
            <div className="flex flex-col gap-3 relative z-10" style={{ transform: "translateZ(10px)" }}>
              <h3 className="font-display text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
