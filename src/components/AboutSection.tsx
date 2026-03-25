import { motion } from 'motion/react';
import { CheckCircle2, Users, Award, Clock } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Happy Customers', value: '10k+' },
  { icon: Award, label: 'Quality Awards', value: '15+' },
  { icon: Clock, label: 'Years Experience', value: '8+' },
];

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 rounded-sm overflow-hidden shadow-2xl border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800"
                alt="Our Kitchen"
                className="w-full h-[600px] object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 z-20 bg-neutral-900 p-8 rounded-sm shadow-2xl border border-gold/20 hidden md:block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gold/10 p-3 rounded-sm">
                  <CheckCircle2 className="text-gold w-6 h-6" />
                </div>
                <div>
                  <p className="font-display text-white text-lg">100% Halal & Fresh</p>
                  <p className="text-gold/60 text-[10px] uppercase tracking-widest">Certified Quality</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                We use only the finest ingredients and strictly follow hygiene protocols.
              </p>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />
          </div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
                Our Story
              </span>
              <h2 className="text-4xl md:text-6xl font-display text-white mb-8 leading-tight">
                Serving the Finest <span className="text-gold italic">Broast</span> Since 2016
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                Shehwar Broast started with a simple mission: to bring the most authentic, 
                crispy, and flavorful broast to the heart of Jubilee Town. Our secret lies 
                in our unique blend of spices and our commitment to using only fresh, 
                never-frozen chicken.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {[
                  'Premium Quality Chicken',
                  'Secret Spice Blend',
                  'Hygienic Environment',
                  'Fast & Friendly Service'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="bg-gold/10 p-1 rounded-full">
                      <CheckCircle2 className="text-gold w-4 h-4" />
                    </div>
                    <span className="font-light text-gray-300 tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-display text-gold mb-1">{stat.value}</p>
                    <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
