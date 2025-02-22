
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Development = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
          Development Services
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Our development team creates robust, scalable applications using
          cutting-edge technologies and best practices in software engineering.
        </p>
      </div>
    </div>
  );
};

export default Development;
