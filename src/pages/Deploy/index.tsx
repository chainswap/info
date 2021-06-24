import React, { useState, ChangeEvent, useCallback } from 'react'
import AppBody from '../AppBody'
import DeployOptions from './DeployOptions'
import AddToken from './AddToken'
import MappingContract from './MappingContract'
import BridgeContract from './BridgeContract'
import EditBridgeContract from './EditBridgeContract'
import useModal from 'hooks/useModal'
import Chain from 'models/chain'
import { ChainList, DeployData } from 'data/dummyData'

export enum DEPLOY_MODE {
  EXISTING = 'Existing',
  NEW = 'New',
}

export enum DEPLOY_STEP {
  ADD_TOKEN,
  MAPPING_CONTRACT,
  BRIDGE_CONTRACT,
}

type DeployStatus = {
  deploying?: boolean
  deployed?: boolean
}

export type ChainState = Chain & DeployStatus

export default function Deploy() {
  const [mode, setMode] = useState<DEPLOY_MODE>()
  const [step, setStep] = useState(DEPLOY_STEP.ADD_TOKEN)
  const [selectedChains, setSelectedChains] = useState<ChainState[]>([])
  const { hideModal } = useModal()

  const toMapping = useCallback(() => {
    setStep(DEPLOY_STEP.ADD_TOKEN)
    hideModal()
  }, [setStep, hideModal])
  const toEditMapping = useCallback(() => {
    setMode(DEPLOY_MODE.NEW)
    setStep(DEPLOY_STEP.ADD_TOKEN)
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
    setStep(DEPLOY_STEP.BRIDGE_CONTRACT)
  }, [hideModal])
  const toEditBridge = useCallback(() => {
    setMode(DEPLOY_MODE.EXISTING)
    setStep(DEPLOY_STEP.BRIDGE_CONTRACT)
  }, [])

  const onStep = useCallback((step: DEPLOY_STEP) => setStep(step), [])

  if (!mode) {
    return (
      <AppBody>
        <DeployOptions
          onExistingToken={() => setMode(DEPLOY_MODE.EXISTING)}
          onNewToken={() => setMode(DEPLOY_MODE.NEW)}
        />
      </AppBody>
    )
  }

  return (
    <AppBody>
      {step === DEPLOY_STEP.ADD_TOKEN && <AddToken mode={mode} onNext={() => {}} onStep={onStep} />}
      {/* {step === DEPLOY_STEP.MAPPING_CONTRACT && (
        <MappingContract
          chainList={ChainList}
          onChainSelect={onChainSelect}
          selectedChains={selectedChains}
          onNext={toBridge}
          onEdit={toEditMapping}
        />
      )} */}
      {/* {step === DEPLOY_STEP.BRIDGE_CONTRACT && (
        <BridgeContract data={DeployData.mainchainInfo} chains={selectedChains} onEdit={toEditBridge} />
      )} */}
    </AppBody>
  )
}
