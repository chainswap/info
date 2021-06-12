import React, { ChangeEvent } from 'react'
import theme, { TYPE } from '../../theme/index'
import { Box } from '@material-ui/core'
import Input from '../../components/Input/Input'
import { ReactComponent as InfoIcon } from '../../assets/images/info_icon.svg'
import Divider from '../../components/Divider/Divider'
import Checkbox from '../../components/Checkbox/Checkbox'
import DeployBody from './DeployBody'
import { DeployStatusType } from './index'
import InfoCard from '../../components/deploy/InfoCard'

interface Props {
  address: string
  chainId: string
  onChangeAddress: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeChainId: (e: ChangeEvent<HTMLInputElement>) => void
  onDeploy: () => void
  toggleConfirm: () => void
  status: DeployStatusType
  data: {
    'Token name': string
    'Token symby': string
    'Token decimals': string
    'Total supply': string
  }
}

export default function AddToken(props: Props) {
  const { address, chainId, onChangeAddress, onChangeChainId, onDeploy, status, data, toggleConfirm } = props
  const { deploying, confirmed } = status

  return (
    <>
      <DeployBody
        header={'Add an Existing Token'}
        activeStep={0}
        loading={deploying}
        onClick={onDeploy}
        btnText={'Deploy'}
        loadingText={'Deploying'}
        btnDisabled={!confirmed || deploying}
      >
        <Box padding={'0 32px 20px 32px'}>
          <TYPE.smallGray>Token Contract Address</TYPE.smallGray>
          <Input value={address} onChange={onChangeAddress} placeholder={'Enter the token contract address'} />
        </Box>
        <Box padding={'0 32px 32px 32px'}>
          <Box display={'flex'}>
            <Box mr={'4px'}>
              <TYPE.smallGray>Mainchain ID</TYPE.smallGray>
            </Box>
            <InfoIcon />
          </Box>
          <Input value={chainId} onChange={onChangeChainId} placeholder={'Enter the chain ID of your existing token'} />
        </Box>
        {chainId && (
          <>
            <InfoCard data={data} status={status} toggleConfirm={toggleConfirm} />
            <Box margin={'20px 32px 20px 32px'}>
              <TYPE.mediumGray>Please confirm the token information before deploying</TYPE.mediumGray>
            </Box>
          </>
        )}
      </DeployBody>
    </>
  )
}
