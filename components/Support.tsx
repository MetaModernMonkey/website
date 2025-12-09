'use client';

import PatreonSvg from '@/assets/patreon.svg';
import BuyMeCoffeeSvg from '@/assets/buymeacoffee.svg';

export default function Support() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-glow-cyan text-synthwave-cyan">
          Support Our Work
        </h2>
        <p className="text-gray-300 mb-8">
          Help us create more small, sincere, and slightly strange digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <a
            href="https://patreon.com/metamodernmonkey"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-6 sm:px-8 py-4 bg-synthwave-dark border border-synthwave-pink/50 rounded-lg hover:border-synthwave-pink hover:border-glow-pink transition-all duration-300 flex items-center justify-center gap-3"
          >
            <PatreonSvg className="w-6 h-6 text-white" />
            <span className="text-white font-semibold group-hover:text-synthwave-pink transition-colors duration-300">
              Support on Patreon
            </span>
          </a>

          <a
            href="https://buymeacoffee.com/metamodernmonkey"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-6 sm:px-8 py-4 bg-synthwave-dark border border-synthwave-cyan/50 rounded-lg hover:border-synthwave-cyan hover:border-glow-cyan transition-all duration-300 flex items-center justify-center gap-3"
          >
            <BuyMeCoffeeSvg className="w-6 h-6 text-white" />
            <span className="text-white font-semibold group-hover:text-synthwave-cyan transition-colors duration-300">
              Buy Me A Coffee
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

