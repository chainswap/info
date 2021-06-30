import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Swap from './Swap'
import Deploy from './Deploy'
import Liquidity from './Liquidity'
import Claim from './Claim'
import Info from './Info'
import History from './History'
import TokenList from './TokenList'
import Explorer from './Explorer'
import { styled, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import Header from '../components/Header/Header'
import theme from '../theme/index'
import routes from '../constants/routes'
import { ModalProvider } from '../context/ModalContext'
import { CurrencyProvider } from '../context/CurrencyContext'

const BodyWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 50,
  height: `calc(100vh - ${theme.height.header} - 50px)`,
  width: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
  '@media (max-height:800px)': {
    justifyContent: 'flex-start',
    padding: 50,
  },
  [theme.breakpoints.down('md')]: {
    height: `calc(100vh - ${theme.height.header} - ${theme.height.mobileHeader} - 23px)`,
    justifyContent: 'flex-start',
    padding: 50,
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'flex-start',
    padding: '0 16px',
  },
}))

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CurrencyProvider>
          <ModalProvider>
            <Header />
            <BodyWrapper id="body">
              <Switch>
                <Route strict path={routes.swap} exact component={Swap} />
                <Route strict path={routes.deploy} exact component={Deploy} />
                <Route strict path={routes.liquidity} exact component={Liquidity} />
                <Route strict path={routes.farm} exact component={Swap} />
                <Route strict path={routes.info} exact component={Info} />
                <Route strict path={routes.claim} exact component={Claim} />
                <Route strict path={routes.token} exact component={TokenList} />
                <Route strict path={routes.statistics} exact component={Info} />
                <Route strict path={routes.history} exact component={History} />
                <Route strict path={routes.explorer} exact component={Explorer} />
              </Switch>
            </BodyWrapper>
          </ModalProvider>
        </CurrencyProvider>
      </ThemeProvider>
    </>
  )
}
