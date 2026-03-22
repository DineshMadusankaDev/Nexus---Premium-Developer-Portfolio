export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
  category: 'Web' | 'Mobile' | 'SaaS';
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Nexus Analytics',
    description: 'A high-performance analytics dashboard for SaaS companies with real-time data visualization.',
    image: 'https://picsum.photos/seed/analytics/800/600',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'D3.js'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'SaaS',
  },
  {
    id: '2',
    title: 'Vibe Social',
    description: 'A modern social media platform focused on creator economy and community building.',
    image: 'https://picsum.photos/seed/social/800/600',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web',
  },
  {
    id: '3',
    title: 'EcoTrack Mobile',
    description: 'A mobile application for tracking personal carbon footprint and sustainable living habits.',
    image: 'https://picsum.photos/seed/eco/800/600',
    tech: ['React Native', 'Firebase', 'Redux'],
    liveUrl: '#',
    category: 'Mobile',
  },
  {
    id: '4',
    title: 'CryptoFlow',
    description: 'A decentralized finance platform for seamless asset management and yield farming.',
    image: 'https://picsum.photos/seed/crypto/800/600',
    tech: ['Next.js', 'Solidity', 'Ethers.js', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'SaaS',
  },
  {
    id: '5',
    title: 'Lumina CRM',
    description: 'An AI-powered customer relationship management system for small to medium businesses.',
    image: 'https://picsum.photos/seed/crm/800/600',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'OpenAI'],
    liveUrl: '#',
    category: 'SaaS',
  },
  {
    id: '6',
    title: 'Zenith E-commerce',
    description: 'A lightning-fast headless e-commerce storefront with integrated payment processing.',
    image: 'https://picsum.photos/seed/shop/800/600',
    tech: ['Next.js', 'Shopify', 'Tailwind CSS', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web',
  },
];
