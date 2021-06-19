import React, { ChangeEvent } from 'react'
import { TYPE } from '../../theme/index'
import { Box } from '@material-ui/core'
import Input from '../../components/Input/Input'
import { ReactComponent as InfoIcon } from '../../assets/images/info_icon.svg'
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
        <Box mb="24px">
          <Input
            label="Token Contract Address"
            value={address}
            onChange={onChangeAddress}
            placeholder={'Enter the token contract address'}
          />
        </Box>
        <Box mb="24px">
          <Input
            label="Mainchain ID"
            value={chainId}
            onChange={onChangeChainId}
            placeholder={'Enter the chain ID of your existing token'}
          />
        </Box>
        {chainId && (
          <>
            <InfoCard
              data={data}
              status={status}
              toggleConfirm={toggleConfirm}
              confirmText={'I confirm the token information before deploying'}
            />
            <Box margin={'20px 0'}>
              <TYPE.mediumGray>Please confirm the token information before deploying</TYPE.mediumGray>
            </Box>
          </>
        )}
      </DeployBody>
    </>
  )
}
