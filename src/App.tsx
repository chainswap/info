import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Demo from './pages/Demo'
import Swap from './pages/Swap'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact strict path="/demo" component={Demo} />
        <Route exact strict path="/swap" component={Swap} />
      </Switch>
    </BrowserRouter>
  )
}
