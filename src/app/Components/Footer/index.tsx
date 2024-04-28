// Footer.tsx
import React from 'react';
import Link from 'next/link';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
 
      <main className="container">
      
        <p className="footer__copyright">&copy; {new Date().getFullYear()} Sam Fitness App</p>
   
    </main>
  );
};

export default Footer;
