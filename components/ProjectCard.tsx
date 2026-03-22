import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/data/projects';
import { motion } from 'motion/react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: '0 20px 40px rgba(0, 255, 255, 0.1)',
        borderColor: 'rgba(0, 255, 255, 0.5)'
      }}
      transition={{ duration: 0.4 }}
      className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-primary text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">
              {project.category}
            </span>
            <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
        </div>
        
        <p className="text-foreground/60 text-sm leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-medium text-foreground/40"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
