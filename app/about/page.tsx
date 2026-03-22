'use client';

import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Code2, Rocket, Heart, Coffee } from 'lucide-react';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import Image from 'next/image';

const timeline = [
  {
    year: '2022 - Present',
    role: 'Senior Full Stack Engineer',
    company: 'Nexus Digital Solutions',
    description: 'Leading development of high-performance SaaS applications and mentoring junior developers.',
    icon: Rocket,
  },
  {
    year: '2020 - 2022',
    role: 'Frontend Architect',
    company: 'Vibe Social',
    description: 'Architected the frontend of a modern social media platform, focusing on real-time interactions and performance.',
    icon: Code2,
  },
  {
    year: '2018 - 2020',
    role: 'Web Developer',
    company: 'Creative Agency',
    description: 'Built conversion-driven websites for various clients, from startups to established brands.',
    icon: Briefcase,
  },
  {
    year: '2014 - 2018',
    role: 'B.S. in Computer Science',
    company: 'Tech University',
    description: 'Focused on software engineering, algorithms, and human-computer interaction.',
    icon: GraduationCap,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-display font-bold mb-8"
            >
              The Mind Behind <span className="text-gradient">Nexus</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-foreground/60 leading-relaxed"
            >
              I bridge the gap between technical complexity and business goals. 
              My mission is to help founders launch faster and scale smarter.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 relative">
                <Image
                  src="https://picsum.photos/seed/journey/1000/1250"
                  alt="My Journey"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 p-10 bg-primary text-black rounded-[32px] hidden md:block shadow-2xl">
                <div className="text-5xl font-black mb-1">6+</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-80">Years of Experience</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-6">My Story</h2>
              <h3 className="text-4xl font-display font-bold mb-8">Engineering with a <span className="text-gradient">Product Mindset</span></h3>
              <div className="space-y-6 text-lg text-foreground/60 leading-relaxed">
                <p>
                  My journey started with a simple curiosity: how do things work under the hood? 
                  That curiosity evolved into a passion for building digital products that solve 
                  real-world problems.
                </p>
                <p>
                  Over the past 6 years, I&apos;ve worked with startups and established companies 
                  to build everything from high-performance SaaS dashboards to decentralized 
                  finance platforms. I believe that great code is only half the battle—the 
                  other half is understanding the user and the business goals.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or enjoying a good cup of coffee 
                  while planning my next big idea.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                    <Heart className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold">Passion</div>
                    <div className="text-sm text-foreground/40">Driven by quality</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                    <Coffee className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold">Focus</div>
                    <div className="text-sm text-foreground/40">Deep work expert</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-32 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Career</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold">My Experience</h3>
            </div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 md:pl-0"
                >
                  <div className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-12 items-center">
                    <div className="hidden md:block text-right">
                      <div className="text-sm font-bold text-primary mb-1">{item.year}</div>
                      <div className="text-lg font-bold">{item.company}</div>
                    </div>

                    <div className="absolute left-0 top-0 md:relative flex flex-col items-center h-full">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center relative z-10">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="w-px h-full bg-white/10 absolute top-12 md:top-12"></div>
                    </div>

                    <div className="pb-12 md:pb-0">
                      <div className="md:hidden text-sm font-bold text-primary mb-1">{item.year}</div>
                      <div className="md:hidden text-lg font-bold mb-2">{item.company}</div>
                      <h4 className="text-xl font-bold mb-3">{item.role}</h4>
                      <p className="text-foreground/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Testimonials />
    </div>
  );
}
