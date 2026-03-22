'use client';

import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'AI Content Engine',
    description: 'A full-stack SaaS platform that generates SEO-optimized blog posts using Gemini AI.',
    impact: 'Increased content output by 400% for early adopters.',
    image: 'https://picsum.photos/seed/project1/800/600',
    tags: ['Next.js', 'TypeScript', 'Gemini API', 'Tailwind'],
    link: '#',
    github: '#',
  },
  {
    title: 'Fintech Dashboard',
    description: 'Real-time financial analytics dashboard with complex data visualizations and reporting.',
    impact: 'Reduced data processing time by 60% with optimized queries.',
    image: 'https://picsum.photos/seed/project2/800/600',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    link: '#',
    github: '#',
  },
  {
    title: 'E-commerce Luxury',
    description: 'A high-end fashion store with seamless checkout and immersive product galleries.',
    impact: 'Boosted conversion rate by 25% through UX optimizations.',
    image: 'https://picsum.photos/seed/project3/800/600',
    tags: ['Next.js', 'Shopify', 'Framer Motion'],
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Proven Results</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tighter">Selected Case Studies</h3>
          </div>
          <Link href="/projects" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Work <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-[32px] overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-primary/5"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <Link 
                    href={project.link} 
                    className="w-12 h-12 bg-primary text-black rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl"
                    aria-label="View Live Site"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                  <Link 
                    href={project.github} 
                    className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all border border-white/20 backdrop-blur-md"
                    aria-label="View Source Code"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-muted border border-border rounded-full text-[10px] font-bold uppercase tracking-widest text-foreground/40 group-hover:text-primary group-hover:border-primary/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-border flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-tighter">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  {project.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
