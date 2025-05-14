
import React from "react";

interface GradientOverlayProps {
  imageOne: string;
  imageTwo: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
}

const GradientOverlay: React.FC<GradientOverlayProps> = ({
  imageOne,
  imageTwo,
  overlayOpacity = 0.5,
  children,
}) => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        {/* First image */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `url(${imageOne})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 1,
          }}
        />
        
        {/* Second image with gradient mask */}
        <div 
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: `url(${imageTwo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to right, transparent, black)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black)',
          }}
        />
        
        {/* Dark overlay */}
        <div 
          className="absolute inset-0 bg-black z-30" 
          style={{ opacity: overlayOpacity }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-40 h-full flex items-center justify-center px-4">
        {children}
      </div>
    </div>
  );
};

export default GradientOverlay;
