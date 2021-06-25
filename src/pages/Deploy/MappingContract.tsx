import React, { ChangeEvent, useCallback, useEffect, useState, useMemo } from 'react'
import DeployBody from './DeployBody'
import InfoCard from 'components/deploy/InfoCard'
import ChainMultiSelect from 'components/ChainSelect/ChainMultiSelect'
import { Box } from '@material-ui/core'
import ChainSelect from 'components/ChainSelect/ChainSelect'
import { ChainState } from './index'
import useModal from 'hooks/useModal'
import MappingMessageBox from './MappingMessageBox'
import ErrorAndActionButton from 'components/Button/ErrorAndActionButton'
import { DeployData } from 'data/dummyData'
import MainChainInfoForm from './MainChainInfoForm'
import Divider from 'components/Divider/Divider'
import { DEPLOY_MODE, DEPLOY_STEP } from './index'
import { ChainList } from 'data/dummyData'

enum MappingError {
  SELECT = 'Select Chain',
  FILL = 'Fill the Mainchain Info',
  DEPLOY = 'Deploy on Chain',
}

interface Props {
  mode: DEPLOY_MODE
  selectedChains: ChainState[]
  onChainSelect: (e: ChangeEvent<{ value: string[] }>) => void
  onStep: (step: DEPLOY_STEP) => void
  onMode: (mode: DEPLOY_MODE) => void
}

export default function MappingContract(props: Props) {
  const { onChainSelect, selectedChains, onStep, mode } = props
  const [chains, setChains] = useState(selectedChains)
  const [tokenAddress, setTokenAddress] = useState('')
  const [mappableAddress, setMappableAddress] = useState('')
  const [mainChainId, setMainChainId] = useState('')
  const { showModal, hideModal } = useModal()

  useEffect(() => {
    setChains(selectedChains)
  }, [selectedChains])

  const onClickDeployBtn = useCallback(
    (targetChain: ChainState) => {
      setChains(chains.map((chain) => (chain.symbol === targetChain.symbol ? { ...chain, deploying: true } : chain)))
      setTimeout(() => {
        setChains(
          chains.map((chain) =>
            chain.symbol === targetChain.symbol ? { ...chain, deploying: false, deployed: true } : chain
          )
        )
      }, 500)
    },
    [chains]
  )
  const onTokenAddress = useCallback((e) => setTokenAddress(e.target.value), [])
  const onMappableAddress = useCallback((e) => setMappableAddress(e.target.value), [])
  const onMainChainId = useCallback((e) => setMainChainId(e.target.value), [])

  const onNext = useCallback(() => {
    onStep(DEPLOY_STEP.BRIDGE_CONTRACT)
    hideModal()
  }, [onStep, hideModal])

  const error = useMemo(() => {
    if (mode === DEPLOY_MODE.NEW && (!tokenAddress || !mappableAddress || !mainChainId)) {
      return MappingError.FILL
    }
    if (chains.length < 2) {
      return MappingError.SELECT
    }
    if (!((chains[0].deployed === true && chains[1].deployed) === true)) {
      return MappingError.DEPLOY
    }
  }, [mode, chains, tokenAddress, mappableAddress, mainChainId])

  return (
    <DeployBody
      header={'Mapping token contract deployment'}
      activeStep={1}
      onStep={onStep}
      nonLinear={mode === DEPLOY_MODE.NEW}
    >
      {mode === DEPLOY_MODE.NEW ? (
        <>
          <MainChainInfoForm
            tokenAddress={tokenAddress}
            mappableAddress={mappableAddress}
            mainChainId={mainChainId}
            onTokenAddress={onTokenAddress}
            onMappableAddress={onMappableAddress}
            onMainChainId={onMainChainId}
          />
          <Box m="20px" />
          <Divider extension={40} />
        </>
      ) : (
        <InfoCard data={DeployData.mainchainInfo} header="Mainchain Info" editable onEdit={() => {}} />
      )}

      <Box padding={'24px 0'}>
        <ChainMultiSelect
          label="Select Chain"
          selectedChains={selectedChains}
          chainList={ChainList}
          width="100%"
          onChainSelect={onChainSelect}
        />
        {chains.map((chain, i) => (
          <Box marginTop={'24px'} key={chain.symbol}>
            <Box display="flex" alignItems="flex-end" justifyContent="space-between" marginBottom={'16px'}>
              <ChainSelect
                label={`Chain ${i + 1}`}
                chainList={ChainList}
                selectedChain={chain}
                disabled
                width={'292px'}
              />
              <ErrorAndActionButton
                height="48px"
                width="176px"
                pending={chain.deploying}
                pendingText="Loading"
                success={chain.deployed}
                onAction={() => onClickDeployBtn(chain)}
                actionText={`Deploy on ${chain.symbol}`}
              />
            </Box>
            {chain.deployed && (
              <InfoCard
                data={{
                  'Token contract address': 'XXXXXXXXXXXXXXXXXXXXXX',
                  'Chain ID': 'XXX',
                }}
              />
            )}
          </Box>
        ))}
      </Box>
      <ErrorAndActionButton
        error={error}
        onAction={() =>
          showModal(<MappingMessageBox chains={chains} data={DeployData.mainchainInfo} action={onNext} />)
        }
        actionText={'Next Step'}
      />
    </DeployBody>
  )
}
