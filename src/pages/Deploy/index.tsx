import React, { useState, ChangeEvent, useCallback, useEffect } from 'react'
import AppBody from '../AppBody'
import Entry from './Entry'
import AddToken from './AddToken'
import Mapping from './Mapping'
import Bridge from './Bridge'
import useModal from '../../hooks/useModal'
import AddTokenMessageBox from './AddTokenMessageBox'
import Chain from '../../models/chain'
import { ChainList } from 'data/dummyData'

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
  BRIDGE = 'bridge',
}

export type DeployStatusType = {
  confirmed: boolean
  deploying: boolean
  deployed: boolean
}

type DeployStatus = {
  deploying?: boolean
  deployed?: boolean
}

export type ChainState = Chain & DeployStatus

export default function Deploy() {
  const [state, setState] = useState(DEPLOY_STATE.ENTRY)
  const [address, setAddress] = useState('')
  const [chainId, setChainId] = useState('')
  const [deployStatus, setDeployStatus] = useState<DeployStatusType>({
    confirmed: false,
    deploying: false,
    deployed: false,
  })
  const [selectedChains, setSelectedChains] = useState<ChainState[]>([])

  const { showModal, hideModal } = useModal()

  const onChangeAddress = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }, [])

  const onChangeChainId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setChainId(e.target.value)
  }, [])

  const toggleConfirm = useCallback(() => {
    setDeployStatus({
      confirmed: !deployStatus.confirmed,
      deploying: false,
      deployed: false,
    })
  }, [deployStatus])

  const toMapping = useCallback(() => {
    setState(DEPLOY_STATE.MAPPING)
    hideModal()
  }, [setState, hideModal])

  const onDeploy = useCallback(() => {
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
      showModal(<AddTokenMessageBox data={dummyData.mainchainInfo} action={toMapping} />)
    }, 500)
  }, [setDeployStatus, showModal, toMapping])

  const onChainSelect = useCallback((e: ChangeEvent<{ value: string[] }>) => {
    const symbols: string[] = e.target.value
    const selectedItems = []

    for (let i = 0; i < symbols.length; i += 1) {
      const chain = ChainList.find((chain) => chain.symbol === symbols[i])
      if (chain) {
        selectedItems.push(chain)
      }
    }
    setSelectedChains(selectedItems)
  }, [])

  const toBridge = useCallback(() => {
    hideModal()
    setState(DEPLOY_STATE.BRIDGE)
  }, [])

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
        <Mapping
          data={dummyData.mainchainInfo}
          chainList={ChainList}
          onChainSelect={onChainSelect}
          selectedChains={selectedChains}
          onNext={toBridge}
        />
      ) : state === DEPLOY_STATE.BRIDGE ? (
        <Bridge />
      ) : null}
    </AppBody>
  )
}
