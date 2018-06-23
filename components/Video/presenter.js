import React from "react"
import { Grid, Row, Col, Media, Image } from "react-bootstrap"

const Video = props => {
  return (
    <>
      <Grid>
        <Row>
          <Col xs={12} md={12} >
            <Image width={500} height={500} src="https://react-bootstrap.github.io/thumbnail.png" rounded />
          </Col>
        </Row>
      </Grid>;
      
    </>
  )
}
export default Video
