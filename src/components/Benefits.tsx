"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Row 1 (Scale operations) animations
      if (row1Ref.current) {
        const textElement = row1Ref.current.querySelector(".benefit-text");
        const cardElement = row1Ref.current.querySelector(".benefit-card");
        
        if (textElement) {
          gsap.fromTo(
            textElement,
            { opacity: 0, x: -40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row1Ref.current,
                start: "top 80%",
                toggleActions: "play none none none"
              }
            }
          );
        }
        
        if (cardElement) {
          gsap.fromTo(
            cardElement,
            { opacity: 0, x: 40, scale: 0.95, rotateY: 5 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              rotateY: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row1Ref.current,
                start: "top 80%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      }

      // Row 2 (Seamless integration) animations
      if (row2Ref.current) {
        const cardElement = row2Ref.current.querySelector(".benefit-card");
        const textElement = row2Ref.current.querySelector(".benefit-text");
        
        if (cardElement) {
          gsap.fromTo(
            cardElement,
            { opacity: 0, x: -40, scale: 0.95, rotateY: -5 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              rotateY: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row2Ref.current,
                start: "top 80%",
                toggleActions: "play none none none"
              }
            }
          );
        }

        if (textElement) {
          gsap.fromTo(
            textElement,
            { opacity: 0, x: 40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row2Ref.current,
                start: "top 80%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="benefits" ref={sectionRef} className="py-section-gap px-gutter max-w-container-max mx-auto flex flex-col gap-[120px] overflow-hidden">
      {/* Benefit 1 */}
      <div ref={row1Ref} className="grid md:grid-cols-2 gap-16 items-center">
        <div className="benefit-text flex flex-col gap-6">
          <h2 className="font-display text-4xl font-bold text-on-surface mb-2 leading-tight">
            Scale Operations Without <br />
            <span className="text-gradient">Scaling Headcount</span>
          </h2>
          <p className="font-body text-lg text-on-surface-variant mb-4 leading-relaxed">
            Our intelligent automation engine handles the repetitive tasks that bog your team down. By automating complex workflows, your team can focus on strategic initiatives that drive real growth.
          </p>
          <ul className="flex flex-col gap-4 mb-6">
            <BenefitItem text="Reduce manual data entry by up to 90%" />
            <BenefitItem text="Eliminate human error in critical processes" />
            <BenefitItem text="Free up hundreds of hours per month" />
          </ul>
          <Link href="#pricing" className="text-primary font-bold hover:underline flex items-center gap-2 group transition-all w-fit">
            Learn more about scaling 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="benefit-card glass-card-3d shadow-3d-primary p-4 h-[400px] md:h-[500px] relative overflow-hidden group">
          {/* Card inner bevel sheen */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/[0.01] to-white/[0.03] pointer-events-none z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent group-hover:opacity-40 transition-opacity"></div>
          <div className="relative h-full w-full rounded-xl overflow-hidden" style={{ transform: "translateZ(15px)" }}>
            <Image 
              src="/images/automation.png" 
              alt="AI Automation Visualization" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* Benefit 2 */}
      <div ref={row2Ref} className="grid md:grid-cols-2 gap-16 items-center">
        <div className="benefit-card glass-card-3d shadow-3d-secondary p-4 h-[400px] md:h-[500px] relative overflow-hidden group order-2 md:order-1">
          {/* Card inner bevel sheen */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/[0.01] to-white/[0.03] pointer-events-none z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent group-hover:opacity-40 transition-opacity"></div>
          <div className="relative h-full w-full rounded-xl overflow-hidden" style={{ transform: "translateZ(15px)" }}>
            <Image 
              src="/images/integration.png" 
              alt="AI Integration Map" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
        
        <div className="benefit-text flex flex-col gap-6 order-1 md:order-2">
          <h2 className="font-display text-4xl font-bold text-on-surface mb-2 leading-tight">
            Seamlessly Integrate <br />
            <span className="text-gradient">Your Entire Stack</span>
          </h2>
          <p className="font-body text-lg text-on-surface-variant mb-4 leading-relaxed">
            Aether AI doesn't replace your tools; it makes them smarter. Connect directly to your existing databases, CRMs, and communication platforms to create unified, intelligent pipelines.
          </p>
          <ul className="flex flex-col gap-4 mb-6">
            <BenefitItem text="100+ native integrations out of the box" />
            <BenefitItem text="Secure, compliant data handling (SOC2 Type II)" />
            <BenefitItem text="Custom webhooks for proprietary systems" />
          </ul>
          <Link href="#pricing" className="text-secondary font-bold hover:underline flex items-center gap-2 group transition-all w-fit">
            View all integrations 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const BenefitItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-4 text-on-surface-variant font-medium">
    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
      <CheckCircle2 size={16} className="text-primary" />
    </div>
    <span>{text}</span>
  </li>
);

export default Benefits;
