import { motion } from 'motion/react';
import { MessageCircle, Menu } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background: Dark, elegant interior */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920"
          alt="Dark Restaurant Interior"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        {/* Spotlight Effect */}
        <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-transparent via-black/40 to-black/90" />
      </div>

      {/* The Table Scene */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[40vh] z-10">
        <motion.div
          animate={{ 
            y: [0, -2, 0],
            rotate: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative w-full h-full"
        >
          {/* Tablecloth with subtle movement */}
          <motion.div 
            animate={{
              scaleY: [1, 1.01, 1],
              skewX: [0, 0.2, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-full h-full bg-white/90 backdrop-blur-sm rounded-t-[100px] shadow-[0_-20px_50px_rgba(255,255,255,0.1)]"
            style={{
              clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)'
            }}
          />
          
          {/* Table Shadow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-20 bg-black/60 blur-3xl rounded-full" />
        </motion.div>
      </div>

      {/* Text Overlay (Centered on Table) */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-gold uppercase tracking-[0.4em] text-xs md:text-sm font-medium"
            >
              Welcome to
            </motion.p>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-white leading-none tracking-tight">
              SHEHWAR <br className="md:hidden" /> BROAST
            </h1>
            
            <div className="h-px w-24 bg-gold/50 mx-auto my-6" />
            
            <p className="text-gray-300 text-sm md:text-lg tracking-[0.2em] font-light uppercase">
              Premium Taste • Crispy Broast • Jubilee Town Lahore
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8"
          >
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-transparent border border-gold/50 text-gold font-medium tracking-widest uppercase text-xs hover:bg-gold hover:text-black transition-all duration-500 overflow-hidden w-full md:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Order on WhatsApp
              </span>
            </a>
            
            <button
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium tracking-widest uppercase text-xs hover:bg-white/10 transition-all duration-500 w-full md:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                <Menu className="w-4 h-4" />
                View Menu
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
}
