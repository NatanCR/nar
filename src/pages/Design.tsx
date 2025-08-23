
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Design = () => {
  const galleryImages = [
    "/lovable-uploads/fba09b87-7bf3-4599-bb56-34b13f9a77d0.png",
    "/lovable-uploads/4b54db37-830f-464d-9607-644172265173.png",
    "/lovable-uploads/acfbbeb6-7beb-4b73-b055-fea6f8e87a31.png",
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
          Vasos e arranjos
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          Trabalhamos com vasos decorativos pequenos, médios e grandes para ambientes internos e externos.
          Cada peça é escolhida para valorizar o espaço com elegância e naturalidade.
          Criamos decorações que equilibram estética, funcionalidade e bem-estar.
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

export default Design;
