
import React, { useState } from 'react';
import Header from './components/Header';
import FeedView from './components/FeedView';
import MasteringView from './components/MasteringView';
import Footer from './components/Footer';

type View = 'feed' | 'mastering' | 'studio';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('feed');

  const renderView = () => {
    switch (currentView) {
      case 'feed':
        return <FeedView />;
      case 'mastering':
        return <MasteringView />;
      case 'studio':
        return (
          <div className="text-center p-20 text-off-white font-inter">
            <h2 className="text-3xl font-orbitron text-primary-purple mb-4">Studio</h2>
            <p>The 16-track DAW is currently under development. Stay tuned!</p>
          </div>
        );
      default:
        return <FeedView />;
    }
  };

  return (
    <div className="min-h-screen bg-background-black text-off-white flex flex-col">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
