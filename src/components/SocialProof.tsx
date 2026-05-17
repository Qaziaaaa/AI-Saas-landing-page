"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const brands = [
  "Acme Corp", "TechFlow", "DataSys", "GlobalNet", "CloudSync", "NexusAI"
];

const SocialProof = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Stagger brands logos fade-in
      if (brandsRef.current) {
        gsap.fromTo(
          Array.from(brandsRef.current.children),
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: brandsRef.current,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // Stagger stats fade-in
      if (statsRef.current) {
        gsap.fromTo(
          Array.from(statsRef.current.children),
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-[80px] border-y border-white/5 bg-surface-container-low/30 overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter text-center">
        <p className="font-code text-xs tracking-widest text-on-surface-variant mb-stack-lg uppercase font-semibold">
          Trusted by innovative teams worldwide
        </p>
        
        <div ref={brandsRef} className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {brands.map((brand) => (
            <div 
              key={brand}
              className="font-display text-xl md:text-2xl font-bold text-on-surface tracking-tighter"
            >
              {brand}
            </div>
          ))}
        </div>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/5">
          <Stat value="10k+" label="Active Users" />
          <Stat value="99.9%" label="Uptime SLA" />
          <Stat value="50M+" label="Workflows Run" />
          <Stat value="24/7" label="Expert Support" />
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col gap-1">
    <div className="font-display text-3xl md:text-4xl font-bold text-primary">{value}</div>
    <div className="text-on-surface-variant font-body text-sm font-medium">{label}</div>
  </div>
);

export default SocialProof;
