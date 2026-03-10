import React from 'react';
import { motion } from 'framer-motion';

const ScheduleSection: React.FC = () => {
  const scheduleData = [
    { game: 'Tech Hunt', time: '7:30 - 8:30 AM', venue: 'Main Block' },
    { game: 'Beg Borrow Steal', time: '8:30 - 9:30 AM', venue: 'KS Hall' },
    { game: 'Cook Without Fire', time: '9:00 - 10:00 AM', venue: 'KS Parking' },
    { game: 'Bug to Brain', time: '9:00 - 10:30 AM', venue: 'KS 107 Lab' },
    { game: 'Rang-e-Tech', time: '10:30 - 12:30 PM', venue: 'KS Ground Floor' },
    { game: 'IT Preneurship', time: '10:30 - 11:00 AM', venue: 'KS 109' },
    { game: 'UI Verse', time: '11:00 - 12:30 PM', venue: '109 Lab' },
    { game: 'Bro Code', time: '11:00 - 12:30 PM', venue: '107 Lab' },
    { game: 'Tech Canvas', time: '11:00 - 12:30 PM', venue: 'KS Ground Floor' },
    { game: 'BGMI - Freefire', time: '12:30 - 2:00 PM', venue: 'Room 103' },
    { game: 'Say It Right', time: '1:00 - 2:00 PM', venue: 'Room 104' },
    { game: 'Pictionary', time: '2:00 - 3:00 PM', venue: 'Room 104' },
    { game: 'SQL Slayer', time: '3:00 - 4:00 PM', venue: 'NRS' },
    { game: 'Reverse Charades', time: '4:00 - 5:00 PM', venue: 'Room 104' },
    { game: 'Tug of War', time: '4:00 - 5:00 PM', venue: 'University Garden' },
    { game: 'Shan-e-Tech', time: '4:00 - 5:00 PM', venue: '107 Lab' },
    { game: 'Tech Echo', time: '4:00 - 5:00 PM', venue: '109 Lab' },
    { game: 'Cricket', time: '4:00 - 6:00 PM', venue: 'KS Parking' },
    { game: 'Reel Making', time: 'All Day', venue: 'Virtual' },
  ];

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-primary relative overflow-hidden py-20 md:py-28">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-vibrant/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase bg-vibrant/20 text-vibrant rounded-full">
            Don't Miss Out
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 font-display text-white">
            Day 1 <span className="text-vibrant">Schedule</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            A packed day of innovation, coding, and fun. Plan your day to catch your favorite events.
          </p>
        </motion.div>

        {/* Mobile View: Card List (Visible < 768px) */}
        <motion.div
          className="md:hidden space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-secondary/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white font-display">{item.game}</h3>
                <span className="px-2 py-1 text-xs font-bold bg-vibrant/20 text-vibrant rounded-md whitespace-nowrap ml-2">
                  {item.time}
                </span>
              </div>
              <div className="flex items-center text-gray-400 text-sm mt-auto">
                <svg className="w-4 h-4 mr-1.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {item.venue || 'TBA'}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop View: Table (Visible >= 768px) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden md:block overflow-hidden rounded-xl border border-white/10"
        >
          <div className="overflow-x-auto">
            <table className="w-full bg-secondary/50 backdrop-blur-sm">
              <thead>
                <tr className="bg-vibrant text-black border-b border-white/5">
                  <th className="px-6 py-4 text-left text-sm font-bold font-display uppercase tracking-wider">
                    Event Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold font-display uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold font-display uppercase tracking-wider">
                    Venue
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {scheduleData.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className="hover:bg-white/5 transition-colors duration-200 group"
                  >
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="text-base font-semibold text-white group-hover:text-vibrant transition-colors">
                        {item.game}
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <span className="px-3 py-1 text-sm font-mono font-medium bg-primary/50 text-gray-200 rounded border border-white/10">
                        {item.time}
                      </span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-gray-300">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-vibrant opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {item.venue || 'TBA'}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;