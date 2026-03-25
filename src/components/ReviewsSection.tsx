import { motion } from 'motion/react';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">
                Testimonials
              </span>
              <div className="h-px w-12 bg-primary/30" />
            </div>
            <h2 className="text-5xl md:text-7xl font-light text-white mb-10 leading-tight tracking-tight">
              VOICES OF OUR <br />
              <span className="italic serif">COMMUNITY</span>
            </h2>
            <p className="text-white/40 text-xl font-light leading-relaxed max-w-xl">
              We take immense pride in the relationships we've built through our food. 
              Here's what our regular patrons have to say about their Shehwar experience.
            </p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {REVIEWS.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 1 }}
                className="bg-white/5 backdrop-blur-xl p-10 rounded-sm border border-white/10 relative group hover:bg-white/10 transition-all duration-500"
              >
                <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12 group-hover:scale-110 transition-transform" />
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < review.rating ? 'text-primary fill-primary' : 'text-white/10'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-white/60 text-lg leading-relaxed mb-10 font-light italic serif">
                  "{review.comment}"
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center font-light text-white text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-light text-white text-lg tracking-wide uppercase">{review.name}</h4>
                    <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
