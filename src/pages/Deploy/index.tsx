import React, { useState, ChangeEvent } from 'react'
import AppBody from '../AppBody'
import Entry from './Entry'
import AddToken from './AddToken'
import Mapping from './Mapping'
import useModal from '../../hooks/useModal'
import DeployMessageBox from '../../components/deploy/DeployMessageBox'

const dummyData = {
  tokenInfo: {
    'Token name': 'ETH',
    'Token symby': 'XXXXX',
    'Token decimals': 'XXXXX',
    'Total supply': 'XXXXX',
  },
  mainchainInfo: {
    'Token contract address': 'XXXXXXXXXXXXXXX',
    'Mappable contract address': 'XXXXXXXXXXXXXXX',
    'Mainchain ID': 'XXX',
  },
}

enum DEPLOY_STATE {
  ENTRY = 'entry',
  ADD = 'add',
  MAPPING = 'mapping',
}

export type DeployStatusType = {
  confirmed: boolean
  deploying: boolean
  deployed: boolean
}

export default function Deploy() {
  const [state, setState] = useState(DEPLOY_STATE.ENTRY)
  const [address, setAddress] = useState('')
  const [chainId, setChainId] = useState('')
  const [deployStatus, setDeployStatus] = useState<DeployStatusType>({
    confirmed: false,
    deploying: false,
    deployed: false,
  })
  const { showModal, hideModal } = useModal()

  function onChangeAddress(e: ChangeEvent<HTMLInputElement>) {
    setAddress(e.target.value)
  }

  function onChangeChainId(e: ChangeEvent<HTMLInputElement>) {
    setChainId(e.target.value)
  }

  function toggleConfirm() {
    setDeployStatus({
      confirmed: !deployStatus.confirmed,
      deploying: false,
      deployed: false,
    })
  }

  function onDeploy() {
    setDeployStatus({
      confirmed: true,
      deploying: true,
      deployed: false,
    })
    setTimeout(() => {
      setDeployStatus({
        deploying: false,
        confirmed: true,
        deployed: true,
      })
      showModal(<DeployMessageBox data={dummyData.mainchainInfo} action={toMapping} />)
    }, 1500)
  }

  function toMapping() {
    setState(DEPLOY_STATE.MAPPING)
    hideModal()
  }

  return (
    <AppBody width={552}>
      {state === DEPLOY_STATE.ENTRY ? (
        <Entry onClickExistingToken={() => setState(DEPLOY_STATE.ADD)} onClickNewToken={() => {}} />
      ) : state === DEPLOY_STATE.ADD ? (
        <AddToken
          address={address}
          onChangeAddress={onChangeAddress}
          chainId={chainId}
          onChangeChainId={onChangeChainId}
          toggleConfirm={toggleConfirm}
          onDeploy={onDeploy}
          status={deployStatus}
          data={dummyData.tokenInfo}
        />
      ) : state === DEPLOY_STATE.MAPPING ? (
        <Mapping />
      ) : null}
    </AppBody>
  )
}
