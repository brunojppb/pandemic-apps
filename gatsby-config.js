module.exports = {
  pathPrefix: "/pandemic-apps",
  siteMetadata: {
    title: `Pandemic Apps`,
    description: `A collection of free apps that can help you with Remote Work`,
    twitterAuthor: `@bpaulino0`,
    author: `Bruno Paulino`,
    siteUrl: `https://bpaulino.com/pandemic-apps`,
    imageUrl: `https://repository-images.githubusercontent.com/247661661/801d7b00-67a2-11ea-9300-59bf001d8dff`,
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
        trackingId: "UA-66025495-5",
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
