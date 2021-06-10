import React, { useState, ChangeEvent } from 'react'
import AppBody from '../AppBody'
import SelectOptions from './SelectOptions'
import ExistingToken from './ExistingToken'
import useModal from '../../hooks/useModal'
import DeployMessageBox from '../../components/deploy/DeployMessageBox'

enum DEPLOY_STATE {
  SELECT_OPTIONS,
  EXISTING_TOKEN,
}

export default function Deploy() {
  const [state, setState] = useState(DEPLOY_STATE.SELECT_OPTIONS)
  const [address, setAddress] = useState('')
  const [chainId, setChainId] = useState('')
  const [{ deploying, deployed }, setDeployState] = useState<{
    deploying: boolean
    deployed: boolean
  }>({
    deploying: false,
    deployed: false,
  })
  const { showModal } = useModal()

  function onChangeAddress(e: ChangeEvent<HTMLInputElement>) {
    setAddress(e.target.value)
  }

  function onChangeChainId(e: ChangeEvent<HTMLInputElement>) {
    setChainId(e.target.value)
  }

  function onDeploy() {
    setDeployState({
      deploying: true,
      deployed: false,
    })
    setTimeout(() => {
      setDeployState({
        deploying: false,
        deployed: true,
      })
      showModal(<DeployMessageBox type={'success'} message={'Success!'} />)
    }, 1500)
  }

  return (
    <AppBody width={552}>
      {state === DEPLOY_STATE.SELECT_OPTIONS ? (
        <SelectOptions onClickExistingToken={() => setState(DEPLOY_STATE.EXISTING_TOKEN)} onClickNewToken={() => {}} />
      ) : state === DEPLOY_STATE.EXISTING_TOKEN ? (
        <ExistingToken
          address={address}
          onChangeAddress={onChangeAddress}
          chainId={chainId}
          onChangeChainId={onChangeChainId}
          onDeploy={onDeploy}
          deploying={deploying}
        />
      ) : null}
    </AppBody>
  )
}
