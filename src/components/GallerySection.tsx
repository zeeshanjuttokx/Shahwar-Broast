import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../constants';
import { Maximize2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function GallerySection() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none z-0 tracking-tighter">
        GALLERY
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">
                Visual Journey
              </span>
              <div className="h-px w-12 bg-primary/30" />
            </div>
            <h2 className="text-5xl md:text-7xl font-light text-white mb-10 leading-tight tracking-tight">
              BEYOND THE <br />
              <span className="italic serif">FLAVOR</span>
            </h2>
            <p className="text-white/40 text-xl font-light leading-relaxed max-w-xl">
              Explore the visual essence of Shehwar. Every dish is a masterpiece, 
              crafted with precision and served with passion.
            </p>
          </div>
          <Link
            to="/gallery"
            className="group flex items-center gap-4 text-white/80 hover:text-white transition-all text-[10px] uppercase tracking-[0.4em] font-bold border-b border-white/10 pb-2 hover:border-primary"
          >
            View Full Gallery 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {GALLERY_IMAGES.slice(0, 4).map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className={cn(
                "group relative overflow-hidden cursor-pointer rounded-sm shadow-2xl bg-white/5",
                index === 0 ? "md:col-span-8 h-[500px]" : 
                index === 1 ? "md:col-span-4 h-[500px]" :
                index === 2 ? "md:col-span-4 h-[400px]" :
                "md:col-span-8 h-[400px]"
              )}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-12 text-center">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 scale-50 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 className="text-white w-4 h-4" />
                </div>
                <h3 className="text-white text-2xl font-light mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 uppercase tracking-widest">
                  {image.alt}
                </h3>
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  Signature Dish
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
