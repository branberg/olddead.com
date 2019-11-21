import React from 'react';
import Head from 'next/head';
import "../scss/main.scss";

const HeadContents = (props) => (
  <Head>
    <title>{props.title}</title>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,900&display=swap" rel="stylesheet" />
    <link rel="stylesheer" href="/" />
  </Head>
);

export default HeadContents;
