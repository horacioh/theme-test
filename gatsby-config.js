/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  __experimentalThemes: [
    {
      resolve: '@jxnblk/gatsby-theme-mdx-blog',
      options: {
        name: 'writing',
        path: 'src/content',
        pageSize: 16,
      }
    }
  ]
}
