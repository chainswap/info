import React, { useState } from 'react'

import AppBody from '../AppBody'
import Landing from './Landing'

enum Mode {
  LANDING,
}

export default function Deploy() {
  const [mode, setMode] = useState(Mode.LANDING)

  return <AppBody width={552}>{mode === Mode.LANDING ? <Landing /> : null}</AppBody>
}
