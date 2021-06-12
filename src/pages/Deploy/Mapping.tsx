import React from 'react'
import DeployBody from './DeployBody'
import InfoCard from '../../components/deploy/InfoCard'

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
      activeStep={0}
      loading={false}
      onClick={() => {}}
      btnText={'Next Step'}
      loadingText={''}
      btnDisabled={false}
    >
      <InfoCard data={data} />
    </DeployBody>
  )
}
