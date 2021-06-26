import React, { useState, ChangeEvent, useCallback } from 'react'
import { Box, styled } from '@material-ui/core'
import AppBody from '../AppBody'
import AddToken from './AddToken'
import MappingContract from './MappingContract'
import BridgeContract from './BridgeContract'
import Chain from 'models/chain'
import { ChainList } from 'data/dummyData'
import { TYPE } from 'theme/index'

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

const OptionCard = styled('div')({
  width: '100%',
  padding: '16px 20px',
  backgroundColor: '#211735',
  borderRadius: 10,
  cursor: 'pointer',
})

export default function Deploy() {
  const [mode, setMode] = useState<DEPLOY_MODE>()
  const [step, setStep] = useState(DEPLOY_STEP.ADD_TOKEN)
  const [selectedChains, setSelectedChains] = useState<ChainState[]>([])

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

  const onStep = useCallback((step: DEPLOY_STEP) => setStep(step), [])
  const onMode = useCallback((mode: DEPLOY_MODE) => setMode(mode), [])

  if (!mode) {
    return (
      <AppBody>
        <Box padding={'20px 40px 35px'}>
          <TYPE.mediumHeader marginBottom="32px">Please select the following options for deployment</TYPE.mediumHeader>
          <Box display="grid" gridGap="16px">
            {[
              {
                title: 'Existing Token',
                brief: 'You already deployed a token on Ethereum or EMV supportive chains',
                onClick: () => setMode(DEPLOY_MODE.EXISTING),
              },
              {
                title: 'New Token',
                brief: "You haven't deployed any token contract yet",
                onClick: () => setMode(DEPLOY_MODE.NEW),
              },
            ].map(({ title, brief, onClick }) => (
              <OptionCard key={title} onClick={onClick}>
                <TYPE.primary marginBottom="6px">{title}</TYPE.primary>
                <TYPE.medium>{brief}</TYPE.medium>
              </OptionCard>
            ))}
          </Box>
        </Box>
      </AppBody>
    )
  }

  return (
    <AppBody>
      {step === DEPLOY_STEP.ADD_TOKEN && <AddToken mode={mode} onStep={onStep} />}
      {step === DEPLOY_STEP.MAPPING_CONTRACT && (
        <MappingContract
          mode={mode}
          onStep={onStep}
          onMode={onMode}
          onChainSelect={onChainSelect}
          selectedChains={selectedChains}
        />
      )}
      {step === DEPLOY_STEP.BRIDGE_CONTRACT && (
        <BridgeContract mode={mode} onMode={onMode} onStep={onStep} chains={selectedChains} />
      )}
    </AppBody>
  )
}
