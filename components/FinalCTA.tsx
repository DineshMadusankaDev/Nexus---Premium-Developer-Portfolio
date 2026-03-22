'use client';

import { motion } from 'motion/react';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-12 md:p-20 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl text-center relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]" />

          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tighter">
            Ready to <span className="text-gradient">Scale</span> Your <br /> Next Big Idea?
          </h2>
          <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            I&apos;m currently accepting new projects for Q2 2026. Let&apos;s discuss how we can build 
            something that drives real results for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="px-10 py-5 bg-primary text-black rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(0,255,255,0.2)]"
            >
              <MessageSquare className="w-5 h-5" />
              Start Your Project
            </Link>
            <Link
              href="mailto:hello@nexus.dev"
              className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all"
            >
              <Mail className="w-5 h-5" />
              Send an Email
            </Link>
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-8 text-sm font-medium text-foreground/40">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Only 2 slots left for Q2 2026
            </div>
            <div>Average response: 2 hours</div>
            <div>100% Satisfaction Guaranteed</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
