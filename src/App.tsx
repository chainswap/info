import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Demo from './pages/Demo'
import Swap from './pages/Swap'
import { styled } from '@material-ui/core'

const BodyWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  paddingTop: 200,
  alignItems: 'center',
})

export default function App() {
  return (
    <BodyWrapper>
      <BrowserRouter>
        <Switch>
          <Route exact strict path="/demo" component={Demo} />
          <Route exact strict path="/swap" component={Swap} />
        </Switch>
      </BrowserRouter>
    </BodyWrapper>
  )
}
