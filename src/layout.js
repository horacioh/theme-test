import React from "react"
import {
  ComponentProvider,
  Root,
  Container,
  Header
} from "@jxnblk/gatsby-theme-mdx-blog"

export default ({ children }) => (
  <ComponentProvider>
    <Root>
      <Header />
      <Container>{children}</Container>
    </Root>
  </ComponentProvider>
)
