import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Swap from './Swap/Swap'
import { styled, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import Header from '../components/Header/Header'
import theme from '../theme/index'
import Demo from './Demo/Demo'
import routes from '../constants/routes'

const BodyWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100vh - 88px)',
})

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <BodyWrapper>
          <Switch>
            <Route strict path={routes.swap} exact component={Swap} />
            <Route strict path={routes.deploy} exact component={Swap} />
            <Route strict path={routes.liquidity} exact component={Swap} />
            <Route strict path={routes.farm} exact component={Swap} />
            <Route strict path={routes.info} exact component={Swap} />
          </Switch>
        </BodyWrapper>
      </ThemeProvider>
    </>
  )
}
