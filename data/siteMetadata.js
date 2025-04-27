const siteMetadata = {
  title: "Anshul's Blog",
  author: 'Anshul Yadav',
  fullName: 'Anshul Yadav',
  headerTitle: "Anshul's Blog",
  description: 'A Software Engineer currently focused on Web Development, with additional interests in Machine Learning, Mobile Development, and Problem Solving.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://anshulydv-portfolio.vercel.app',
  analyticsURL: 'https://analytics.anshul.dev/share/stats/anshul.dev',
  siteRepo: 'https://github.com/Anshu10101',
  siteLogo: '/static/images/avatar.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/projects/blog-banner.png',
  email: 'anshul.yadv22@gmail.com',
  github: 'https://github.com/Anshu10101',
  facebook: '',
  linkedin: 'https://www.linkedin.com/in/anshul-yadav-a10b31136/',
  twitter: 'https://twitter.com/Anshul__Yadav_',
  youtube: '',
  locale: 'en-US',
  stickyNav: false,
  socialAccounts: {
    github: 'anshulydv',
    linkedin: 'anshulydv',
    twitter: 'Anshul__Yadav_'
  },
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.UMAMI_WEBSITE_ID,
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
      inputPosition: 'bottom',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
};

module.exports = siteMetadata;
