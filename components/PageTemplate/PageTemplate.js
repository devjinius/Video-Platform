import React from 'react';
import Header from '../Header/';
import Navigator from '../Navigator';
import Footer from '../Footer';

export default ({ children }) => {
  return (
    <>
      <Header />
      <Navigator />
      {children}
      <Footer />
      <style jsx>
        {' '}
        {`
          body {
            padding-top: 60px;
          }
        `}{' '}
      </style>
    </>
  );
};
