import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Swap from './Swap'
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
          <Route exact strict path="/swap" component={Swap} />
        </Switch>
      </BrowserRouter>
    </BodyWrapper>
  )
}
