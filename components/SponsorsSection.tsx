
import React from 'react';
import { motion } from 'framer-motion';

const SponsorsSection: React.FC = () => {
  const sponsors = [
    { name: 'ims', logo: '/ims.png' },
    { name: 'Expert Education', logo: '/expert academy.png' },
    { name: 'Credila', logo: '/credila.gif' }
  ];

  return (
    <section id="sponsors" className="py-24 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-4 rounded-full">Partnerships</div>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">Our Power <span className="text-accent">Sponsors</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 items-center justify-items-center transition-all duration-500">
          {sponsors.map((sponsor, idx) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer hover:opacity-100 transition-opacity"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="h-8 md:h-12 w-auto object-contain" 
              />
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-20 py-10 border-t border-white/5 text-center">
          <p className="text-muted text-[10px] uppercase tracking-[0.4em] font-bold mb-6">Want to collaborate with us?</p>
          <button className="text-accent hover:text-white border border-accent/30 px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-[10px] transition-all hover:bg-accent">
            Become a Sponsor
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default SponsorsSection;
