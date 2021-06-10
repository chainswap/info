import React, { useState } from 'react'
import AppBody from '../AppBody'
import SelectOptions from './SelectOptions'
import ExistingToken from './ExistingToken'

enum DEPLOY_STATE {
  SELECT_OPTIONS,
  EXISTING_TOKEN,
}

export default function Deploy() {
  const [state, setState] = useState(DEPLOY_STATE.SELECT_OPTIONS)

  return (
    <AppBody width={552}>
      {state === DEPLOY_STATE.SELECT_OPTIONS ? (
        <SelectOptions onClickExistingToken={() => setState(DEPLOY_STATE.EXISTING_TOKEN)} onClickNewToken={() => {}} />
      ) : state === DEPLOY_STATE.EXISTING_TOKEN ? (
        <ExistingToken />
      ) : null}
    </AppBody>
  )
}
