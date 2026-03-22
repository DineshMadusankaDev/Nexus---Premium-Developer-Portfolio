'use client';

import { motion } from 'motion/react';
import { Code2, Rocket, Brain, Zap } from 'lucide-react';

const services = [
  {
    title: 'High-Performance Web Apps',
    description: 'Convert more visitors into customers with lightning-fast, SEO-optimized Next.js applications.',
    icon: Code2,
    color: 'text-blue-400',
  },
  {
    title: 'Scalable SaaS Solutions',
    description: 'Build a robust foundation for your business with scalable architectures that grow with your users.',
    icon: Rocket,
    color: 'text-purple-400',
  },
  {
    title: 'AI-Powered Automation',
    description: 'Reduce operational costs and enhance user value by integrating cutting-edge AI features.',
    icon: Brain,
    color: 'text-emerald-400',
  },
  {
    title: 'Conversion Optimization',
    description: 'Identify and fix performance bottlenecks to maximize user retention and revenue.',
    icon: Zap,
    color: 'text-orange-400',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">How I Help You Grow</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tighter">Premium Solutions for <br /> High-Growth Businesses</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-2"
            >
              <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${service.color}`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-foreground/60 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
