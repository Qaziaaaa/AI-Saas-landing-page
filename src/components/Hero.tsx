"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { PlayCircle } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const floatWidgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // 1. Stagger left column text/buttons entry
      const elements = leftColRef.current?.children;
      if (elements) {
        gsap.fromTo(
          Array.from(elements),
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out"
          }
        );
      }

      // 2. Right column mockup card entrance
      const mainCard = rightColRef.current?.querySelector(".hero-main-card");
      if (mainCard) {
        gsap.fromTo(
          mainCard,
          { opacity: 0, scale: 0.9, y: 50, rotateX: 8 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateX: 0,
            duration: 1.2,
            ease: "power4.out",
            delay: 0.2
          }
        );
      }

      // 3. Floating Badge Slide out and persistent float
      if (floatWidgetRef.current) {
        gsap.fromTo(
          floatWidgetRef.current,
          { opacity: 0, x: 50, scale: 0.8, rotate: 5 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            rotate: 0,
            duration: 1,
            ease: "back.out(1.5)",
            delay: 0.8
          }
        );

        // Dynamic sine wave float
        gsap.to(floatWidgetRef.current, {
          y: -12,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-[160px] pb-[80px] px-gutter max-w-container-max mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-stack-lg items-center relative z-10">
        
        {/* Left Copy Column */}
        <div ref={leftColRef} className="flex flex-col gap-stack-md">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1 w-fit">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-code text-[10px] tracking-widest font-semibold text-primary uppercase">AETHER V2 IS LIVE</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight">
            Transform Your <br />
            <span className="text-gradient">Workflow</span> with AI
          </h1>
          
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
            Build, deploy, and scale intelligent workflows in minutes. Harness the power of next-generation AI to accelerate your team's productivity.
          </p>
          
          <div className="flex flex-wrap items-center gap-stack-md pt-stack-sm">
            <Link href="#pricing" className="btn-primary px-8 py-4 rounded-lg font-body text-base font-semibold transition-all cursor-pointer flex items-center justify-center">
              Start Free Trial
            </Link>
            <Link href="#showcase" className="glass-card-interactive px-8 py-4 rounded-lg font-body text-base font-semibold text-on-surface transition-all flex items-center gap-2 cursor-pointer">
              <PlayCircle size={20} />
              Book Demo
            </Link>
          </div>
        </div>

        {/* Right Interactive Mockup Column */}
        <div 
          ref={rightColRef}
          className="relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center"
        >
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-[100px] -z-10 animate-pulse-soft"></div>
          
          {/* Main 3D Beveled Mockup Card */}
          <div className="hero-main-card glass-card-3d shadow-3d-secondary rounded-xl p-2 w-full h-[400px] md:h-[500px] relative overflow-hidden flex flex-col">
            {/* Bevel glow sheet */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/[0.01] to-white/[0.04] pointer-events-none z-10"></div>
            
            {/* Fake Window Header */}
            <div className="flex items-center gap-2 p-3 border-b border-white/5 mb-2 relative z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40"></div>
            </div>
            
            {/* Content Dashboard Screen */}
            <div className="flex-1 rounded-lg border border-white/5 bg-surface-container-low overflow-hidden relative" style={{ transform: "translateZ(10px)" }}>
              <Image 
                src="/images/dashboard.png" 
                alt="Aether AI Dashboard" 
                fill
                className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent pointer-events-none"></div>
            </div>
          </div>
          
          {/* Floating Telemetry Element with high 3D perspective depth */}
          <div 
            ref={floatWidgetRef}
            className="absolute -top-4 -right-4 glass-card-3d shadow-3d-primary p-4 rounded-lg hidden lg:block hover:scale-105 duration-300 z-20 cursor-pointer"
            style={{ transform: "translateZ(30px)" }}
          >
            {/* Bevel highlight */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-white/[0.01] to-white/[0.05] pointer-events-none"></div>
            <div className="text-xs font-code text-secondary font-bold relative z-10">ACCURACY</div>
            <div className="text-xl font-display font-bold relative z-10">99.8%</div>
          </div>
        </div>
      </div>

      {/* Ambient Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Hero;
