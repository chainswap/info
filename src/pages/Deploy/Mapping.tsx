import React, { ChangeEvent } from 'react'
import DeployBody from './DeployBody'
import InfoCard from '../../components/deploy/InfoCard'
import ChainMultiSelect from '../../components/ChainSelect/ChainMultiSelect'
import { Box } from '@material-ui/core'
import Chain from '../../models/chain'

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
      </Box>
    </DeployBody>
  )
}
