"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Aether AI reduced our data processing time from 4 days to 4 hours. The intuitive builder meant our team was up and running in a single afternoon.",
    author: "Sarah Jenkins",
    role: "CTO, TechFlow",
    initials: "SJ",
    stars: 5,
    highlight: false,
    color: "secondary"
  },
  {
    quote: "The predictive analytics capabilities are unmatched. We're now identifying market trends weeks before our competitors. It feels like having a crystal ball.",
    author: "Marcus Rodriguez",
    role: "VP Data, GlobalNet",
    initials: "MR",
    stars: 5,
    highlight: true,
    color: "primary"
  },
  {
    quote: "We evaluated five different AI platforms before choosing Aether. The integration depth and robust API documentation made it the clear winner for our team.",
    author: "Elena Lin",
    role: "Lead Architect, DataSys",
    initials: "EL",
    stars: 4.5,
    highlight: false,
    color: "tertiary"
  }
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Header Animation
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

      // Staggered testimonial cards entry
      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonial-grid",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-[120px] bg-surface-container-low/30 relative overflow-hidden">
      {/* Decorative background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-on-surface mb-6">
            Loved by <span className="text-gradient">Engineering Leaders</span>
          </h2>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
            See how top companies are using Aether AI to transform their operations.
          </p>
        </div>

        <div className="testimonial-grid grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className={`testimonial-card glass-card-3d shadow-3d-${t.color} p-8 rounded-xl flex flex-col gap-6 relative overflow-hidden group ${
                t.highlight ? "border-primary/50 bg-surface-container/60 shadow-[0_0_40px_rgba(196,192,255,0.08)]" : ""
              }`}
            >
              {/* Inner bevel sheen */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/[0.01] to-white/[0.04] pointer-events-none z-10"></div>
              
              {t.highlight && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 blur-2xl"></div>
              )}
              
              <div className="flex gap-1 text-primary relative z-10" style={{ transform: "translateZ(15px)" }}>
                {[...Array(5)].map((_, idx) => (
                  <Star 
                    key={idx} 
                    size={14} 
                    fill={idx < Math.floor(t.stars) ? "currentColor" : "none"} 
                    className={idx < t.stars ? "" : "opacity-30"} 
                  />
                ))}
              </div>
              
              <p className="text-on-surface font-body text-lg italic leading-relaxed relative z-10" style={{ transform: "translateZ(10px)" }}>
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto relative z-10" style={{ transform: "translateZ(15px)" }}>
                <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-on-surface font-bold font-display border border-white/10 shadow-lg group-hover:scale-105 duration-300">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-on-surface font-display">{t.author}</div>
                  <div className="text-sm text-on-surface-variant font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
