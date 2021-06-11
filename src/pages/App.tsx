import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Swap from './Swap'
import Deploy from './Deploy'
import Liquidity from './Liquidity'
import { styled, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import Header from '../components/Header/Header'
import theme from '../theme/index'
import routes from '../constants/routes'
import { ModalProvider } from '../context/ModalContext'

const BodyWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: `calc(100vh - ${theme.height.header} - 50px)`,
  width: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'flex-start',
    padding: 50,
  },
  '@media (max-height:800px)': {
    justifyContent: 'flex-start',
    padding: 50,
  },
}))

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ModalProvider>
          {/* <ModalRoot /> */}
          <Header />
          <BodyWrapper id="body">
            <Switch>
              <Route strict path={routes.swap} exact component={Swap} />
              <Route strict path={routes.deploy} exact component={Deploy} />
              <Route strict path={routes.liquidity} exact component={Liquidity} />
              <Route strict path={routes.farm} exact component={Swap} />
              <Route strict path={routes.info} exact component={Swap} />
            </Switch>
          </BodyWrapper>
        </ModalProvider>
      </ThemeProvider>
    </>
  )
}
