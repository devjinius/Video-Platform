import React from 'react';
import { Grid } from 'react-bootstrap';
import Liked from 'components/Liked';
import Video from 'components/Video';
import Navigator from 'components/Navigator';
import Footer from "components/Footer";
import Head from 'next/head'
import Bootstrap from 'common/Bootstrap'

export default () => (
  <>
    <Head>
      <Bootstrap/>
    </Head>

    
    <Navigator />
    <Liked />
    <Grid>
      <Video />
    </Grid>
    <Footer />
  </>
);
