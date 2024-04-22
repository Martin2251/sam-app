// Footer.tsx
import React from 'react';
import Link from 'next/link';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto text-center">
        <ul className="footer__list">
          <li className="footer__item">hi</li>
          <Link href="/contact">
          <li className="footer__item">Contact</li>
          </Link>
        </ul>
        <p className="footer__copyright">&copy; {new Date().getFullYear()} Sam Fitness App</p>
      </div>
    </footer>
  );
};

export default Footer;
