import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Demo from './pages/Demo'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact strict path="/demo" component={Demo} />
      </Switch>
    </BrowserRouter>
  )
}
