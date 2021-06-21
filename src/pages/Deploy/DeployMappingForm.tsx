import React, { SyntheticEvent } from 'react'
import { Box, styled } from '@material-ui/core'
import Input from 'components/Input/Input'

interface Props {
  tokenAddress: string
  mappableAddress: string
  mainChainId: string
  onTokenAddress: (e: SyntheticEvent) => void
  onMappableAddress: (e: SyntheticEvent) => void
  onMainChainId: (e: SyntheticEvent) => void
}

export default function DeployMappingForm(props: Props) {
  const { tokenAddress, mappableAddress, mainChainId, onTokenAddress, onMappableAddress, onMainChainId } = props
  return (
    <Box display="grid" gridGap="24px">
      <Input
        label="Token Contract Address"
        placeholder="Enter the token contract address"
        value={tokenAddress}
        onChange={onTokenAddress}
      />
      <Input
        label="Mappable Contract Address"
        placeholder="Enter the mappable contract address"
        value={mappableAddress}
        onChange={onMappableAddress}
      />
      <Input
        label="Token Contract Address"
        placeholder="Enter the mainchain ID"
        value={mainChainId}
        onChange={onMainChainId}
      />
    </Box>
  )
}
