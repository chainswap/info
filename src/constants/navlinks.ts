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

export { NavLinks, AboutNavItems }
