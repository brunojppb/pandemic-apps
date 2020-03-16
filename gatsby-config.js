module.exports = {
  pathPrefix: "/pandemic-apps",
  siteMetadata: {
    title: `Pandemic Apps`,
    description: `A collection of free apps that can help you with Remote Work`,
    author: `@bpaulino0`,
    siteUrl: `https://bpaulino.com/pandemic-apps`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
