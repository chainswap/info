import React, { ChangeEvent } from 'react'
import DeployBody from './DeployBody'
import InfoCard from '../../components/deploy/InfoCard'
import ChainMultiSelect from '../../components/ChainSelect/ChainMultiSelect'
import { Box } from '@material-ui/core'
import Chain from '../../models/chain'
import ChainSelect from 'components/ChainSelect/ChainSelect'
import OutlineButton from 'components/Button/OutlineButton'

interface Props {
  chainList: Chain[]
  selectedChains: Chain[]
  onChainSelect: (e: ChangeEvent<{ value: string[] }>) => void
  data: {
    'Token contract address': string
    'Mappable contract address': string
    'Mainchain ID': string
  }
}

export default function Mapping(props: Props) {
  const { data, onChainSelect, chainList, selectedChains } = props

  return (
    <DeployBody
      header={'Mapping token contract deployment'}
      activeStep={1}
      loading={false}
      onClick={() => {}}
      btnText="Next Step"
      loadingText=""
      btnDisabled={false}
    >
      <InfoCard data={data} />
      <Box padding={'24px 32px'} width={'100%'}>
        <ChainMultiSelect
          label="Select Chain"
          selectedChains={selectedChains}
          chainList={chainList}
          width="100%"
          onChainSelect={onChainSelect}
        />
        {selectedChains.map((chain, i) => (
          <Box display="flex" alignItems="flex-end" justifyContent="space-between" marginTop="24px">
            <ChainSelect
              label={`Chain ${i + 1}`}
              chainList={chainList}
              selectedChain={chain}
              disabled
              width={'292px'}
            />
            <OutlineButton width={'180px'} primary>
              Deploy on {chain.symbol}
            </OutlineButton>
          </Box>
        ))}
      </Box>
    </DeployBody>
  )
}
