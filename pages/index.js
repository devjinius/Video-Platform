import React from "react"
import { Grid, Alert } from "react-bootstrap"
import Header from "../components/Header"

export default () => (
  <>
    <Header />
    <Grid>
      <Alert bsStyle="warning">
        <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
      </Alert>
    </Grid>
  </>
)
