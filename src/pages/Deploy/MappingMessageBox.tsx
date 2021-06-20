import React from 'react'
import DetailedMessagebox from 'components/MessageBox/DetailedMessageBox'
import { Box } from '@material-ui/core'
import TextButton from 'components/Button/TextButton'
import InfoCard from 'components/deploy/InfoCard'
import Chain from 'models/chain'

interface Props {
  action: () => void
  chains: Chain[]
  data: {
    'Token contract address': string
    'Mappable contract address': string
    'Mainchain ID': string
  }
}

export default function MappingMessageBox(props: Props) {
  const { data, action, chains } = props

  return (
    <DetailedMessagebox
      type={'success'}
      header={'Success!'}
      message={`You have successfully deployed the crosschain mapping contracts on ${chains
        .map((chain) => chain.symbol)
        .join(', ')}`}
      actionText={'Go to Next Step'}
      action={action}
    >
      <Box display={'grid'} gridGap={16} width="100%">
        <InfoCard data={data} header="Mainchain Info" />
        {chains.map((chain) => (
          <InfoCard
            key={chain.symbol}
            header={chain.symbol}
            logo={chain.logo}
            data={{
              'Token contract address': 'XXXXXXXXXXXXXXXXXXXXXX',
              'Chain ID': 'XXX',
            }}
            copyable
          />
        ))}
      </Box>
      <Box margin="16px 0">
        <TextButton fontSize={16} primary>
          Export information
        </TextButton>
      </Box>
    </DetailedMessagebox>
  )
}
