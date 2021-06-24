import React, { SyntheticEvent, useCallback } from 'react'
import { Box } from '@material-ui/core'
import { Text } from 'rebass'
import ChainSelect from 'components/ChainSelect/ChainSelect'
import Input from 'components/Input/Input'
import { ChainList } from 'data/dummyData'
import Chain from 'models/chain'
import TextButton from 'components/Button/TextButton'
import theme from 'theme'

interface Props {
  chain: Chain | null
  tokenAddress: string
  onTokenAddress: (e: SyntheticEvent) => void
  mappableAddress: string
  onMappableAddress: (e: SyntheticEvent) => void
  onChainSelect: (chain: Chain | null) => void
}

export default function ChainInfoForm(props: Props) {
  const { chain, tokenAddress, onTokenAddress, mappableAddress, onMappableAddress, onChainSelect } = props

  const handleChainSelect = useCallback(
    (e) => {
      const chain = ChainList.find((chain) => chain.symbol === e.target.value) ?? null
      onChainSelect(chain)
    },
    [onChainSelect]
  )

  return (
    <>
      <Text color={theme.textColor.text2} fontSize={16} mb="20px">
        Please fill the Chain Info
      </Text>
      <Box display="grid" gridGap="24px">
        <ChainSelect
          label="Select Chain"
          chainList={ChainList}
          selectedChain={chain}
          onChange={handleChainSelect}
          width="100%"
        />
        <Input
          label="Token Contract Address"
          placeholder="Enter the contract address"
          value={tokenAddress}
          onChange={onTokenAddress}
        />
        <Input
          label="Mappable Contract Address"
          placeholder="Enter the to mappable contract address"
          value={mappableAddress}
          onChange={onMappableAddress}
        />
      </Box>
      <Box padding="24px 0px">
        <TextButton primary>+ Add one more Chain</TextButton>
      </Box>
    </>
  )
}
