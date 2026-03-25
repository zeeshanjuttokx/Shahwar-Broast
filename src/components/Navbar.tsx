import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6',
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-gold p-2 rounded-sm group-hover:rotate-12 transition-transform duration-500">
            <UtensilsCrossed className="text-black w-5 h-5" />
          </div>
          <span className="text-xl md:text-2xl font-display text-white tracking-[0.2em] uppercase">
            Shehwar Broast
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-300 hover:text-gold',
                location.pathname === link.path
                  ? 'text-gold'
                  : 'text-white/70'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/menu"
            className="border border-gold/50 text-gold px-6 py-2 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gold hover:text-black transition-all duration-500"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-50 md:hidden flex flex-col items-center justify-center gap-8"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white"
            >
              <X className="w-8 h-8" />
            </button>
            
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-2xl font-display tracking-[0.3em] uppercase transition-colors',
                  location.pathname === link.path ? 'text-gold' : 'text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/menu"
              onClick={() => setIsOpen(false)}
              className="mt-8 border border-gold/50 text-gold px-12 py-4 text-xs uppercase tracking-[0.3em] font-bold"
            >
              Order Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
