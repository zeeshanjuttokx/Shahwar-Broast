import { motion } from 'motion/react';
import { MENU_ITEMS } from '../constants';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { formatPrice } from '../lib/utils';

export default function MenuSection() {
  const featuredItems = [
    MENU_ITEMS.find(item => item.id === 'b1'),
    MENU_ITEMS.find(item => item.id === 'ff1'),
    MENU_ITEMS.find(item => item.id === 'mc1'),
  ].filter(Boolean);

  return (
    <section className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              Our Specialties
            </span>
            <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
              Most Popular <span className="text-gold italic">Dishes</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Explore our hand-picked favorites that our customers love. From our signature broast to juicy burgers.
            </p>
          </div>
          <Link
            to="/menu"
            className="flex items-center gap-2 text-gold font-medium tracking-widest uppercase text-xs hover:gap-4 transition-all group border-b border-gold/30 pb-2"
          >
            View Full Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-neutral-900/50 rounded-sm overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-700"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-1 rounded-sm border border-gold/30 font-display text-gold">
                  {formatPrice(item.price)}
                </div>
              </div>
              <div className="p-10">
                <div className="flex items-center gap-3 text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                  <span className="w-6 h-[1px] bg-gold/50" />
                  {item.category}
                </div>
                <h3 className="text-2xl font-display text-white mb-4 group-hover:text-gold transition-colors duration-500">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm mb-10 line-clamp-2 font-light leading-relaxed">
                  {item.description}
                </p>
                <button className="w-full bg-transparent border border-white/10 text-white font-bold py-4 text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-black hover:border-gold transition-all duration-500 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
