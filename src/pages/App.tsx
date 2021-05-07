import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Swap from './Swap/Swap'
import { styled, createMuiTheme, Theme, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import Header from '../components/Header/Header'

const theme: Theme = createMuiTheme({
  palette: {
    background: {
      default: '#131315',
    },
  },
})

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
          </Switch>
        </BodyWrapper>
      </ThemeProvider>
    </>
  )
}
