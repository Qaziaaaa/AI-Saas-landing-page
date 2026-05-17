"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest w-full py-16 border-t border-white/5">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="w-8 h-8 transition-transform duration-500 group-hover:rotate-[30deg]">
                <path d="M16 6L25 11V21L16 26L7 21V11L16 6Z" stroke="url(#footerLogoStrokeGrad)" strokeWidth="2" strokeLinejoin="round" />
                <path d="M16 6V26" stroke="url(#footerLogoStrokeGrad)" strokeWidth="1.5" strokeOpacity="0.5" />
                <path d="M7 11L25 21" stroke="url(#footerLogoStrokeGrad)" strokeWidth="1.5" strokeOpacity="0.5" />
                <path d="M25 11L7 21" stroke="url(#footerLogoStrokeGrad)" strokeWidth="1.5" strokeOpacity="0.5" />
                <circle cx="16" cy="16" r="4" fill="url(#footerLogoCoreGrad)" stroke="#0e1323" strokeWidth="1.5" />
                <defs>
                  <linearGradient id="footerLogoStrokeGrad" x1="7" y1="6" x2="25" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#c4c0ff" />
                    <stop offset="1" stopColor="#8fd8ff" />
                  </linearGradient>
                  <linearGradient id="footerLogoCoreGrad" x1="12" y1="12" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8fd8ff" />
                    <stop offset="1" stopColor="#c4c0ff" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-display text-2xl font-bold text-gradient">
                Aether AI
              </span>
            </Link>
            <p className="text-on-surface-variant max-w-xs font-body text-sm leading-relaxed mb-8">
              Engineering the future of intelligence with premium AI automation tools for modern engineering teams.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<TwitterIcon size={20} />} />
              <SocialLink icon={<GithubIcon size={20} />} />
              <SocialLink icon={<LinkedinIcon size={20} />} />
              <SocialLink icon={<Mail size={20} />} />
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-on-surface mb-6">Platform</h4>
            <ul className="flex flex-col gap-4 text-sm text-on-surface-variant">
              <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#benefits" className="hover:text-primary transition-colors">Integrations</Link></li>
              <li><Link href="#pricing" className="hover:text-primary transition-colors">Enterprise</Link></li>
              <li><Link href="#benefits" className="hover:text-primary transition-colors">Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-on-surface mb-6">Resources</h4>
            <ul className="flex flex-col gap-4 text-sm text-on-surface-variant">
              <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">API Reference</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Changelog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-on-surface mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-on-surface-variant">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-on-surface-variant text-sm font-medium">
            © 2024 Aether AI. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-on-surface-variant font-medium">
            <Link href="#" className="hover:text-on-surface transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-on-surface transition-colors">Terms</Link>
            <Link href="#" className="hover:text-on-surface transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon }: { icon: React.ReactNode }) => (
  <Link 
    href="#" 
    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all duration-300 border border-white/5"
  >
    {icon}
  </Link>
);

export default Footer;
