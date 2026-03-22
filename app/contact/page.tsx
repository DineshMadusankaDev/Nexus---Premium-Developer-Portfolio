'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Github, Twitter, Linkedin } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'madushaniamarasena@gmail.com',
    href: 'mailto:madushaniamarasena@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Colombo, Sri Lanka',
    href: '#',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 77 123 4567',
    href: 'tel:+94771234567',
  },
];

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-display font-bold mb-8"
            >
              Let&apos;s Build <br />
              Something <span className="text-gradient">Great</span>.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-foreground/60 leading-relaxed"
            >
              Have a project in mind? Or just want to say hi? <br />
              I&apos;m always open to discussing new ideas and opportunities.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-12">Contact Details</h2>
              
              <div className="space-y-10 mb-16">
                {contactDetails.map((detail, index) => (
                  <motion.a 
                    key={detail.label}
                    href={detail.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                      <detail.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-1">{detail.label}</div>
                      <div className="text-xl font-bold group-hover:text-primary transition-colors">{detail.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div>
                <h3 className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-black transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 md:p-16 bg-card border border-border rounded-[40px] relative overflow-hidden shadow-2xl"
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-foreground/60 mb-10">
                      Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-foreground/40">Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-6 py-4 bg-muted border border-border rounded-2xl focus:outline-none focus:border-primary/50 transition-all duration-300 focus:ring-2 focus:ring-primary/10"
                        />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-foreground/40">Email</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-6 py-4 bg-muted border border-border rounded-2xl focus:outline-none focus:border-primary/50 transition-all duration-300 focus:ring-2 focus:ring-primary/10"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-foreground/40">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-6 py-4 bg-muted border border-border rounded-2xl focus:outline-none focus:border-primary/50 transition-all duration-300 focus:ring-2 focus:ring-primary/10 resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500 text-sm"
                      >
                        <AlertCircle className="w-5 h-5" />
                        {errorMessage}
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-5 bg-primary text-black rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
