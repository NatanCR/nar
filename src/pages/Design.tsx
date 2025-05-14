
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Design = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
    "https://images.unsplash.com/photo-1613979813687-1cad02a99554",
    "https://images.unsplash.com/photo-1572044162444-ad60f128bdea",
    "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec",
    "https://images.unsplash.com/photo-1541462608143-67571c6738dd",
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
