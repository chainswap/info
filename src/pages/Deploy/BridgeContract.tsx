import React from 'react'
import DeployBody from './DeployBody'
import InfoCard from 'components/deploy/InfoCard'
import { Box } from '@material-ui/core'
import Chain from 'models/chain'
import Button from 'components/Button/Button'
import { useCallback } from 'react'
import useModal from 'hooks/useModal'
import SimpleMessageBox from 'components/MessageBox/SimpleMessageBox'
import { TYPE } from 'theme/index'
import TextButton from 'components/Button/TextButton'

interface Props {
  chains: Chain[]
  data: {
    'Token contract address': string
    'Mappable contract address': string
    'Mainchain ID': string
  }
}

export default function Bridge(props: Props) {
  const { chains, data } = props
  const { showModal } = useModal()

  const onDeploy = useCallback(() => {
    showModal(
      <SimpleMessageBox type="success" header="Congratulations!">
        <TYPE.body textAlign="center" marginTop="12px">
          You token is now on Chainswap and the cross functionality is enabled
        </TYPE.body>
        <Box margin="24px auto 32px">
          <TextButton underline>View on Etherscan</TextButton>
        </Box>
      </SimpleMessageBox>
    )
  }, [showModal])

  return (
    <DeployBody header="Bridge Factory Contract" activeStep={2}>
      <Box display={'grid'} gridGap={16} width="100%">
        <InfoCard data={data} header="Mainchain Info" editable />
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
          />
        ))}
        <Button onClick={onDeploy}>Deploy</Button>
      </Box>
    </DeployBody>
  )
}
