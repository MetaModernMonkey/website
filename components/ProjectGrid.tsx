'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { FilterType, Project } from '@/app/page';
import { trackProjectClick } from '@/lib/analytics';

interface ProjectGridProps {
  projects: Project[];
  searchQuery: string;
  activeFilter: FilterType;
}

export default function ProjectGrid({ projects, searchQuery, activeFilter }: ProjectGridProps) {
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (activeFilter !== 'all') {
      filtered = filtered.filter((project) => {
        if (activeFilter === 'app') return project.tags.includes('app');
        if (activeFilter === 'game') return project.tags.includes('game');
        if (activeFilter === 'website') return project.tags.includes('web') || project.tags.includes('website');
        return true;
      });
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.name.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [projects, searchQuery, activeFilter]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">No projects found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-synthwave-dark/50 border border-synthwave-cyan/20 rounded-lg overflow-hidden hover:border-synthwave-pink/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Screenshot */}
                <div className="relative h-48 bg-synthwave-darker overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-synthwave-pink/20 to-synthwave-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  {project.screenshot && project.screenshot.startsWith('/') ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={project.screenshot}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-synthwave-cyan/30">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-synthwave-cyan transition-colors duration-300">
                      {project.name}
                    </h3>
                    {project.comingSoon && (
                      <span className="px-2 py-1 text-xs font-semibold bg-synthwave-pink/20 text-synthwave-pink border border-synthwave-pink/50 rounded">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-synthwave-darker/50 text-synthwave-cyan border border-synthwave-cyan/30 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {!project.comingSoon && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackProjectClick({ id: project.id, name: project.name, link: project.link })}
                      className="inline-flex items-center text-synthwave-pink hover:text-synthwave-cyan transition-colors duration-300 text-sm font-medium"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Your Idea Placeholder */}
            <a
              href="mailto:support@metamodernmonkey.com?subject=App%20Idea"
              className="group relative bg-synthwave-dark/20 border border-synthwave-cyan/10 border-dashed rounded-lg overflow-hidden hover:border-synthwave-pink/30 hover:bg-synthwave-dark/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${filteredProjects.length * 0.1}s` }}
            >
              {/* Icon Area */}
              <div className="relative h-48 bg-synthwave-darker/30 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-synthwave-pink/10 to-synthwave-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-16 h-16 text-synthwave-cyan/20 group-hover:text-synthwave-cyan/40 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white/50 group-hover:text-synthwave-cyan/70 transition-colors duration-300">
                    Your Idea
                  </h3>
                </div>

                <p className="text-gray-400/60 text-sm mb-4">Have an app or game idea? Share it with us and we might build it!</p>

                {/* Link */}
                <span className="inline-flex items-center text-synthwave-pink/60 group-hover:text-synthwave-cyan/70 transition-colors duration-300 text-sm font-medium">
                  Send Idea
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

