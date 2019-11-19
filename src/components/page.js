import React from 'react';
import HeadContents from './headContents';
import Footer from './footer';

const Page = (props) => (
  <>
    <HeadContents title={props.title} />
    <div className="page">
      <div className="page__body">
        {props.children}
      </div>
      <div className="page__footer">
        <Footer />
      </div>
    </div>
  </>
);

export default Page;
