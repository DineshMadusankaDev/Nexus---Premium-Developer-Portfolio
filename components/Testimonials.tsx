'use client';

import { motion } from 'motion/react';
import { Quote, Star, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Founder, TechFlow',
    content: 'Working with Nexus was a game-changer for our startup. The speed and quality of the code exceeded our expectations.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'Michael Chen',
    role: 'CTO, Saasly',
    content: 'The attention to detail and performance optimization helped us reduce our bounce rate by 40%. Highly recommended!',
    avatar: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Product Manager, Innovate',
    content: 'A true professional who understands the business side of development. The ROI on our new dashboard was immediate.',
    avatar: 'https://i.pravatar.cc/150?u=elena',
  },
];

export default function Testimonials() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Client Success</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tighter">What My Partners Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[32px] bg-card border border-border relative group hover:border-primary/30 transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 text-primary/10 w-12 h-12 group-hover:text-primary/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-foreground/80 mb-8 italic leading-relaxed">
                &quot;{t.content}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border group-hover:border-primary/50 transition-colors">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="font-bold group-hover:text-primary transition-colors">{t.name}</div>
                    <div className="w-3 h-3 bg-primary rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-2 h-2 text-black" />
                    </div>
                  </div>
                  <div className="text-xs text-foreground/40 font-medium uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
