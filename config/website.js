const meta = {
  // Metadata
  siteTitle: 'Sasank Reddy - Creative Web Designer',
  siteDescription:
    'Sasank - Creative frontEnd web developer who loves javascript and modern web technologies.',
  siteTitleAlt: 'Sasank Reddy',
  siteShortName: 'Sasank Reddy',
  siteUrl: 'https://sasankreddy.tk', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@cyberbyte9',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'sasank',
  googleAnalyticsID: 'UA-119972196-1',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
