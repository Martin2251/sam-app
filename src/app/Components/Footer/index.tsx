// Footer.tsx
import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto text-center">
        <ul className="footer__list">
          <li className="footer__item">hi</li>
          <li className="footer__item">hi</li>
        </ul>
        <p className="footer__copyright">&copy; {new Date().getFullYear()} Sam Fitness App</p>
      </div>
    </footer>
  );
};

export default Footer;
