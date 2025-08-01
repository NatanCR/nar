
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Development = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    "https://images.unsplash.com/photo-1605379399843-5870eea9b74e",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container py-24">
        <Link
          to="/#services"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </Link>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
          Jardins pendentes
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          Jardins pendentes com plantas vivas que valorizam o ambiente com leveza e sofisticação.
          Cada espécie é escolhida de forma estratégica para combinar com o espaço e o evento.
          Indicados para projetos temporários ou duradouros, com possibilidade de manutenção especial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Development;
