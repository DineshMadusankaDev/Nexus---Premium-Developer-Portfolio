'use client';

import { motion } from 'motion/react';
import { 
  Cloud, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Zap, 
  Shield, 
  Activity 
} from 'lucide-react';

const stats = [
  { label: 'SaaS Products Launched', value: '12+' },
  { label: 'Client Satisfaction', value: '100%' },
  { label: 'Repeat Clients', value: '85%' },
  { label: 'Years Experience', value: '8+' },
];

const logos = [
  { name: 'CloudScale', icon: Cloud },
  { name: 'CoreTech', icon: Cpu },
  { name: 'DataFlow', icon: Database },
  { name: 'GlobalNet', icon: Globe },
  { name: 'LayerOne', icon: Layers },
  { name: 'Zapier', icon: Zap },
  { name: 'ShieldGuard', icon: Shield },
  { name: 'ActivePulse', icon: Activity },
];

export default function Trust() {
  return (
    <section className="py-24 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground/40 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Logo Carousel */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10" />
        
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={`${logo.name}-${index}`}
              className="inline-flex items-center gap-3 px-12 opacity-30 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <logo.icon className="w-8 h-8 text-primary" />
              <span className="text-xl font-display font-bold tracking-tight text-foreground">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
