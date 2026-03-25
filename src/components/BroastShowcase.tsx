import { motion } from 'motion/react';
import { MENU_ITEMS } from '../constants';
import { formatPrice } from '../lib/utils';

const broastItems = [
  MENU_ITEMS.find(item => item.id === 'b1'),
  MENU_ITEMS.find(item => item.id === 'b4'),
  MENU_ITEMS.find(item => item.id === 'ff1'),
].filter(Boolean);

export default function BroastShowcase() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.3em] text-sm font-medium"
          >
            The Main Attraction
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-display text-white mt-4"
          >
            Juicy, Crispy, Perfection
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {broastItems.map((item, index) => (
            <motion.div
              key={item!.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={item!.image}
                  alt={item!.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <p className="text-gold font-display text-2xl mb-2">{formatPrice(item!.price)}</p>
                  <h3 className="text-white text-xl font-bold mb-2">{item!.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{item!.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
