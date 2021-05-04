import React from 'react'
import Button from './components/Button/Button'

function App() {
  return (
    <React.Fragment>
      {/* Primary */}
      <Button text="Connect Wallet"></Button>
      {/* Disabled */}
      <Button text="Connect Wallet" disabled={true}></Button>
    </React.Fragment>
  )
}

export default App
