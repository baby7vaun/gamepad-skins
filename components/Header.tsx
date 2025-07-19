
import React from 'react';
import { IconMusic, IconSparkles, IconWaveSquare } from './Icons';

interface HeaderProps {
  currentView: 'feed' | 'mastering' | 'studio';
  setCurrentView: (view: 'feed' | 'mastering' | 'studio') => void;
}

const NavItem: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}> = ({ label, isActive, onClick, icon }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 font-inter text-sm font-medium
      ${
        isActive
          ? 'bg-accent-blue/10 text-accent-blue shadow-glow-blue'
          : 'text-light-gray hover:bg-primary-purple/10 hover:text-primary-purple'
      }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView }) => {
  return (
    <header className="bg-card-black/50 backdrop-blur-sm sticky top-0 z-50 border-b border-primary-purple/20">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
           <div className="w-10 h-10 bg-purple-blue-gradient rounded-full flex items-center justify-center">
            <IconMusic className="w-6 h-6 text-white"/>
          </div>
          <h1 className="text-2xl font-orbitron font-bold text-off-white tracking-wider">
            Ego<span className="text-primary-purple">Lab</span>
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <NavItem
            label="Feed"
            icon={<IconWaveSquare className="w-5 h-5" />}
            isActive={currentView === 'feed'}
            onClick={() => setCurrentView('feed')}
          />
          <NavItem
            label="Studio"
            icon={<IconMusic className="w-5 h-5" />}
            isActive={currentView === 'studio'}
            onClick={() => setCurrentView('studio')}
          />
          <NavItem
            label="AI Mastering"
            icon={<IconSparkles className="w-5 h-5" />}
            isActive={currentView === 'mastering'}
            onClick={() => setCurrentView('mastering')}
          />
        </div>
        <div className="flex items-center space-x-4">
            <img src="https://picsum.photos/seed/user-avatar/40/40" alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-primary-purple" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
