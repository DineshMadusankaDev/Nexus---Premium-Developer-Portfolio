'use client';

import { useState, useMemo } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import FinalCTA from '@/components/FinalCTA';
import { AnimatePresence, motion } from 'motion/react';
import { Search, Filter, X } from 'lucide-react';

const categories = ['All', 'SaaS', 'Web', 'Mobile'] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTech, setActiveTech] = useState('All');

  const allTech = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(p => p.tech.forEach(t => techSet.add(t)));
    return ['All', ...Array.from(techSet).sort()];
  }, []);

  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesTech = activeTech === 'All' || p.tech.includes(activeTech);
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesTech && matchesSearch;
  });

  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Selected <span className="text-gradient">Works</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            A collection of high-performance applications, SaaS products, and digital experiences.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          {/* Search Bar */}
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40 group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search projects by title or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary/50 transition-all text-lg"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-foreground/40" />
              </button>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-black shadow-[0_0_20px_rgba(0,255,255,0.3)]'
                      : 'bg-white/5 border border-white/10 text-foreground/60 hover:border-primary/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Tech Stack Filter */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Filter className="w-4 h-4 text-foreground/40 shrink-0" />
              <select
                value={activeTech}
                onChange={(e) => setActiveTech(e.target.value)}
                className="w-full md:w-48 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm font-bold focus:outline-none focus:border-primary/50 transition-all cursor-pointer"
              >
                {allTech.map(tech => (
                  <option key={tech} value={tech} className="bg-background text-foreground">
                    {tech === 'All' ? 'All Technologies' : tech}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10"
          >
            <p className="text-xl text-foreground/40 font-medium">No projects found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
                setActiveTech('All');
              }}
              className="mt-4 text-primary font-bold hover:underline"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
      <FinalCTA />
    </div>
  );
}
