import { motion } from 'motion/react';
import AboutSection from '../components/AboutSection';
import OpeningHoursSection from '../components/OpeningHoursSection';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="bg-gray-900 py-24 px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          About <span className="text-primary">Shehwar Broast</span>
        </motion.h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Learn about our journey, our values, and why we are the favorite choice for broast lovers in Lahore.
        </p>
      </div>
      <AboutSection />
      <OpeningHoursSection />
    </div>
  );
}
