import React from 'react';
import Link from 'next/link';
import HeadContents from '../src/components/headContents';

const Home = () => (
  <>
    <HeadContents title="OldDead" />
    <div className="homepage">
      <div className="homepage__content">
        <div className="homepage__main">
          <h1 className="homepage__logo">
            Old
            <span>Dead</span>
          </h1>
          <p className="homepage__blurb">The stupid game where you (and hopefully some of your friends) guess how old or dead people are. It's simple, fun, and morbid.</p>
          <a
            href="https://apps.apple.com/us/app/olddead/id1488060890"
            target="_blank"
            className="homepage__app-store-link"
          >
            <img src="/images/app-store-01.svg" alt="Download on the App Store" />
          </a>
        </div>

        <footer className="homepage__footer">
          <p>
            Made by <a href="https://branberg.com" target="_blank">nice people in Minnesota</a>
          </p>
          <nav className="homapage__footer__links">
            <Link href="/privacy-policy">
              <a className="footer__link">Privacy Policy</a>
            </Link>
            <Link href="/support">
              <a className="footer__link">Support</a>
            </Link>
          </nav>
        </footer>
      </div>

      <div className="homepage__pattern" />
    </div>
  </>
);

export default Home;
