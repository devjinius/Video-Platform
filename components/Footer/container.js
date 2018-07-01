import React, { Component } from "react"
import Footer from "./presenter"
import BootStrap from "../common/Bootstrap"

class Container extends Component {
  render() {
    return [
      <Footer />,
      <BootStrap />
    ]
  }
}

export default Container
