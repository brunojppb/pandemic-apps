module.exports = {
  pathPrefix: "/pandemic-apps",
  siteMetadata: {
    title: `Pandemic Apps`,
    description: `A collection of free apps that can help you with Remote Work`,
    twitterAuthor: `@bpaulino0`,
    author: `Bruno Paulino`,
    siteUrl: `https://bpaulino.com/pandemic-apps`,
    imageUrl: `https://repository-images.githubusercontent.com/247661661/9ff67400-678d-11ea-95e5-ca0b054aeba7`,
    domain: `bpaulino.com`,
    keywords: [
      "apps",
      "crisis",
      "coronavirus",
      "pandemic",
      "pandemia",
      "remote",
      "work",
    ],
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
