import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Send, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function ContactSection() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -mr-80 -mt-80" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] -ml-80 -mb-80" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">
                Get In Touch
              </span>
              <div className="h-px w-12 bg-primary/30" />
            </div>
            <h2 className="text-5xl md:text-7xl font-light text-white mb-12 leading-tight tracking-tight">
              VISIT US OR <br />
              <span className="italic serif">ORDER NOW</span>
            </h2>
            
            <div className="space-y-12 mb-16">
              <div className="flex items-start gap-8 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-light text-white text-lg mb-2 tracking-wide uppercase">Our Location</h4>
                  <p className="text-white/40 text-lg leading-relaxed font-light">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-light text-white text-lg mb-2 tracking-wide uppercase">Contact Numbers</h4>
                  <div className="text-white/40 text-lg leading-relaxed font-light space-y-1">
                    <p>Cell: {CONTACT_INFO.phone}</p>
                    <p>Secondary: {CONTACT_INFO.secondaryCell}</p>
                    <p>Landline: {CONTACT_INFO.landline}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-light text-white text-lg mb-2 tracking-wide uppercase">Email Address</h4>
                  <p className="text-white/40 text-lg leading-relaxed font-light">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-8">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-white/80 hover:text-white transition-all text-[10px] uppercase tracking-[0.4em] font-bold border-b border-white/10 pb-2 hover:border-primary"
              >
                <MessageCircle className="w-4 h-4" /> 
                Order on WhatsApp
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="group flex items-center gap-4 text-white/80 hover:text-white transition-all text-[10px] uppercase tracking-[0.4em] font-bold border-b border-white/10 pb-2 hover:border-primary"
              >
                <Phone className="w-4 h-4" /> 
                Call to Order
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white/5 backdrop-blur-2xl p-12 md:p-16 rounded-sm border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            
            <h3 className="text-3xl font-light text-white mb-12 relative z-10 tracking-tight">Send Us a Message</h3>
            <form className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border-b border-white/10 focus:border-primary px-4 py-4 outline-none transition-all text-white placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border-b border-white/10 focus:border-primary px-4 py-4 outline-none transition-all text-white placeholder:text-white/10"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] ml-1">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-white/5 border-b border-white/10 focus:border-primary px-4 py-4 outline-none transition-all text-white placeholder:text-white/10 resize-none"
                />
              </div>
              <button className="group w-full flex items-center justify-center gap-4 text-white/80 hover:text-white transition-all text-[10px] uppercase tracking-[0.4em] font-bold border border-white/10 py-6 hover:bg-white hover:text-black">
                Send Message 
                <Send className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
