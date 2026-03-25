import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, MapPin, Mail, UtensilsCrossed } from 'lucide-react';
import { CONTACT_INFO, OPENING_HOURS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
        {/* Brand */}
        <div className="space-y-8">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gold p-2 rounded-sm">
              <UtensilsCrossed className="text-black w-5 h-5" />
            </div>
            <span className="text-xl font-display text-white tracking-[0.2em] uppercase">
              Shehwar Broast
            </span>
          </Link>
          <p className="text-sm leading-relaxed font-light">
            Taste the best broast in Jubilee Town. Fresh, crispy, and full of flavor. Your satisfaction is our priority.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gold transition-colors duration-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gold transition-colors duration-300">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-display uppercase tracking-[0.2em] text-xs mb-8">Quick Links</h4>
          <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em]">
            <li><Link to="/" className="hover:text-gold transition-colors duration-300">Home</Link></li>
            <li><Link to="/menu" className="hover:text-gold transition-colors duration-300">Our Menu</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors duration-300">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors duration-300">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-display uppercase tracking-[0.2em] text-xs mb-8">Contact Us</h4>
          <ul className="space-y-6 text-xs font-light">
            <li className="flex items-start gap-4">
              <MapPin className="w-4 h-4 text-gold shrink-0" />
              <span className="leading-relaxed">{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="text-white font-display uppercase tracking-[0.2em] text-xs mb-8">Opening Hours</h4>
          <ul className="space-y-4 text-xs font-light">
            {OPENING_HOURS.map((item) => (
              <li key={item.day} className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-500">{item.day}</span>
                <span className="text-white">{item.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 text-center text-[10px] uppercase tracking-[0.3em] text-gray-600">
        <p>&copy; {new Date().getFullYear()} Shehwar Broast. Crafted for Excellence.</p>
      </div>
    </footer>
  );
}
