import React from 'react';
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
  </>
);
