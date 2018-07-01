import React, { Component } from "react"
import Liked from "./presenter"
import BootStrap from "../common/Bootstrap"

class Container extends Component {
  render() {
    return [
      <Liked />,
      <BootStrap />
    ]
  }
}

export default Container
