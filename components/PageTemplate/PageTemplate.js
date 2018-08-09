import React from 'react';
<<<<<<< HEAD
import Header from 'components/Header';
import Navigator from 'components/Navigator';
import Footer from "components/Footer";
=======
import Header from '../Header/';
import Navigator from '../Navigator';
import Footer from '../Footer';
>>>>>>> bab6bdcd482d94a2bb85b458a2f122ef96a032f9

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
