import React from "react"
import Liked from "../components/Liked"
import Subscribe from "../components/Subscribe"
import Video from "../components/Video"
import PageTemplate from "../components/PageTemplate/PageTemplate";

export default () => (
  <>
    <PageTemplate>
      <Liked />
      <Subscribe />
      <Video />
    </PageTemplate>
  </>
)
