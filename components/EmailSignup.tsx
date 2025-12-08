'use client';

import { useState } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your email service (e.g., Mailchimp, ConvertKit, etc.)
    // For now, we'll just show a success message
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-synthwave-dark/30 border-y border-synthwave-pink/20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-glow-pink text-synthwave-pink">
          Stay Updated
        </h2>
        <p className="text-gray-300 mb-8">
          Get notified when we release new projects and updates.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 bg-synthwave-darker/50 border border-synthwave-cyan/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-synthwave-cyan focus:border-glow-cyan transition-all duration-300"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-synthwave-pink to-synthwave-purple text-white font-semibold rounded-lg hover:from-synthwave-purple hover:to-synthwave-pink transition-all duration-300 border-glow-pink"
          >
            Subscribe
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-synthwave-cyan animate-fade-in">
            Thanks for subscribing! Check your email to confirm.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-400 animate-fade-in">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}

