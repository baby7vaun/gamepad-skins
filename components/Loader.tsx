
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-12" aria-label="Loading...">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-primary-purple/30 rounded-full"></div>
        <div className="absolute inset-0 border-t-4 border-accent-blue rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-purple-blue-gradient rounded-full animate-glow"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
