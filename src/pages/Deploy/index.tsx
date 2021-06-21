import React, { useState, ChangeEvent, useCallback } from 'react'
import AppBody from '../AppBody'
import DeployOptions from './DeployOptions'
import AddExistingToken from './AddExistingToken'
import MappingContract from './MappingContract'
import BridgeContract from './BridgeContract'
import AddNewToken from './AddNewToken'
import useModal from 'hooks/useModal'
import Chain from 'models/chain'
import { ChainList, DeployData } from 'data/dummyData'

enum DEPLOY_STATE {
  OPTIONS = 'options',
  ADD_EXISTING = 'add existing',
  ADD_NEW = 'add new',
  MAPPING = 'mapping',
  BRIDGE = 'bridge',
  EDIT_MAPPING = 'edit mapping',
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
  const [state, setState] = useState(DEPLOY_STATE.OPTIONS)
  const [selectedChains, setSelectedChains] = useState<ChainState[]>([])
  const { hideModal } = useModal()

  const toMapping = useCallback(() => {
    setState(DEPLOY_STATE.MAPPING)
    hideModal()
  }, [setState, hideModal])
  const toEditMapping = useCallback(() => {
    setState(DEPLOY_STATE.EDIT_MAPPING)
    hideModal()
  }, [hideModal])

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
  }, [hideModal])

  return (
    <AppBody>
      {state === DEPLOY_STATE.OPTIONS && (
        <DeployOptions
          onClickExistingToken={() => setState(DEPLOY_STATE.ADD_EXISTING)}
          onClickNewToken={() => setState(DEPLOY_STATE.ADD_NEW)}
        />
      )}
      {state === DEPLOY_STATE.ADD_EXISTING && <AddExistingToken onNext={toMapping} />}
      {state === DEPLOY_STATE.MAPPING && (
        <MappingContract
          chainList={ChainList}
          onChainSelect={onChainSelect}
          selectedChains={selectedChains}
          onNext={toBridge}
        />
      )}
      {state === DEPLOY_STATE.BRIDGE && <BridgeContract data={DeployData.mainchainInfo} chains={selectedChains} />}
      {state === DEPLOY_STATE.ADD_NEW && <AddNewToken onNext={toEditMapping} />}
      {state === DEPLOY_STATE.EDIT_MAPPING && (
        <MappingContract
          chainList={ChainList}
          onChainSelect={onChainSelect}
          selectedChains={selectedChains}
          onNext={toBridge}
          edit
        />
      )}
    </AppBody>
  )
}
