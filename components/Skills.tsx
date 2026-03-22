'use client';

import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Zustand'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Firebase', 'Prisma', 'GraphQL'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'Jest', 'CI/CD'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-6">Modern Tech for <br /> Modern Problems</h3>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            I use the most reliable and performant technologies to ensure your product is 
            fast, secure, and ready to scale from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-3xl bg-white/5 border border-white/10"
            >
              <h4 className="text-xl font-bold mb-8 text-primary">{category.title}</h4>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
