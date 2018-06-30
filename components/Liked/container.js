import React, { Component } from "react"
import Liked from "./presenter"

class Container extends Component {
  render() {
    return [
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
