import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Instagram, Rocket, Send } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  insta: string;
  github: string;
  image: string;
  color: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Raj Chandel',
    role: 'Lead Developer',
    insta: 'raj_chandel',
    github: 'rajchandel',
    image: 'https://picsum.photos/seed/raj/400/500',
    color: 'bg-vibrant',
  },
  {
    name: 'Manav Chawla',
    role: 'UI/UX Designer',
    insta: 'manav_chawla',
    github: 'manavchawla',
    image: 'https://picsum.photos/seed/manav/400/500',
    color: 'bg-accent',
  },
  {
    name: 'Prince',
    role: 'Backend Engineer',
    insta: 'prince_dev',
    github: 'prince',
    image: 'https://picsum.photos/seed/prince/400/500',
    color: 'bg-passion',
  },
  {
    name: 'Dixit',
    role: 'Frontend Developer',
    insta: 'dixit_codes',
    github: 'dixit',
    image: 'https://picsum.photos/seed/dixit/400/500',
    color: 'bg-vibrant',
  },
];

const Sticker = ({
  children,
  className,
  rotate = 0,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}) => (
  <motion.div
    initial={{ scale: 0, rotate: 0 }}
    animate={{ scale: 1, rotate }}
    whileHover={{ scale: 1.1, rotate: rotate + 5 }}
    className={`sticker absolute z-30 ${className ?? ''}`}
  >
    {children}
  </motion.div>
);

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="tape" />
      <div className="polaroid transition-all duration-500 group-hover:-rotate-2 group-hover:scale-105">
        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover transition-all duration-500"
            referrerPolicy="no-referrer"
          />
          <div
            className={`absolute left-4 top-4 rounded-sm px-3 py-1 text-[10px] font-bold text-primary shadow-sm ${member.color}`}
          >
            {member.role}
          </div>
        </div>
        <div className="mt-4 text-center">
          <h3 className="font-display text-xl leading-tight tracking-wide text-primary">
            {member.name}
          </h3>
          <div className="mt-3 flex items-center justify-center gap-4">
            <a
              href={`https://instagram.com/${member.insta}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-colors hover:text-accent"
              aria-label={`${member.name} Instagram`}
            >
              <Instagram size={18} />
            </a>
            <a
              href={`https://github.com/${member.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-colors hover:text-vibrant"
              aria-label={`${member.name} GitHub`}
            >
              <Github size={18} />
            </a>
          </div>
          <p className="mt-2 text-[10px] font-medium uppercase tracking-widest text-muted opacity-60">
            @{member.insta}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TechTeamPage() {
  return (
    <div className="relative min-h-screen bg-primary selection:bg-accent selection:text-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute left-0 top-0 h-full w-full -translate-y-1/2 transform bg-[radial-gradient(circle_at_50%_50%,#8b5cf6_0%,transparent_50%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-full w-full translate-y-1/2 transform bg-[radial-gradient(circle_at_50%_50%,#00f2ff_0%,transparent_50%)] blur-3xl" />
      </div>

      <header className="relative overflow-hidden px-6 pb-16 pt-24 text-center">
        <Link
          to="/"
          className="absolute left-6 top-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-highlight transition hover:border-vibrant/50 hover:text-vibrant"
        >
          <ArrowLeft size={14} />
          Back Home
        </Link>
        <Sticker className="left-10 top-10 text-vibrant" rotate={-15}>
          <Send size={48} />
        </Sticker>
        <Sticker className="right-10 top-20 text-passion" rotate={15}>
          <Rocket size={56} />
        </Sticker>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block"
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-[2px] w-12 bg-vibrant" />
            <span className="font-hand text-2xl text-vibrant">Technomantra 2k26</span>
            <div className="h-[2px] w-12 bg-vibrant" />
          </div>
          <h1 className="neon-text-vibrant font-display text-7xl leading-none tracking-tighter text-highlight md:text-9xl">
            MEET OUR <span className="text-accent">TEAM</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg font-sans text-sm uppercase tracking-[0.3em] text-muted md:text-base">
            Tech-Spiritual Innovation for the Community
          </p>
        </motion.div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={member.name}>
              <TeamCard member={member} index={index} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
