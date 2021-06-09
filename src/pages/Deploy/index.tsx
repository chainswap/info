import React, { useState } from 'react'
import AppBody from '../AppBody'
import Landing from './Landing'
import ExistingToken from './ExistingToken'

enum Mode {
  LANDING,
  EXISTING_TOKEN,
}

export default function Deploy() {
  const [mode, setMode] = useState(Mode.LANDING)

  return (
    <AppBody width={552}>
      {mode === Mode.LANDING ? (
        <Landing onClickExistingToken={() => setMode(Mode.EXISTING_TOKEN)} onClickNewToken={() => {}} />
      ) : mode === Mode.EXISTING_TOKEN ? (
        <ExistingToken />
      ) : null}
    </AppBody>
  )
}
