

import React from 'react';
import Image from 'next/image';

const VisionComponent: React.FC = () => {
  return (
    <div className="relative h-full">
    <Image 
      src="/images/jump.jpg" // Path to your image in the public directory
      alt="Hero Image"
      layout="fill"
      objectFit="cover"
    
    />
    <div className="absolute inset-0 flex flex-col items-right justify-center text-yellow-600">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">A vision which matters you</h1>
      <p className="text-lg md:text-xl mb-8">you are the best</p>
    </div>
  </div>
  );
};

export default VisionComponent;



