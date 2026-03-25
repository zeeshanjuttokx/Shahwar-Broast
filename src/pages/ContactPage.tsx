import ContactSection from '../components/ContactSection';
import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="bg-gray-900 py-24 px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Contact <span className="text-primary">Us</span>
        </motion.h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Have a question or feedback? We'd love to hear from you. Reach out to us via phone, email, or visit our restaurant.
        </p>
      </div>
      <ContactSection />
      
      {/* Google Maps Integration */}
      <section className="h-[500px] w-full bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.785461947833!2d74.2253333!3d31.4475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919017688888889%3A0x8888888888888888!2s627%20A%2C%20Block%20A%20Jubilee%20Town%20Housing%20Scheme%2C%20Lahore%2C%2054780!5e0!3m2!1sen!2spk!4v1711391108000!5m2!1sen!2spk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
