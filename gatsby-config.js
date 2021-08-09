module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Personal Portfolio",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "@chakra-ui/gatsby-plugin",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`, `Dancing Script`, `Style Script`],
        display: "swap",
      },
    },
  ],
};
