/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Pierre Phil's Gatsby starter",
    titleTemplate: "%s · Gatsby starter",
    description: "This is a default description",
    url: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/dog.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@pete_aly",
  },
  flags: {
    // https://www.gatsbyjs.com/docs/reference/release-notes/v2.28/#feature-flags-in-gatsby-configjs
    FAST_DEV: true,
    QUERY_ON_DEMAND: true,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
