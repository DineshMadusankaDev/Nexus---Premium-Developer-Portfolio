'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const points = [
  'Conversion-optimized user experiences',
  'Scalable architecture for rapid growth',
  'Performance-first mindset (Lighthouse 90+)',
  'Direct access to a product-focused developer',
];

export default function AboutPreview() {
  return (
    <section id="about" className="py-32 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative">
            <Image
              src="https://picsum.photos/seed/about/1000/1000"
              alt="About Me"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 p-8 bg-primary text-black rounded-2xl hidden md:block">
            <div className="text-4xl font-black mb-1">6+</div>
            <div className="text-xs font-bold uppercase tracking-widest">Years in the game</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-tighter">
            I don&apos;t just write code. <br />
            <span className="text-gradient">I build businesses.</span>
          </h3>
          <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
            With a background in both engineering and product strategy, I bridge the gap 
            between technical complexity and business goals. My mission is to help 
            founders launch faster, scale smarter, and maximize their ROI.
          </p>

          <div className="space-y-4 mb-10">
            {points.map(point => (
              <div key={point} className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                <span className="font-medium">{point}</span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            Work With Me
            <CheckCircle2 className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
