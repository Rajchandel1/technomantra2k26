import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-secondary pb-16 pt-32">
      <div className="pointer-events-none absolute left-1/2 top-10 flex -translate-x-1/2 select-none flex-col items-center">
        <span className="mb-[-4vw] font-display text-[12vw] font-bold uppercase tracking-[0.5em] text-accent/5">
          TECHNO
        </span>
        <span className="font-display text-[25vw] font-bold uppercase tracking-normal text-white/[0.02]">
          MANTRA
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="mb-32 grid grid-cols-1 gap-20 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="mb-12 flex items-center gap-6">
              <img className="h-16" src="/buddha.png" alt="" />
              <h4 className="font-display text-4xl font-bold uppercase tracking-normal">
                TEHNO<span>MANTRA</span>
              </h4>
            </div>
            <p className="mb-12 max-w-md font-hand text-3xl leading-relaxed text-muted">
              "Enlightening the path through neon corridors of innovation."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 md:col-span-6">
            <div>
              <h5 className="mb-10 text-[12px] font-bold uppercase tracking-[0.5em] text-white/30">
                Interface
              </h5>
              <ul className="space-y-6 font-display text-2xl uppercase tracking-[0.1em]">
                <li>
                  <a href="#about" className="flex items-center gap-3 transition-all hover:text-vibrant">
                    Origins <ArrowUpRight size={20} className="text-accent" />
                  </a>
                </li>
                <li>
                  <a href="#games" className="flex items-center gap-3 transition-all hover:text-vibrant">
                    Missions <ArrowUpRight size={20} className="text-accent" />
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="flex items-center gap-3 transition-all hover:text-vibrant">
                    Archive <ArrowUpRight size={20} className="text-accent" />
                  </a>
                </li>
                <li>
                  <a href="/albums.html" className="flex items-center gap-3 transition-all hover:text-vibrant">
                    Albums <ArrowUpRight size={20} className="text-accent" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="relative">
              <h5 className="mb-10 text-[12px] font-bold uppercase tracking-[0.5em] text-white/30">
                System
              </h5>
              <ul className="space-y-6 font-display text-2xl uppercase tracking-[0.1em]">
                <li className="flex items-center gap-4">
                  <div className="h-4 w-4 rounded-full bg-vibrant shadow-[0_0_15px_#00f2ff] animate-pulse" />
                  Signal
                </li>
                <li className="text-muted">Stability: High</li>
               
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-16 font-display text-[11px] font-bold uppercase tracking-[0.4em] text-white/20 md:flex-row">
          <p>&copy; 2026 TEHNOMANTRA | TECH-SPIRITUAL COLLECTIVE</p>
          <Link
            to="/tech-team"
            className="group inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-5 py-3 text-highlight transition-all hover:border-vibrant/60 hover:bg-vibrant/10 hover:text-vibrant"
          >
            <span className="text-white text-1xl">Made By</span>
            <span className="neon-text-vibrant text-vibrant text-2xl">Tech Team</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[-10px] left-[5%] h-56 w-56 overflow-hidden opacity-10 grayscale contrast-125">
        <img src="/tm_hero.jpeg" className="character-cutout h-full w-full object-contain" alt="Futuristic Helmet" />
      </div>
    </footer>
  );
};

export default Footer;
