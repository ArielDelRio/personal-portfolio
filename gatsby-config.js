module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Personal Portfolio",
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if `false`, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`, `Dancing Script`, `Style Script`],
        display: "swap",
      },
    },
  ],
};
