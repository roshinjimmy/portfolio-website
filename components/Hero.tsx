"use client";

import React, { useEffect, useState } from 'react';
import { personalInfo } from '@/lib/data';
import Link from 'next/link';

const Hero = () => {
  const [typedName, setTypedName] = useState('');

  useEffect(() => {
    const text = personalInfo.name;
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setTypedName(text.slice(0, i));
      if (i >= text.length) clearInterval(timer);
    }, 90);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-[#fafafa] dark:bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Spacer to preserve layout after removing profile icon */}
          <div aria-hidden="true" className="h-35 sm:h-30"></div>
          {/* Removed profile icon for a cleaner hero */}
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] dark:text-[#e5e5e5] mb-6">
            Hi, I'm{' '}
            <span className="text-[#1a1a1a] dark:text-[#e5e5e5] font-extrabold ml-2 sm:ml-3">
              {typedName}
              <span className="ml-1 inline-block w-0.5 h-[1em] bg-current align-middle caret-blink" aria-hidden="true"></span>
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#1a1a1a]/90 dark:text-[#e5e5e5]/90 mb-8 font-medium">
            Developer | Innovator | Student
          </h2>
          
          <p className="text-lg sm:text-xl text-[#1a1a1a]/80 dark:text-[#e5e5e5]/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about crafting innovative digital solutions that make a difference. I specialize in full-stack development, 
            machine learning, and AI-powered applications. From building accessibility tools for color-blind users to developing 
            smart glasses for the visually impaired, I transform ideas into impactful technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#1a1a1a] dark:bg-[#e5e5e5] text-[#fafafa] dark:text-[#0f0f0f] px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              View My Work
            </button>
            
            <Link href="/resume">
            <button className="border-2 border-[#1a1a1a] dark:border-[#e5e5e5] text-[#1a1a1a] dark:text-[#e5e5e5] px-8 py-3 rounded-lg font-medium hover:bg-[#1a1a1a] hover:text-[#fafafa] dark:hover:bg-[#e5e5e5] dark:hover:text-[#0f0f0f] transition-all duration-300">
              Resume
            </button>
            </Link>
          </div>
          
          <div className="flex justify-center space-x-6 mt-12">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a1a1a] dark:text-[#e5e5e5] hover:opacity-70 transition-opacity"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a1a1a] dark:text-[#e5e5e5] hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-[#1a1a1a] dark:text-[#e5e5e5] hover:opacity-70 transition-opacity"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;