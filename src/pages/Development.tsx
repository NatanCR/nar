
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Development = () => {
  const galleryImages = [
    "/lovable-uploads/6a9e52cb-e420-4d73-b606-1c5c2abdca78.png",
    "/lovable-uploads/1bbd895b-91cb-4f5e-8dc7-8f1eddded05b.png",
    "/lovable-uploads/65df92d1-39fe-43a9-9325-59027347a079.png",
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
