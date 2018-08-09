import React from 'react';
<<<<<<< HEAD
import { Grid } from 'react-bootstrap';
import Liked from 'components/Liked';
import Video from 'components/Video';
import Navigator from 'components/Navigator';
import Footer from "components/Footer";
import Head from 'next/head'
import Bootstrap from 'common/Bootstrap'

export default () => (
  <>
    {/* <Head>
      <Bootstrap/>
    </Head> */}

    <Navigator />
    <Liked />
    <Grid>
      <Video />
    </Grid>
    <Footer />
=======
import { Grid, Alert } from 'react-bootstrap';
import Liked from 'components/Liked';
import Video from 'components/Video';
import PageTemplate from 'components/PageTemplate/PageTemplate';


export default () => (
  <>
    <PageTemplate>
      <Liked />
      <Video />
    </PageTemplate>
>>>>>>> bab6bdcd482d94a2bb85b458a2f122ef96a032f9
  </>
);
