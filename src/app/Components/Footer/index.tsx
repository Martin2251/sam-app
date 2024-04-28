// Footer.tsx
import React from 'react';
import Link from 'next/link';
import './Footer.scss';
import { Row } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
 
      <main className="container">
        <Row>
          <div className="content">
            <ul className="footerNav">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy</li>
            </ul>
            <ul className='socialLink'>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
          <p className="footer__copyright">&copy; {new Date().getFullYear()} Sam Fitness App</p>
        </Row>
      

   
    </main>
  );
};

export default Footer;
