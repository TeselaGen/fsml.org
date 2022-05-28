const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://fsml.org',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '/assets/logo-dark.svg',
    logoLink: '/',
    title: "<a href='/'>FSML.org</a>",
    githubUrl: 'https://github.com/TeselaGen/fsml.org',
    helpUrl: '',
    tweetText: '',
    // social: `<li>
    //     <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
    //       <div class="twitterBtn">
    //         <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
    //       </div>
    //     </a>
    //   </li>
    // 	<li>
    //     <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
    //       <div class="discordBtn">
    //         <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
    //       </div>
    //     </a>
    //   </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: ['/index', '/background', '/model', '/examples'],
    collapsedNav: ['/background', '/model', '/examples'],
    links: [
      { text: 'TeselaGen', link: 'https://teselagen.com' },
      { text: 'BioMADE', link: 'https://www.biomade.org/' },
    ],
    frontline: false,
    // ignoreIndex: true,
    // title:
    //   "<a href='https://fsml.org/'>graphql </a><div class='greenCircle'></div><a href='https://hasura.io/learn/graphql/react/introduction/'>react</a>",
  },
  siteMetadata: {
    title: 'FSML | TeselaGen',
    description:
      'Fermentation Systems Modeling Language built by TeselaGen in collaboration with BioMADE',
    ogImage: null,
    docsLocation: 'https://github.com/TeselaGen/fsml.org/tree/master/content',
    favicon: '/assets/favicon.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'FSML Website',
      short_name: 'FSML',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
