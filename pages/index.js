import React from 'react';
import { Grid, Alert } from 'react-bootstrap';
import Header from '../components/Header';
import Liked from '../components/Liked';
import Subscribe from '../components/Subscribe';
import Video from '../components/Video';
import Footer from '../components/Footer';

export default () => (
  <>
    <Header />
    <Liked />
    <Grid>
      <Video />
    </Grid>
    <Footer />
  </>
);
