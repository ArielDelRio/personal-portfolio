module.exports = {
  siteMetadata: {
    title: "Personal Portfolio",
    description: "this is my personal portfolio",
    siteUrl: "https://www.arieldriodev.gatsbyjs.io",
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ArieldRioDev Personal Portfolio`,
        short_name: `ArieldRioDev`,
        start_url: `/`,
        background_color: `#E5E5E5`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    "gatsby-plugin-offline",
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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // // Defaults used for gatsbyImageData and StaticImage
        // defaults: {},
        // // Set to false to allow builds to continue on image errors
        // failOnError: true,
        // // deprecated options and their defaults:
        // base64Width: 20,
        // forceBase64Format: `png`, // valid formats: png,jpg,webp
        // useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        // stripMetadata: true,
        // defaultQuality: 50,
        icon: "src/images/gatsby-icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [`Roboto`, `Dancing Script`, `Style Script`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -40,
      },
    },
  ],
};
