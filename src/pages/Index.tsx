import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const carouselImages = [
    "/lovable-uploads/34945213-1026-4f62-b795-e0fe86f57755.png", // Wooden structure with plants
    "/lovable-uploads/1507d66d-2e52-439e-b287-8729ce3d6eca.png", // Close-up of green leaves
    "/lovable-uploads/17fd6f62-5819-4531-a3d8-cfef3b3af4a1.png", // ORIGEO green wall
    "/lovable-uploads/d021ed75-2273-479a-81d5-787d1bb8676c.png", // Wooden beams with hanging plants
    "/lovable-uploads/e1c112db-cb4f-4dea-ac76-f3bbb0931146.png", // Rooftop garden with plants
    "/lovable-uploads/bd0abbd4-0b55-47c0-8a93-bde85911aef7.png", // Casa Andorinha sign with plants
    "/lovable-uploads/eb3f14a5-4f07-48a6-9473-503b3fe79f15.png", // Green wall with neon lights
    "/lovable-uploads/05463b03-b09e-403d-a571-8f94c0f1ad36.png", // Hanging plants in wooden structure
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
      image: "/lovable-uploads/80a9d6d7-daa5-4804-9bd6-e1d4104763d1.png", // painel-lateral
      title: "Paredes verdes naturais",
      path: "/consulting",
    },
    {
      image: "/lovable-uploads/49cb830c-9f58-42e4-9117-60fe6b10c78c.png", // jardim-suspenso-lateral
      title: "Jardins pendentes",
      path: "/development",
    },
    {
      image: "/lovable-uploads/180969fb-5ceb-4ec8-88f8-0a7330943847.png", // vaso-pequeno
      title: "Vasos e arranjos",
      path: "/design",
    },
  ];

  const handleEmailContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "mailto:naridealize@gmail.com?subject=Contact%20Inquiry";
  };

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
            className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight"
            style={{
              background: 'linear-gradient(135deg, #DBF9E0 0%, #A5C34F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Soluções paisagísticas ideais
            <br /> pra você, para seu evento
            <br /> e ambientes corporativos.
          </motion.h1>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white text-brand-dark px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-white/90 transition-colors"
            onClick={handleEmailContact}
          >
            Entre em contato
            <Mail className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Image with Text Overlay */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/d021ed75-2273-479a-81d5-787d1bb8676c.png"
            alt="Landscaping Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
              Transforme Sua Visão
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              NAR Idealize oferece soluções paisagísticas, decoração e projetos
              de qualidade para transformar ambientes internos ou externos.
              Nos esforçamos para criar um cenário com naturalidade para você.
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
      <section id="services" className="py-24 bg-brand-green-light">
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
                <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
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
      <section className="py-24 bg-brand-green">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white">
              Sobre nós
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              NAR Idealize, é uma empresa de paisagismo dedicada a criar ambientes 
              naturais e modernos para eventos e empresas. Nossa missão é envolver 
              as pessoas em cenários autênticos e significativos, valorizando a 
              conexão com a natureza. Com nossa paixão pelo meio ambiente, buscamos 
              inspirar a inserção da natureza em todos os espaços e momentos, 
              transformando sonhos em realidade através de projetos excepcionais. 
              Trabalhamos com criatividade, agilidade e competência para tornar 
              a sua ideia em realidade, nos comprometemos com o seu projeto buscando 
              a melhor solução paisagística pra você. Nossa constante motivação está 
              em sintonia com nossos clientes, parceiros e colaboradores, a qual agradecemos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-brand-dark text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center gap-12">
              <div className="w-20">
                <img 
                  src="/lovable-uploads/3e362d4b-2de1-41ae-ae34-4d3684527ca5.png" 
                  alt="NAR Idealize Logo" 
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:naridealize@gmail.com"
                  className="flex items-center gap-2 hover:text-white/80 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  naridealize@gmail.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 hover:text-white/80 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (11) 95275-0824
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
