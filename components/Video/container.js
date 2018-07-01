import React, { Component } from "react"
import Video from "./presenter"
import BootStrap from "../common/Bootstrap"

class Container extends Component {
  render() {
    return [
      <Video />,
      <BootStrap />
    ]
  }
}

export default Container
