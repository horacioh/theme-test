import React from "react"
import {
  ComponentProvider,
  Root,
  Container,
} from "@jxnblk/gatsby-theme-mdx-blog"
import Header from './@jxnblk/gatsby-theme-mdx-blog/header'

export default ({ children }) => (
  <ComponentProvider>
    <Root>
      <Header />
      <Container>{children}</Container>
    </Root>
  </ComponentProvider>
)
