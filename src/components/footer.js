import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <footer className="footer">
    <p className="footer__tagline">
      Made by <a href="https://branberg.com" target="_blank">nice people in Minnesota</a>
    </p>
    <nav className="footer__links">
      <Link href="/">
        <a className="footer__link">Home</a>
      </Link>
      <Link href="/privacy-policy">
        <a className="footer__link">Privacy Policy</a>
      </Link>
      <Link href="/support">
        <a className="footer__link">Support</a>
      </Link>
    </nav>
  </footer>
);

export default Footer;
