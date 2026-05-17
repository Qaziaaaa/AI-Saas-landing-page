"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can we get set up?",
    answer: "Most teams are up and running within hours. Our visual workflow builder requires zero coding knowledge, and our library of pre-built templates helps you automate common processes instantly."
  },
  {
    question: "Is my company's data secure?",
    answer: "Absolutely. We are SOC2 Type II certified. All data is encrypted at rest and in transit. We do not use your proprietary data to train our foundational models unless explicitly opted-in for custom model fine-tuning."
  },
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Prorated charges or credits will be applied automatically to your account when you switch plans mid-billing cycle."
  },
  {
    question: "Do you offer custom integrations?",
    answer: "Our Enterprise plan includes support for building custom integrations to your proprietary internal systems. For Pro and Starter plans, you can utilize our webhooks and REST API to connect almost any system."
  }
];

const FAQ = () => {
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

      // Staggered FAQ Items entry
      gsap.fromTo(
        ".faq-item-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".faq-list",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-[120px] border-y border-white/5 bg-surface-container-low/30 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-gutter relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-on-surface mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>
        
        <div className="faq-list flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div 
      className="faq-item-card glass-card-interactive rounded-xl overflow-hidden"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-6 text-left hover:bg-white/[0.02] transition-colors group cursor-pointer relative z-10"
      >
        <span className="font-display text-lg font-bold text-on-surface group-hover:text-primary transition-colors">{question}</span>
        <ChevronDown 
          size={20} 
          className={`text-on-surface-variant transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} 
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-on-surface-variant font-body leading-relaxed border-t border-white/5 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;
