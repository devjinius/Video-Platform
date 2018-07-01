import React, { Component } from "react"
import Subscribe from "./presenter"
import BootStrap from "../common/Bootstrap"

class Container extends Component {
  render() {
    return [
      <Subscribe />,
      <BootStrap />
    ]
  }
}

export default Container
