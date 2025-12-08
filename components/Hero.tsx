'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with synthwave gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-synthwave-dark via-synthwave-darker to-synthwave-dark">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%2300ffff' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-synthwave-pink/20 to-transparent"></div>
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-synthwave-cyan to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-synthwave-pink to-transparent animate-pulse"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Logo/Branding */}
        <div className="mb-8 animate-float">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="text-glow-pink text-synthwave-pink">Meta</span>{' '}
            <span className="text-glow-cyan text-synthwave-cyan">Modern</span>{' '}
            <span className="text-glow-pink text-synthwave-pink">Monkey</span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Meta Modern Monkey creates small, sincere, and slightly strange digital experiences—playful things made with equal parts curiosity and care. Swinging between experimentation and earnestness, explore what it means to be human one curious little project at a time.
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-synthwave-cyan rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-synthwave-cyan rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

