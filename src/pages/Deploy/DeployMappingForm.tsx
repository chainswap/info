import React, { SyntheticEvent } from 'react'
import { Box } from '@material-ui/core'
import Input from 'components/Input/Input'
import { Text } from 'rebass'
import theme from 'theme'

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
    <>
      <Text color={theme.textColor.text2} fontSize={16} mb="20px">
        Please fill the Mainchain Info
      </Text>
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
    </>
  )
}
