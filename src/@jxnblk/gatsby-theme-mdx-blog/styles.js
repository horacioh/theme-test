import styles from '@jxnblk/gatsby-theme-mdx-blog/src/styles.js'

export default {
  // merge default styles
  ...styles,
  // override the <h1> styles
  h1: {
    fontSize: 64,
    color: 'tomato',
  },
}
