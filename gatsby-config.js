const path = require("path");

module.exports = {
  siteMetadata: {
    title: "California Renter Protections",
    description:
      "Are you a California resident who wants to know whether your rent is protected under rent control or the new Tenant Protections Act? Rent Cap can help you find out!",
    author: "@krpeacock"
  },
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-layout`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Rent Cap",
        short_name: "Rent Cap",
        start_url: "/",
        // background_color: "#663399",
        // theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/rentcap5.svg" // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-sass`
  ]
};
