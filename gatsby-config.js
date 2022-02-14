require("dotenv-safe").config({
  allowEmptyValues: process.env.NODE_ENV !== "production",
  example: "./.env.example",
});

const siteMetadata = {
  // Note: [WMAS-7]
  siteUrl: "https://mbti-ko.ca.karrotmarket.com",
  siteName: "성격으로 알아보는 당신의 씀씀이 테스트",
  shortName: "당신의 씀씀이 테스트",
};

module.exports = {
  // See https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/flags.ts
  flags: {
    FAST_DEV: true,
  },
  siteMetadata,
  plugins: [
    process.env.GATSBY_SENTRY_DSN
      ? {
          resolve: "@sentry/gatsby",
          options: {
            tracesSampleRate: 0,
            dsn: process.env.GATSBY_SENTRY_DSN,
            environment: "development",
            sampleRate: 0.7,
          },
        }
      : null,
    "gatsby-plugin-svgr",
    "gatsby-plugin-image",
    "gatsby-plugin-advanced-sitemap",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-M8N8VPG",
        includeDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        routeChangeEventName: "gatsby-route-change",
        enableWebVitalsTracking: true,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-emotion`,
    "gatsby-plugin-react-helmet-async",
    "gatsby-plugin-next-seo",
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src",
        aliases: {
          "@src": "./",
        },
      },
    },
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: "src/__generated__/gatsby-types.d.ts",
        emitSchema: {
          "src/__generated__/gatsby-introspection.json": true,
          "src/__generated__/gatsby-schema.graphql": true,
        },
        emitPluginDocuments: {
          "src/__generated__/gatsby-plugin-documents.graphql": true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.siteName,
        short_name: siteMetadata.shortName,
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#FF7E36",
        display: "minimal-ui",
        icon: "src/assets/favicon.svg",
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "mbti",
        shouldDownloadImage: () => true,
        prismicToolbar: process.env.NODE_ENV === "development",
        schemas: {
          mbti_test_question: require("./prismic/mbti_test_question.json"),
          mbti_test_result: require("./prismic/mbti_test_result.json"),
          mbti_intro: require("./prismic/mbti_intro.json"),
        },
      },
    },
  ].filter(Boolean),
};
