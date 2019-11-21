import React from 'react';
import Page from '../src/components/page';

const Home = () => (
  <Page title="OldDead" homepage>
    <h1 className="homepage__logo">
      Old
      <span>Dead</span>
    </h1>
    <p className="homepage__blurb">
      The stupid game where you (and hopefully some of your friends) guess how old or dead people are.
      It's simple, fun, and morbid.
    </p>
    <a
      href="https://apps.apple.com/us/app/olddead/id1488060890"
      target="_blank"
      className="homepage__app-store-link"
    >
      <img
        src="/images/app-store-01.svg"
        alt="Download on the App Store"
      />
    </a>
  </Page>
);

export default Home;
