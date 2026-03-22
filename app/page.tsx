import Hero from '@/components/Hero';
import Trust from '@/components/Trust';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import AboutPreview from '@/components/AboutPreview';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import { LeadMagnet } from '@/components/LeadMagnet';
import { StickyCTA } from '@/components/StickyCTA';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Trust />
      <Services />
      <Projects />
      <AboutPreview />
      <Skills />
      <Testimonials />
      <LeadMagnet />
      <FinalCTA />
      <StickyCTA />
    </div>
  );
}
