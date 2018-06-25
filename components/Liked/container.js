import React, { Component } from "react"
import Liked from "./presenter"
import * as animationDataA from "./TwitterHeart.json"
import Lottie from "lottie-web"

class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isStopped: true,
      isPaused: false,
      speed: 1,
      direction: 1,
      isLike: false
    }
  }
  render() {
    const centerStyle = {
      display: "block",
      margin: "10px auto",
      textAlign: "center"
    }
    const { isStopped, isPaused, direction, speed, isLike } = this.state
    const defaultOptions = { animationData: animationDataA, loop: false, autoplay: false }

    const clickHandler = () => {
      if (!isStopped) {
        this.setState({ direction: direction * -1 })
      }
      this.setState({ isStopped: false, isLike: !isLike })
    }
    return [
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={isStopped}
        isPaused={isPaused}
        speed={speed}
        direction={direction}
      />,
      <Liked />,
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossOrigin="anonymous"
      />
    ]
  }
}

export default Container
