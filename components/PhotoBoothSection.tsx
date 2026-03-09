import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ExternalLink, Sparkles } from 'lucide-react';

const PhotoBoothSection: React.FC = () => {
  return (
    <section id="photobooth" className="relative overflow-hidden bg-[#07030f] py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-10 right-[10%] h-56 w-56 rounded-full bg-vibrant/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1300px] items-center gap-16 px-6 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-vibrant/20 bg-vibrant/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.35em] text-vibrant">
            <Camera size={16} />
            Photo Booth
          </div>

          <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-white md:text-7xl">
            Share Your
            <span className="block text-vibrant">Technomantra</span>
            Memories
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-2xl">
            Share your Technomantra memories with us, capture the best moments from the fest, and get featured on the Zoology Hall memory wall.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://technomantra.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-vibrant px-8 py-4 font-display text-sm uppercase tracking-[0.28em] text-black transition-transform hover:scale-[1.02]"
            >
              Open Photo Booth
              <ExternalLink size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4 font-sans text-sm uppercase tracking-[0.22em] text-white/70">
              <Sparkles size={16} className="text-accent" />
              Feature-worthy memories
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative lg:col-span-5"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-accent/10 to-vibrant/10 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/20 px-4 py-2 font-display text-[10px] uppercase tracking-[0.35em] text-vibrant">
              Live Capture
            </div>

            <div className="polaroid mx-auto mt-10 max-w-sm rotate-[-4deg]">
              <div className="tape" />
              <img
                src="/footer_tm.png"
                alt="Technomantra memory booth preview"
                className="mb-6 h-80 w-full rounded-sm object-cover"
              />
              <p className="text-center font-hand text-3xl text-black">
                Snap it. Share it. See it on the wall.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5">
                <p className="font-display text-4xl text-vibrant">01</p>
                <p className="mt-2 text-xs uppercase tracking-[0.28em] text-white/60">Capture your fest moment</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5">
                <p className="font-display text-4xl text-accent">02</p>
                <p className="mt-2 text-xs uppercase tracking-[0.28em] text-white/60">Get featured at Zoology Hall</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoBoothSection;
