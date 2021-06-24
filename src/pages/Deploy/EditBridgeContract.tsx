import React, { useState, useMemo, useCallback } from 'react'
import { Box } from '@material-ui/core'
import Chain from 'models/chain'
import DeployBody from './DeployBody'
import MainChainInfoForm from './MainChainInfoForm'
import Divider from 'components/Divider/Divider'
import ChainInfoForm from './ChainInfoForm'
import ErrorAndActionButton from 'components/Button/ErrorAndActionButton'
import DeployMessage from './DeployMessage'
import useModal from 'hooks/useModal'

interface Props {
  chains: Chain[]
  data: {
    'Token contract address': string
    'Mappable contract address': string
    'Mainchain ID': string
  }
  edit?: boolean
  onStep: (step: number) => void
}

enum DeployError {
  MainchainInfo = 'Fill the Mainchain Info',
  ChainInfo = 'Fill the chain Info',
}

export default function EditBridgeContract(props: Props) {
  const { onStep } = props
  const [mainTokenAddress, setMainTokenAddress] = useState('')
  const [mainMappableAddress, setMainMappableAddress] = useState('')
  const [mainChainId, setMainChainId] = useState('')
  const [chain, setChain] = useState<Chain | null>(null)
  const [tokenAddress, setTokenAddress] = useState('')
  const [mappableAddress, setMappableAddress] = useState('')
  const { showModal } = useModal()

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
      return DeployError.MainchainInfo
    }
    if (!chain || !tokenAddress || !mappableAddress) {
      return DeployError.ChainInfo
    }
  }, [mainTokenAddress, mainMappableAddress, mainChainId, chain, tokenAddress, mappableAddress])

  const onDeploy = useCallback(() => {
    showModal(<DeployMessage />)
  }, [showModal])

  return (
    <DeployBody header="Bridge Factory Contract" activeStep={2} onStep={onStep}>
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
      <ErrorAndActionButton error={error} onAction={onDeploy} actionText={'Deploy'} />
    </DeployBody>
  )
}
