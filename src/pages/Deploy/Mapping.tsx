import React from 'react'
import DeployBody from './DeployBody'
import InfoCard from '../../components/deploy/InfoCard'
import ChainSelect from '../../components/ChainSelect/ChainSelect'
import { TYPE } from '../../theme/index'
import { Box } from '@material-ui/core'
import { ChainList } from 'data/dummyData'

interface Props {
  data: {
    'Token contract address': string
    'Mappable contract address': string
    'Mainchain ID': string
  }
}

export default function Mapping(props: Props) {
  const { data } = props

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
        <ChainSelect
          label="Select Chain"
          selectedChain={null}
          placeholder="Select the chain to enable crosschain functionality"
          chainList={ChainList}
          width="100%"
        />
      </Box>
    </DeployBody>
  )
}
