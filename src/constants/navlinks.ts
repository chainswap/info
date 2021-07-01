import routes from './routes'

const NavLinks = [
  {
    name: 'Swap',
    link: routes.swap,
  },
  {
    name: 'Deploy',
    link: routes.deploy,
  },
  {
    name: 'Liquidity',
    link: routes.liquidity,
  },
  {
    name: 'Farm',
    link: routes.farm,
  },
  {
    name: 'Info',
    link: routes.info,
  },
]

const InfoNavLinks = [
  {
    name: 'Apply for listing',
    link: routes.apply,
  },
  {
    name: 'Tokens',
    link: routes.token,
  },
  {
    name: 'Statistics',
    link: routes.statistics,
  },
  {
    name: 'History',
    link: routes.history,
  },
  {
    name: 'Explorer',
    link: routes.explorer,
  },
  {
    name: 'Support',
    link: routes.support,
  },
]

const AboutNavItems = [
  {
    name: 'Apply for listing',
    link: null,
    externalLink: 'https://docs.chainswap.com/',
  },
  {
    name: 'Auditing report',
    link: null,
    externalLink: 'https://docs.chainswap.com/',
  },
  {
    name: 'Support',
    link: routes.support,
    externalLink: null,
  },
]

export { NavLinks, InfoNavLinks, AboutNavItems }
