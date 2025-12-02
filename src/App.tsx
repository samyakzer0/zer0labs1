import React from 'react';
import { Scene } from './components/SpaceScene/Scene';
import { Navbar } from '../components/Navbar';
import './types';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <Navbar />
      <Scene />
    </div>
  );
};

export default App;