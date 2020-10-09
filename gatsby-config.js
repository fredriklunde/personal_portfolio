module.exports = {
  siteMetadata: {
    description: "Fredrik Lunde Portfolio",
    locale: "en",
    title: "Fredrik Lunde",

  },
    plugins: [
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          basePath: "https://flpersonalportfolio.netlify.app/",
          showThemeLogo: true,
          theme: "classic",
        },
      },
    ],
  }