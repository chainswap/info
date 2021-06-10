import React, { useState } from 'react'
import AppBody from '../AppBody'
import SelectOptions from './SelectOptions'
import ExistingToken from './ExistingToken'

enum Mode {
  SELECT_OPTIONS,
  EXISTING_TOKEN,
}

export default function Deploy() {
  const [mode, setMode] = useState(Mode.SELECT_OPTIONS)

  return (
    <AppBody width={552}>
      {mode === Mode.SELECT_OPTIONS ? (
        <SelectOptions onClickExistingToken={() => setMode(Mode.EXISTING_TOKEN)} onClickNewToken={() => {}} />
      ) : mode === Mode.EXISTING_TOKEN ? (
        <ExistingToken />
      ) : null}
    </AppBody>
  )
}
