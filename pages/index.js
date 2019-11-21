import React from 'react';
import ReactGA from 'react-ga';
import Page from '../src/components/page';

const APP_STORE_URL = 'https://apps.apple.com/us/app/olddead/id1488060890';

const handleClick = (event, url) => {
  event.preventDefault();

  ReactGA.event({
    category: 'CTA',
    action: 'Clicked Apple App Store Button',
  });

  window.open(url, '_blank');
}

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
      href={APP_STORE_URL}
      className="homepage__app-store-link"
      onClick={(e) => handleClick(e, APP_STORE_URL)}
    >
      <img
        src="/images/app-store-01.svg"
        alt="Download on the App Store"
      />
    </a>
  </Page>
);

export default Home;
