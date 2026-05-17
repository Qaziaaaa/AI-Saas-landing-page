"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started with AI.",
    price: "$49",
    features: ["Up to 5 team members", "1,000 workflow runs/mo", "Basic integrations", "Community support"],
    buttonText: "Get Started",
    popular: false,
    color: "secondary"
  },
  {
    name: "Pro",
    description: "For growing companies that need more power.",
    price: "$199",
    features: ["Unlimited team members", "25,000 workflow runs/mo", "Advanced integrations & APIs", "Custom AI models", "Priority 24/7 support"],
    buttonText: "Start Free Trial",
    popular: true,
    color: "primary"
  },
  {
    name: "Enterprise",
    description: "Custom security and dedicated resources.",
    price: "Custom",
    features: ["Unlimited everything", "Dedicated success manager", "On-premise deployment", "Custom SLAs", "SSO & Advanced Security"],
    buttonText: "Contact Sales",
    popular: false,
    color: "tertiary"
  }
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");
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

      // Pricing Cards staggered scroll entrance
      gsap.fromTo(
        ".pricing-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="pricing" ref={containerRef} className="py-section-gap px-gutter max-w-container-max mx-auto">
      <div ref={headerRef} className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface mb-6">
          Simple, Transparent <span className="text-gradient">Pricing</span>
        </h2>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          Start for free, scale when you need to.
        </p>
        
        {/* Toggle Billing Cycle */}
        <div className="inline-flex items-center p-1.5 bg-surface-container rounded-xl border border-white/5 relative z-20">
          <button 
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2 rounded-lg font-bold transition-all duration-300 cursor-pointer ${billingCycle === "monthly" ? "bg-surface text-on-surface shadow-lg" : "text-on-surface-variant hover:text-on-surface"}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setBillingCycle("annually")}
            className={`px-6 py-2 rounded-lg font-bold transition-all duration-300 cursor-pointer ${billingCycle === "annually" ? "bg-surface text-on-surface shadow-lg" : "text-on-surface-variant hover:text-on-surface"}`}
          >
            Annually <span className="text-primary text-xs ml-1 font-bold">-20%</span>
          </button>
        </div>
      </div>

      <div className="pricing-grid grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`pricing-card glass-card-3d shadow-3d-${plan.color} p-8 flex flex-col gap-8 transition-all duration-500 relative ${
              plan.popular 
                ? "border-primary/50 md:scale-110 z-10 bg-surface-container/60 shadow-[0_0_50px_rgba(196,192,255,0.1)]" 
                : "h-[550px]"
            }`}
          >
            {/* Card inner bevel reflection */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/[0.01] to-white/[0.04] pointer-events-none z-10"></div>
            
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase z-20 shadow-md">
                Most Popular
              </div>
            )}
            
            <div className="flex flex-col gap-2 relative z-10" style={{ transform: "translateZ(10px)" }}>
              <h3 className="font-display text-2xl font-bold text-on-surface">{plan.name}</h3>
              <p className="text-on-surface-variant text-sm font-medium leading-relaxed">{plan.description}</p>
            </div>
            
            <div className="flex items-baseline gap-1 relative z-10" style={{ transform: "translateZ(15px)" }}>
              <span className="text-5xl font-bold text-on-surface tracking-tight">
                {billingCycle === "annually" && plan.price !== "Custom" 
                  ? `$${Math.round(parseInt(plan.price.replace("$", "")) * 0.8)}` 
                  : plan.price
                }
              </span>
              {plan.price !== "Custom" && <span className="text-on-surface-variant font-bold">/mo</span>}
            </div>
            
            <ul className="flex flex-col gap-4 flex-1 relative z-10" style={{ transform: "translateZ(5px)" }}>
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-on-surface font-medium">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-primary" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 active:scale-95 cursor-pointer relative z-10 ${
              plan.popular 
                ? "btn-primary" 
                : "border border-white/20 text-on-surface hover:bg-white/5"
            }`} style={{ transform: "translateZ(15px)" }}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
