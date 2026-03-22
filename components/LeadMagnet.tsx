'use client';

import { motion } from 'motion/react';
import { Download, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function LeadMagnet() {
  return (
    <section className="py-24 bg-card border-y border-border overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Free Resource</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tighter">
              Get My <span className="text-gradient">SaaS Launch</span> Checklist
            </h3>
            <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Stop guessing and start building. Download the exact framework I use to launch 
              high-performance SaaS products for my clients.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-12 text-left">
              {[
                'Tech Stack Selection',
                'Performance Optimization',
                'Conversion Strategies',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact?ref=lead-magnet"
              className="inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background rounded-2xl font-bold text-lg hover:bg-primary hover:text-black hover:scale-105 active:scale-95 transition-all shadow-xl group"
            >
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              Download Free Checklist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
