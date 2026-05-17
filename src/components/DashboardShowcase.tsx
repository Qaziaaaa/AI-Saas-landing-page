"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Zap } from "lucide-react";

const DashboardShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const floatLeftRef = useRef<HTMLDivElement>(null);
  const floatRightRef = useRef<HTMLDivElement>(null);

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

      // Main Mockup Animation
      gsap.fromTo(
        mockupRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mockupRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );

      // Floating panels "slide-out" assembly animations
      gsap.fromTo(
        floatLeftRef.current,
        { opacity: 0, x: 50, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: mockupRef.current,
            start: "top 65%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(
        floatRightRef.current,
        { opacity: 0, x: -50, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: mockupRef.current,
            start: "top 65%",
            toggleActions: "play none none none"
          }
        }
      );

      // Dynamic subtle ambient float for the panels
      gsap.to(floatLeftRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(floatRightRef.current, {
        y: 15,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="showcase" ref={sectionRef} className="py-[120px] bg-surface-container-lowest relative overflow-hidden">
      {/* Dynamic ambient backdrop light */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-primary/5 to-surface/0 pointer-events-none"></div>
      
      <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
        <div ref={headerRef} className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface mb-6">
            Command Center for <span className="text-gradient">Intelligence</span>
          </h2>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
            A beautiful, intuitive interface that puts the power of complex AI models at your fingertips.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-5xl">
          {/* Main 3D Dashboard Mockup Card */}
          <div 
            ref={mockupRef}
            className="glass-card-3d shadow-3d-secondary p-4 md:p-6 border border-white/10"
          >
            {/* Card inner bevel sheen */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/[0.01] to-white/[0.04] pointer-events-none z-10"></div>
            
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/5 shadow-2xl" style={{ transform: "translateZ(10px)" }}>
              <Image 
                src="/images/dashboard.png" 
                alt="Command Center Intelligence Dashboard" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Floating Panels with high Z-depth */}
          <div 
            ref={floatLeftRef}
            className="absolute -left-4 md:-left-12 top-1/4 glass-card-3d shadow-3d-primary p-5 rounded-xl hidden md:block z-20 hover:scale-105 duration-300"
            style={{ transform: "translateZ(40px)" }}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/[0.01] to-white/[0.05] pointer-events-none"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                <CheckCircle size={20} />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-on-surface font-display">Model Trained</div>
                <div className="text-[10px] text-on-surface-variant font-code">99.8% Accuracy</div>
              </div>
            </div>
          </div>
          
          <div 
            ref={floatRightRef}
            className="absolute -right-4 md:-right-8 bottom-1/4 glass-card-3d shadow-3d-secondary p-5 rounded-xl hidden md:block z-20 hover:scale-105 duration-300"
            style={{ transform: "translateZ(45px)" }}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/[0.01] to-white/[0.05] pointer-events-none"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <Zap size={20} />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-on-surface font-display">Latency Optimized</div>
                <div className="text-[10px] text-on-surface-variant font-code">12ms Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
