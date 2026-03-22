import Link from 'next/link';
import { Github, Twitter, Linkedin, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Terminal className="text-black w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold tracking-tighter">
                NEXUS<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-foreground/40 max-w-sm leading-relaxed mb-8">
              A premium developer portfolio focused on high-performance 
              engineering and conversion-driven product strategy.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Github, label: 'GitHub' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ Icon, label }, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                  aria-label={`Follow on ${label}`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-foreground/40">
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Me</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-foreground/40">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-xs font-bold uppercase tracking-widest text-foreground/20">
          <div>© 2026 NEXUS PORTFOLIO. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-foreground transition-colors">Back to top</Link>
            <div>Designed by Nexus</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
