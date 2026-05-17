"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/60 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(196,192,255,0.05)] h-16"
          : "bg-transparent h-20"
      }`}
    >
      <div className="max-w-container-max mx-auto px-gutter h-full flex justify-between items-center">
        <Link href="/" className="font-display text-2xl font-bold text-gradient">
          Aether AI
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-stack-lg">
          <Link
            href="#features"
            className="text-on-surface-variant hover:text-on-surface transition-all duration-300 rounded px-2 py-1 font-body text-sm hover:bg-white/5"
          >
            Platform
          </Link>
          <Link
            href="#benefits"
            className="text-on-surface-variant hover:text-on-surface transition-all duration-300 rounded px-2 py-1 font-body text-sm hover:bg-white/5"
          >
            Solutions
          </Link>
          <Link
            href="#showcase"
            className="text-on-surface-variant hover:text-on-surface transition-all duration-300 rounded px-2 py-1 font-body text-sm hover:bg-white/5"
          >
            Showcase
          </Link>
          <Link
            href="#pricing"
            className="text-on-surface-variant hover:text-on-surface transition-all duration-300 rounded px-2 py-1 font-body text-sm hover:bg-white/5"
          >
            Pricing
          </Link>
        </div>

        <div className="flex items-center gap-stack-md">
          <button className="hidden md:block text-on-surface hover:text-primary transition-colors font-body text-sm font-medium active:scale-95 transition-transform">
            Log In
          </button>
          <Link href="#pricing" className="btn-primary px-6 py-2 rounded-md font-body text-sm font-semibold active:scale-95 transition-transform flex items-center justify-center">
            Get Started
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-on-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Feels like Native App Sheet) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm md:hidden"
            />
            
            {/* Drawer Container Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-surface-container/95 backdrop-blur-2xl border-l border-white/10 z-50 p-6 flex flex-col gap-6 shadow-2xl md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="font-display text-xl font-bold text-gradient">Menu</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-on-surface active:scale-90 transition-transform cursor-pointer border border-white/5"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Anchors with Mobile App Dividers */}
              <div className="flex flex-col gap-1 flex-1 py-4">
                <Link 
                  href="#features" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-on-surface py-3 px-4 rounded-xl active:bg-white/10 transition-all font-body text-base font-semibold flex items-center border-b border-white/5"
                >
                  Platform
                </Link>
                <Link 
                  href="#benefits" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-on-surface py-3 px-4 rounded-xl active:bg-white/10 transition-all font-body text-base font-semibold flex items-center border-b border-white/5"
                >
                  Solutions
                </Link>
                <Link 
                  href="#showcase" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-on-surface py-3 px-4 rounded-xl active:bg-white/10 transition-all font-body text-base font-semibold flex items-center border-b border-white/5"
                >
                  Showcase
                </Link>
                <Link 
                  href="#pricing" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-on-surface py-3 px-4 rounded-xl active:bg-white/10 transition-all font-body text-base font-semibold flex items-center border-b border-white/5"
                >
                  Pricing
                </Link>
              </div>

              {/* Mobile CTA Drawer Footer */}
              <div className="flex flex-col gap-4 mt-auto border-t border-white/5 pt-6">
                <button 
                  className="w-full py-3.5 rounded-xl font-body text-base font-semibold text-on-surface bg-white/5 active:scale-95 transition-transform cursor-pointer border border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log In
                </button>
                <Link 
                  href="#pricing" 
                  className="btn-primary w-full py-3.5 rounded-xl font-body text-base font-semibold active:scale-95 transition-transform flex items-center justify-center cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
