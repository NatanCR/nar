
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const carouselImages = [
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    "/lovable-uploads/ce229bd5-89fb-4a04-825d-ef7b1a6c31a7.png",
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const servicePages = [
    {
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      title: "Consulting",
      path: "/consulting",
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Development",
      path: "/development",
    },
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      title: "Design",
      path: "/design",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/lovable-uploads/b797e226-db18-4ed9-b075-beaedc3c9934.png")',
            backgroundSize: '120%', // Slightly zoomed in
            backgroundPosition: 'center',
            transition: 'background-size 0.3s ease-out',
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-display font-bold mb-8"
            style={{
              background: 'linear-gradient(135deg, #DBF9E0 0%, #A5C34F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Innovation Studio
          </motion.h1>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white text-primary px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-white/90 transition-colors"
          >
            Get in touch
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Image with Text Overlay */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
            alt="Featured"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
              Transform Your Vision
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              We bring innovative solutions to life through cutting-edge technology
              and design thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div
            ref={carouselRef}
            className="relative h-[60vh] overflow-hidden rounded-2xl"
          >
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  activeSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors z-10"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors z-10"
              aria-label="Next slide"
            >
              <ArrowRight className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </section>

      {/* Service Pages Navigation */}
      <section id="services" className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePages.map((service, index) => (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group cursor-pointer"
                onClick={() => navigate(service.path)}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-2xl font-display text-white">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-secondary">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a forward-thinking digital studio dedicated to creating
              exceptional experiences through innovative design and technology. Our
              team of experts combines creativity with technical excellence to
              deliver solutions that exceed expectations and drive real business
              value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center gap-12">
              <h2 className="text-3xl font-display font-bold">Innovation Studio</h2>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:contact@innovationstudio.com"
                  className="flex items-center gap-2 hover:text-white/80 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  contact@innovationstudio.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 hover:text-white/80 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +1 (234) 567-890
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  123 Innovation Street, Tech City
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
