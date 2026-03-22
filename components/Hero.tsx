'use client';

import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Only 2 slots left for Q2 2026
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-display font-bold leading-[1] mb-6 tracking-tighter">
            Scale Your <span className="text-gradient">SaaS</span> <br />
            With a Product-First <br />
            Developer.
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/60 mb-10 max-w-xl leading-relaxed">
            I help startup founders and SaaS companies turn complex ideas into 
            high-performance, user-centric applications that drive real growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-primary text-black rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,255,255,0.3)]"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all"
            >
              View Projects
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center gap-6 grayscale opacity-50"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">Trusted By</span>
            <div className="flex gap-8 items-center">
              <div className="font-display font-black text-xl italic hover:text-primary transition-colors cursor-default">TECHCORP</div>
              <div className="font-display font-black text-xl italic hover:text-primary transition-colors cursor-default">SAASLY</div>
              <div className="font-display font-black text-xl italic hover:text-primary transition-colors cursor-default">NEXUS</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block perspective-1000"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-4 hover:border-primary/30 transition-colors group">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/dev/800/1000"
                alt="Developer Profile"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-primary uppercase tracking-tighter">Recent Project</span>
                <span className="text-[10px] text-white/40">Live Now</span>
              </div>
              <h3 className="text-xl font-bold mb-1">AI SaaS Dashboard</h3>
              <p className="text-sm text-white/60">Built with Next.js 15 & Gemini AI</p>
            </motion.div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse delay-500" />
        </motion.div>
      </div>
    </section>
  );
}
