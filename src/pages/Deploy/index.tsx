import React, { useState, ChangeEvent, useCallback } from 'react'
import AppBody from '../AppBody'
import DeployOptions from './DeployOptions'
import AddExistingToken from './AddExistingToken'
import MappingContract from './MappingContract'
import BridgeContract from './BridgeContract'
import AddNewToken from './AddNewToken'
import EditBridgeContract from './EditBridgeContract'
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
  EDIT_BRIDGE = 'edit bridging',
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
  const [step, setStep] = useState(0)

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

  // const onAddExistingStep = useCallback((step: number) => {
  //   setStep(step)
  //   const index: { [k: number]: DEPLOY_STATE } = {
  //     0: DEPLOY_STATE.ADD_EXISTING,
  //     1: DEPLOY_STATE.MAPPING,
  //     2: DEPLOY_STATE.BRIDGE,
  //   }
  //   setState(index[step])
  // }, [])

  const onAddNewStep = useCallback((step: number) => {
    setStep(step)
    const index: { [k: number]: DEPLOY_STATE } = {
      0: DEPLOY_STATE.ADD_NEW,
      1: DEPLOY_STATE.EDIT_MAPPING,
      2: DEPLOY_STATE.EDIT_BRIDGE,
    }
    setState(index[step])
  }, [])

  return (
    <AppBody>
      {state === DEPLOY_STATE.OPTIONS && (
        <DeployOptions
          onClickExistingToken={() => setState(DEPLOY_STATE.ADD_EXISTING)}
          onClickNewToken={() => setState(DEPLOY_STATE.ADD_NEW)}
        />
      )}
      {/* Add Existing */}
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

      {/* Add New */}
      {state === DEPLOY_STATE.ADD_NEW && <AddNewToken onNext={toEditMapping} step={step} onStep={onAddNewStep} />}
      {state === DEPLOY_STATE.EDIT_MAPPING && (
        <MappingContract
          chainList={ChainList}
          onChainSelect={onChainSelect}
          selectedChains={selectedChains}
          onNext={toBridge}
          onStep={onAddNewStep}
          edit
        />
      )}
      {state === DEPLOY_STATE.EDIT_BRIDGE && (
        <EditBridgeContract data={DeployData.mainchainInfo} chains={selectedChains} edit />
      )}
    </AppBody>
  )
}
