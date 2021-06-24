import React, { useMemo, useState } from 'react'
import DeployBody from './DeployBody'
import InfoCard from 'components/deploy/InfoCard'
import { Box } from '@material-ui/core'
import Chain from 'models/chain'
import { useCallback } from 'react'
import useModal from 'hooks/useModal'
import DeployMessage from './DeployMessage'
import { DEPLOY_MODE, DEPLOY_STEP } from './index'
import { DeployData } from 'data/dummyData'
import MainChainInfoForm from './MainChainInfoForm'
import ChainInfoForm from './ChainInfoForm'
import Divider from 'components/Divider/Divider'
import ErrorAndActionButton from 'components/Button/ErrorAndActionButton'

interface Props {
  chains: Chain[]
  mode: DEPLOY_MODE
  onMode: (mode: DEPLOY_MODE) => void
  onStep: (step: DEPLOY_STEP) => void
}

enum BRIDGE_ERROR {
  MainchainInfo = 'Fill the Mainchain Info',
  ChainInfo = 'Fill the chain Info',
}

export default function Bridge(props: Props) {
  const { chains, onMode, mode, onStep } = props
  const { showModal } = useModal()

  const [mainTokenAddress, setMainTokenAddress] = useState('')
  const [mainMappableAddress, setMainMappableAddress] = useState('')
  const [mainChainId, setMainChainId] = useState('')
  const [chain, setChain] = useState<Chain | null>(null)
  const [tokenAddress, setTokenAddress] = useState('')
  const [mappableAddress, setMappableAddress] = useState('')

  const onMainTokenAddress = useCallback((e) => {
    setMainTokenAddress(e.target.value)
  }, [])
  const onMainMappableAddress = useCallback((e) => {
    setMainMappableAddress(e.target.value)
  }, [])
  const onMainChainId = useCallback((e) => {
    setMainChainId(e.target.value)
  }, [])
  const onTokenAddress = useCallback((e) => {
    setTokenAddress(e.target.value)
  }, [])
  const onMappableAddress = useCallback((e) => {
    setMappableAddress(e.target.value)
  }, [])
  const onChainSelect = useCallback((chain: Chain | null) => setChain(chain), [])

  const error = useMemo(() => {
    if (!mainTokenAddress || !mainMappableAddress || !mainChainId) {
      return BRIDGE_ERROR.MainchainInfo
    }
    if (!chain || !tokenAddress || !mappableAddress) {
      return BRIDGE_ERROR.ChainInfo
    }
  }, [mainTokenAddress, mainMappableAddress, mainChainId, chain, tokenAddress, mappableAddress])

  const onDeploy = useCallback(() => {
    showModal(<DeployMessage />)
  }, [showModal])

  return (
    <DeployBody
      header="Bridge Factory Contract"
      activeStep={DEPLOY_STEP.BRIDGE_CONTRACT}
      nonLinear={mode === DEPLOY_MODE.NEW}
      onStep={onStep}
    >
      {mode === DEPLOY_MODE.EXISTING && (
        <Box display={'grid'} gridGap={16} width="100%" mb="32px">
          <InfoCard
            data={DeployData.mainchainInfo}
            header="Mainchain Info"
            editable
            onEdit={() => onMode(DEPLOY_MODE.NEW)}
          />
          {chains.map((chain) => (
            <InfoCard
              key={chain.symbol}
              header={chain.symbol}
              logo={chain.logo}
              data={{
                'Token contract address': chain.address,
                'Chain ID': chain.id,
              }}
              copyable
              editable
              onEdit={() => onMode(DEPLOY_MODE.NEW)}
            />
          ))}
        </Box>
      )}

      {mode === DEPLOY_MODE.NEW && (
        <>
          <MainChainInfoForm
            tokenAddress={mainTokenAddress}
            mappableAddress={mainMappableAddress}
            mainChainId={mainChainId}
            onTokenAddress={onMainTokenAddress}
            onMappableAddress={onMainMappableAddress}
            onMainChainId={onMainChainId}
          />
          <Box m="20px" />
          <Divider extension={40} />
          <Box m="20px" />
          <ChainInfoForm
            chain={chain}
            tokenAddress={tokenAddress}
            onTokenAddress={onTokenAddress}
            mappableAddress={mappableAddress}
            onMappableAddress={onMappableAddress}
            onChainSelect={onChainSelect}
          />
        </>
      )}
      <ErrorAndActionButton
        error={mode === DEPLOY_MODE.NEW ? error : undefined}
        onAction={onDeploy}
        actionText={'Deploy'}
      />
    </DeployBody>
  )
}
