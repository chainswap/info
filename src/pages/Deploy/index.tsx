import React, { useState, ChangeEvent, useCallback } from 'react'
import AppBody from '../AppBody'
import DeployOptions from './DeployOptions'
import AddToken from './AddToken'
import MappingContract from './MappingContract'
import BridgeContract from './BridgeContract'
import useModal from 'hooks/useModal'
import Chain from 'models/chain'
import { ChainList } from 'data/dummyData'

enum DEPLOY_STATE {
  OPTIONS = 'options',
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
  const [state, setState] = useState(DEPLOY_STATE.OPTIONS)
  const [selectedChains, setSelectedChains] = useState<ChainState[]>([])
  const { hideModal } = useModal()

  const toMapping = useCallback(() => {
    setState(DEPLOY_STATE.MAPPING)
    hideModal()
  }, [setState, hideModal])

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
        <DeployOptions onClickExistingToken={() => setState(DEPLOY_STATE.ADD)} onClickNewToken={() => {}} />
      )}
      {state === DEPLOY_STATE.ADD && <AddToken onNext={toMapping} />}
      {state === DEPLOY_STATE.MAPPING && (
        <MappingContract
          chainList={ChainList}
          onChainSelect={onChainSelect}
          selectedChains={selectedChains}
          onNext={toBridge}
        />
      )}
      {state === DEPLOY_STATE.BRIDGE && <BridgeContract />}
    </AppBody>
  )
}
