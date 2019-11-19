import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <nav className="footer">
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
);

export default Footer;
