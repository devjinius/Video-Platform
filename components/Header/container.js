import React, { Component } from "react"
import Header from "./presenter"
import BootStrap from "../common/Bootstrap"

class Container extends Component {
  render() {
    return [
      <Header />,
      <BootStrap />
    ]
  }
}

export default Container
