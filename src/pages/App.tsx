import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Swap from './Swap/Swap'
import { styled, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import Header from '../components/Header/Header'
import theme from '../theme/index'
import Demo from './Demo/Demo'

const HeaderWrapper = styled('div')({
  width: '100%',
  justifyContent: 'space-between',
})

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
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <BodyWrapper>
          <Switch>
            <Route exact strict path="/swap" component={Swap} />

            <Route exact strict path="/demo" component={Demo} />
          </Switch>
        </BodyWrapper>
      </ThemeProvider>
    </>
  )
}
