import React from 'react';
import classnames from 'classnames';
import HeadContents from './headContents';
import Footer from './footer';

const Page = (props) => {
  const {
    title,
    children,
    homepage,
  } = props;

  const pageClasses = classnames('page', {
    'page--homepage': homepage,
  });

  return (
    <>
      <HeadContents title={title} />
      <div className={pageClasses}>
        <div className="page__content">
          <div className="page__body">
            {children}
          </div>
          <div className="page__footer">
            <Footer />
          </div>
        </div>
        {homepage &&
          <div className="page__pattern" />
        }
      </div>
    </>
  );
};

export default Page;
