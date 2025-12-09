'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import ProjectGrid from '@/components/ProjectGrid';
import EmailSignup from '@/components/EmailSignup';
import Support from '@/components/Support';
import Footer from '@/components/Footer';
import PerspectiveGrid from '@/components/PerspectiveGrid';
import projectsData from '@/data/projects.json';

export type FilterType = 'all' | 'app' | 'game' | 'website';

export type Project = typeof projectsData[number];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  return (
    <main className="min-h-screen relative">
      <PerspectiveGrid />
      <div className="relative z-10">
        <Hero />
        <Navigation
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <ProjectGrid
          projects={projectsData}
          searchQuery={searchQuery}
          activeFilter={activeFilter}
        />
        <EmailSignup />
        <Support />
        <Footer />
      </div>
    </main>
  );
}

