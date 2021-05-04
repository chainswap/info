import React from 'react'
import Button from './components/Button/Button'

function App() {
  return (
    <React.Fragment>
      {/* Primary */}
      <Button text="primary"></Button>
      {/* Disabled */}
      <Button text="disabled" disabled={true}></Button>
      {/* specified background */}
      <Button text="background color #000000" background="#000000"></Button>
      {/* specified color */}
      <Button text="text color #000000" color="#000000"></Button>
    </React.Fragment>
  )
}

export default App
