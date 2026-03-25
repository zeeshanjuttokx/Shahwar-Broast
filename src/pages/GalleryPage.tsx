import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../constants';
import { Maximize2 } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24 px-6 bg-warm-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Our Visual <span className="text-primary">Story</span>
          </motion.h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A glimpse into our kitchen, our food, and the smiles we serve every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-96 rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
                  <Maximize2 className="text-white w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
