// components/Hero.tsx
import React from 'react';
import Image from "next/legacy/image";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/cyclist.jpg" // Path to your image in the public directory
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
      
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-purple-600">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Sam Fitness App</h1>
        <p className="text-lg md:text-xl mb-8">Your go-to place for fitness.</p>
      </div>
    </div>
  );
};

export default Hero;

