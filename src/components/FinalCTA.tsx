"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const FinalCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const elements = contentRef.current?.children;
      if (elements) {
        gsap.fromTo(
          Array.from(elements),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-[160px] px-gutter relative overflow-hidden">
      {/* Massive Ambient Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-surface to-secondary/20 opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-soft"></div>
      
      <div ref={contentRef} className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        <h2 className="font-display text-4xl md:text-7xl font-bold text-on-surface mb-8 leading-tight tracking-tight">
          Ready to Engineer <br />
          the <span className="text-gradient">Future?</span>
        </h2>
        
        <p className="font-body text-xl text-on-surface-variant mb-12 max-w-2xl leading-relaxed">
          Join thousands of forward-thinking teams building the next generation of intelligent workflows.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <Link href="#pricing" className="btn-primary px-12 py-5 rounded-xl font-bold text-lg shadow-[0_0_40px_rgba(196,192,255,0.4)] active:scale-95 transition-all flex items-center justify-center cursor-pointer">
            Start Free Trial
          </Link>
          <Link href="#pricing" className="glass-card-interactive px-12 py-5 rounded-xl font-bold text-lg text-on-surface active:scale-95 transition-all flex items-center justify-center cursor-pointer">
            Contact Sales
          </Link>
        </div>
        
        <p className="text-sm text-on-surface-variant mt-10 font-medium">
          No credit card required. 14-day free trial.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
