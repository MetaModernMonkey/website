'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/space-monkeys.png"
          alt="Space monkeys background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-synthwave-dark/80 via-synthwave-darker/70 to-synthwave-dark/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-synthwave-pink/10 to-transparent"></div>
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-synthwave-cyan to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-synthwave-pink to-transparent animate-pulse"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Logo/Branding */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-thin-uppercase mb-4 text-sharp">
            <span className="text-synthwave-pink uppercase drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">Meta</span>{' '}
            <span className="text-synthwave-cyan uppercase drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">Modern</span>{' '}
            <span className="text-synthwave-pink uppercase drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">Monkey</span>
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

