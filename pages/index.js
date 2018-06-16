import React from 'react';
import Link from 'next/link';
import { Grid, Alert } from 'react-bootstrap';
import HeaderComponent from '../components/header/HeaderComponent';

export default () => (
  <div>
    <HeaderComponent />
    <Grid>
      <Alert bsStyle="warning">
        <strong>Holy guacamole!</strong> Best check yo self, you're not looking
        too good.
      </Alert>
    </Grid>
  </div>
);
