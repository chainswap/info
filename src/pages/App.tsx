import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Swap from './Swap'
import { styled } from '@material-ui/core'
import Header from '../components/Header/Header'

const HeaderWrapper = styled('div')({
  width: '100%',
  justifyContent: 'space-between',
})

const BodyWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  paddingTop: 200,
  alignItems: 'center',
})

export default function App() {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <BodyWrapper>
        <Switch>
          <Route exact strict path="/swap" component={Swap} />
        </Switch>
      </BodyWrapper>
    </>
  )
}
