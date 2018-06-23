import React from "react"
import { Button } from "react-bootstrap"
import Lottie from "react-lottie"

const Subscribe = props => {
  return (
    <React.Fragment className="well">
      <Button bsStyle="primary" bsSize="large" block>
        구독하기
      </Button>
      <Lottie
        options={this.props.defaultOptions}
        height={400}
        width={400}
        isStopped={this.props.isStopped}
        isPaused={this.props.isPaused}
      />
    </React.Fragment>
  )
}
export default Subscribe
