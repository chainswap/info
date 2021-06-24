import React from 'react'
import DeployBody from './DeployBody'
import InfoCard from 'components/deploy/InfoCard'
import { Box } from '@material-ui/core'
import Chain from 'models/chain'
import Button from 'components/Button/Button'
import { useCallback } from 'react'
import useModal from 'hooks/useModal'
import DeployMessage from './DeployMessage'

interface Props {
  chains: Chain[]
  data: {
    'Token contract address': string
    'Mappable contract address': string
    'Mainchain ID': string
  }
  edit?: boolean
  onEdit: () => void
}

export default function Bridge(props: Props) {
  const { chains, data, onEdit } = props
  const { showModal } = useModal()

  const onDeploy = useCallback(() => {
    showModal(<DeployMessage />)
  }, [showModal])

  return (
    <DeployBody header="Bridge Factory Contract" activeStep={2}>
      <Box display={'grid'} gridGap={16} width="100%">
        <InfoCard data={data} header="Mainchain Info" editable onEdit={onEdit} />
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
            onEdit={onEdit}
          />
        ))}
        <Button onClick={onDeploy}>Deploy</Button>
      </Box>
    </DeployBody>
  )
}
