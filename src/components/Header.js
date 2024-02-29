// src/components/Header.js
import React from 'react';
import { WavyBackground } from './ui/WavyBackground'; // Adjust the import path as necessary

const Header = () => {
  return (
    <WavyBackground className="text-white" containerClassName="max-w-full mx-auto">
      <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
      <p className="mt-2">Discover the world through my eyes.</p>
    </WavyBackground>
  );
};

export default Header;
