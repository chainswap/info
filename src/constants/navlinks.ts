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
    link: '/*',
  },
  {
    name: 'Tokens',
    link: routes.token,
  },
  {
    name: 'Statistics',
    link: '/*',
  },
  {
    name: 'History',
    link: '/*',
  },
  {
    name: 'Explorer',
    link: '/*',
  },
  {
    name: 'Support',
    link: '/*',
  },
]

const AboutNavItems = [
  {
    name: 'Apply for listing',
    link: null,
  },
  {
    name: 'Auditing report',
    link: null,
  },
  {
    name: 'Support',
    link: null,
  },
]

export { NavLinks, InfoNavLinks, AboutNavItems }
