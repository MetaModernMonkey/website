'use client';

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
            <svg className="w-6 h-6 text-synthwave-pink" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.17 2.17c-1.96 0-3.72.81-4.98 2.11-1.26-1.3-3.02-2.11-4.98-2.11C2.24 2.17 0 4.41 0 7.12c0 2.71 2.24 4.95 5.21 4.95 1.96 0 3.72-.81 4.98-2.11 1.26 1.3 3.02 2.11 4.98 2.11 2.97 0 5.21-2.24 5.21-4.95 0-2.71-2.24-4.95-5.21-4.95z"/>
            </svg>
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
            <svg className="w-6 h-6 text-synthwave-cyan" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span className="text-white font-semibold group-hover:text-synthwave-cyan transition-colors duration-300">
              Buy Me A Coffee
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

