import React, { Component } from "react"
import Explan from "./presenter"

class Container extends Component {
  render() {
    return [
      <Explan />,
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
