import React, { Component } from "react"
import Explan from "./presenter"
import BootStrap from "../common/Bootstrap"

class Container extends Component {
  render() {
    return [
      <Explan />,
      <BootStrap/>
    ]
  }
}

export default Container
