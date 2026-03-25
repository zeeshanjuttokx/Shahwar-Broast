import Hero from '../components/Hero';
import BroastShowcase from '../components/BroastShowcase';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import ReviewsSection from '../components/ReviewsSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <BroastShowcase />
      <MenuSection />
      <AboutSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
    </main>
  );
}
