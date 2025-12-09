'use client';

import { FilterType } from '@/app/page';
import { Gamepad2, Globe2, LucideIcon, Search, Smartphone } from 'lucide-react';

interface NavigationProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

type FilterOption = { value: FilterType; label: string; icon?: LucideIcon };

export default function Navigation({ searchQuery, onSearchChange, activeFilter, onFilterChange }: NavigationProps) {
  const filters: FilterOption[] = [
    { value: 'all', label: 'All' },
    { value: 'app', label: 'Apps', icon: Smartphone },
    { value: 'game', label: 'Games', icon: Gamepad2 },
    { value: 'website', label: 'Websites', icon: Globe2 },
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
              <Search className="w-5 h-5" aria-hidden />
            </div>
          </div>
        </div>

        {/* Filter Toggles */}
        <div className="flex justify-center">
          <div className="inline-flex items-center rounded-full bg-synthwave-darker/70 border border-synthwave-cyan/30 shadow-synthwave shadow-sm p-1 backdrop-blur-md">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  onClick={() => onFilterChange(filter.value)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2 justify-center ${isActive
                    ? 'bg-synthwave-pink text-white shadow-lg shadow-synthwave-pink/30'
                    : 'text-gray-200 hover:text-white hover:bg-synthwave-darker/40'
                    }`}
                >
                  {filter.icon && <filter.icon className="w-4 h-4" aria-hidden />}
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

