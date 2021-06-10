import React, { useState, ChangeEvent } from 'react'
import AppBody from '../AppBody'
import SelectOptions from './SelectOptions'
import ExistingToken from './ExistingToken'
import useModal from '../../hooks/useModal'
import DeployMessageBox from '../../components/deploy/DeployMessageBox'

const dummyData = {
  tokenInfo: {
    'Token name': 'ETH',
    'Token symby': 'XXXXX',
    'Token decimals': 'XXXXX',
    'Total supply': 'XXXXX',
  },
}

enum DEPLOY_STATE {
  SELECT_OPTIONS,
  EXISTING_TOKEN,
}

export default function Deploy() {
  const [state, setState] = useState(DEPLOY_STATE.SELECT_OPTIONS)
  const [address, setAddress] = useState('')
  const [chainId, setChainId] = useState('')
  const [{ confirmed, deploying, deployed }, setDeployState] = useState<{
    confirmed: boolean
    deploying: boolean
    deployed: boolean
  }>({
    confirmed: false,
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

  function toggleConfirm() {
    setDeployState({
      confirmed: !confirmed,
      deploying: false,
      deployed: false,
    })
  }

  function onDeploy() {
    setDeployState({
      confirmed: true,
      deploying: true,
      deployed: false,
    })
    setTimeout(() => {
      setDeployState({
        deploying: false,
        confirmed: true,
        deployed: true,
      })
      showModal(<DeployMessageBox />)
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
          confirmed={confirmed}
          toggleConfirm={toggleConfirm}
          onDeploy={onDeploy}
          deploying={deploying}
          data={dummyData.tokenInfo}
        />
      ) : null}
    </AppBody>
  )
}
