require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
  downloadLocal: true,
}

// gatsby-config.js
const myQuery = `{
  pages: allContentfulComunidad {
    nodes {
      objectID: id
      title
      slug
      categoria
      featuredImg {
        file {
          url
        }
      }
    }
  }
}`;

const myQuery2 = `{
  pages: allContentfulArticulos {
    nodes {
      objectID: id
      slug
      GameBuyPrice
      publisher {
        title
      }
      title
      imagenDestacada {
        file {
          url
        }
      }
      colecciones {
        title
      }
      stock
      GameDuration
      GameAges
      articuloDestacado
      textoPrincipal {
        raw
      }
      GamePlayers
    }
  }
}`;

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.pages.nodes, // optional
    indexName: 'comunidad', // overrides main index name, optional
  },
  {
    query: myQuery2,
    transformer: ({ data }) => data.pages.nodes, // optional
    indexName: 'juegos', // overrides main index name, optional
    
  },
];

const { spaceId, accessToken } = contentfulConfig

// if (!spaceId || !accessToken) {
//   throw new Error(
//     "Contentful spaceId and the access token need to be provided."
//   )
// }

module.exports = {
  siteMetadata: {
    title: `Kallpa Lúdica`,
    titleTemplate: "%s | Kallpa Lúdica",
    author: `@Kallpa Lúdica`,
    description: `Tienda de juegos en la provincia de Salta`,
    url: "https://www.kallpaludica.com.ar",
    image: "https://www.kallpaludica.com.ar/kallpaludica.jpg",
    twitterUsername: `@kallpaludica`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `Inicio`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        // Accepts all options defined by `gatsby-plugin-postcss` plugin.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/bghome`, // wherever background images are stored
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kallpa Lúdica`,
        short_name: `Kallpa Lúdica`,
        start_url: `/`,
        background_color: `#510952`,
        theme_color: `#510952`,
        display: `standalone`,
        icon: `src/images/kallpa-ludica.png`, // This path is relative to the root of the site.
      },
    },
    {
      // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
        // Tip: use Search API key with GATSBY_ prefix to access the service from within components
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
        settings: {
          // optional, any index settings
          // Note: by supplying settings, you will overwrite all existing settings on the index
        },
        enablePartialUpdates: true, // default: false
        matchFields: ['slug', 'modified', 'colecciones', 'GameBuyPrice'], // Array<String> default: ['modified']
        concurrentQueries: false, // default: true
        skipIndexing: false, // default: false, useful for e.g. preview deploys or local development
        continueOnFailure: false // default: false, don't fail the build if algolia indexing fails
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
