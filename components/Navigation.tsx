'use client';

import { useState } from 'react';

type FilterType = 'all' | 'app' | 'mobile' | 'game' | 'website';

interface NavigationProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export default function Navigation({ searchQuery, onSearchChange, activeFilter, onFilterChange }: NavigationProps) {
  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'app', label: 'Apps' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'game', label: 'Games' },
    { value: 'website', label: 'Websites' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-synthwave-dark/95 backdrop-blur-md border-b border-synthwave-pink/30 shadow-lg shadow-synthwave-pink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-4 py-3 bg-synthwave-darker/50 border border-synthwave-cyan/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-synthwave-cyan focus:border-glow-cyan transition-all duration-300"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-synthwave-cyan">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Filter Toggles */}
        <div className="flex flex-wrap gap-2 justify-center">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => onFilterChange(filter.value)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-synthwave-pink text-white border-glow-pink border border-synthwave-pink'
                  : 'bg-synthwave-darker/50 text-gray-300 border border-synthwave-cyan/20 hover:border-synthwave-cyan/50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

