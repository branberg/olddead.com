import React from 'react';
import App from 'next/app';
import ReactGA from 'react-ga';

class MyApp extends App {
  componentDidMount() {
    ReactGA.initialize('UA-19739952-13');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />
  }
}

export default MyApp;
