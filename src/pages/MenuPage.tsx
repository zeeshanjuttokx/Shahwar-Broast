import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../constants';
import { ShoppingCart, Search, Filter } from 'lucide-react';
import { cn, formatPrice } from '../lib/utils';

const categories = ['All', 'Broast', 'Fast Food', 'Grilled Burgers', 'Pizza', 'Main Course', 'Steak', 'Pasta', 'Noodle', 'Tandoor', 'Beverages', 'Desserts', 'Daig Offer'];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 px-6 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-medium mb-4 block"
          >
            Exquisite Selection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display text-white mb-6"
          >
            Our Culinary <span className="text-gold italic">Masterpieces</span>
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            From our signature crispy broast to our juicy zinger burgers, 
            every bite is a journey of flavor crafted with passion.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mb-16">
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-sm font-bold transition-all border text-[10px] uppercase tracking-[0.2em]",
                  activeCategory === cat
                    ? "bg-gold border-gold text-black shadow-lg shadow-gold/20"
                    : "bg-transparent border-white/10 text-gray-400 hover:border-gold/50 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-4 h-4" />
            <input
              type="text"
              placeholder="SEARCH OUR MENU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900 border border-white/10 focus:border-gold px-12 py-4 rounded-sm outline-none transition-all text-white text-xs tracking-widest placeholder:text-gray-600"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-neutral-900/40 rounded-sm overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-700"
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
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-32 border border-dashed border-white/10 rounded-sm">
            <p className="text-gray-500 text-xl font-display tracking-widest">NO DISHES FOUND</p>
          </div>
        )}
      </div>
    </div>
  );
}
