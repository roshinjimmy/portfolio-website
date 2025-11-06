"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import { personalInfo } from '@/lib/data';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-[#fafafa]/80 dark:bg-[#0f0f0f]/80 backdrop-blur-lg border-b border-[#1a1a1a]/30 dark:border-[#e5e5e5]/30 shadow-lg'
        : 'bg-[#fafafa]/90 dark:bg-[#0f0f0f]/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-0 border-b border-[#1a1a1a]/20 dark:border-[#e5e5e5]/20 md:border-0'
    }`}>
  <div className="max-w-7xl mx-auto px-3 sm:px-8 lg:px-5">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl md:text-2xl font-bold text-foreground hover:opacity-80 transition-opacity"
            aria-label="Go to top"
          >
            {personalInfo.name}
          </button>

          {/* Desktop Navigation (right aligned) */}
          <div className="hidden md:flex items-center gap-6 md:gap-8 ml-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:opacity-70 transition-opacity font-medium text-base md:text-lg"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 justify-self-end"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-7 h-7 text-[#1a1a1a] dark:text-[#e5e5e5]"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            ) : (
              <svg
                className="w-7 h-7 text-[#1a1a1a] dark:text-[#e5e5e5]"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            )}
            <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-x-0 top-16 z-40 h-[65vh] bg-[#fafafa]/95 dark:bg-[#0f0f0f]/95 backdrop-blur-md border-t border-[#1a1a1a]/20 dark:border-[#e5e5e5]/20 overflow-y-auto shadow-xl rounded-b-xl"
          >
            <div className="flex flex-col items-center space-y-6 py-6 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-center text-foreground hover:opacity-70 transition-opacity font-medium py-3 text-lg w-full max-w-sm border-b border-transparent hover:border-[#1a1a1a]/20 dark:hover:border-[#e5e5e5]/20"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;