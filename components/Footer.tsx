
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card-black/30 border-t border-primary-purple/10 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-light-gray">
        <p className="font-orbitron text-lg">Ego<span className="text-primary-purple">Lab</span></p>
        <p className="text-sm font-inter mt-1">&copy; {new Date().getFullYear()} EgoLab. All Rights Reserved. Craft Your Sonic Identity.</p>
      </div>
    </footer>
  );
};

export default Footer;
