module.exports = {
  siteMetadata: {
    title: `Tea Ipsum`,
    description: `A quali-tea placeholder text generator.`,
    author: `Katherine Kato`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tea-ipsum`,
        short_name: `teaipsum`,
        start_url: `/`,
        background_color: `#63a45c`,
        theme_color: `#63a45c`,
        display: `minimal-ui`,
        icon: `src/images/tea-ipsum-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
