import React, { ChangeEvent } from 'react'
import theme, { TYPE } from '../../theme/index'
import DeployStepper from '../../components/deploy/DeployStepper'
import { Box } from '@material-ui/core'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { ReactComponent as InfoIcon } from '../../assets/images/info_icon.svg'
import { Divider } from '../../components/Divider/Divider'
import Checkbox from '../../components/Checkbox/Checkbox'
import { ReactComponent as Loader } from '../../assets/images/loader.svg'
import { Text } from 'rebass'

interface Props {
  address: string
  chainId: string
  onChangeAddress: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeChainId: (e: ChangeEvent<HTMLInputElement>) => void
  onDeploy: () => void
  toggleConfirm: () => void
  deploying: boolean
  confirmed: boolean
  data: {
    'Token name': string
    'Token symby': string
    'Token decimals': string
    'Total supply': string
  }
}

const TokenInfo = (props: Props) => {
  const { data, confirmed, toggleConfirm } = props

  return (
    <Box border={'1px solid' + theme.bgColor.bg4} borderRadius={22} margin={'0 32px'}>
      <Box display={'grid'} gridGap={'16px'} width={'100%'} padding={'16px 24px'}>
        <Box display={'grid'} gridGap={'8px'}>
          {Object.keys(data).map((key, i) => (
            <Box key={i} display={'flex'} justifyContent={'space-between'}>
              <TYPE.smallGray>{key}:</TYPE.smallGray>
              <TYPE.small>{data[key as keyof typeof data]}</TYPE.small>
            </Box>
          ))}
        </Box>
      </Box>
      <Divider />
      <Box display="flex" padding={'13px 24px 16px 24px'}>
        <Checkbox checked={confirmed} onChange={toggleConfirm} />
        <TYPE.mediumGray>I confirm the token information before deploying</TYPE.mediumGray>
      </Box>
    </Box>
  )
}

export default function ExistingToken(props: Props) {
  const { address, chainId, onChangeAddress, onChangeChainId, onDeploy, deploying, confirmed } = props

  return (
    <>
      <Box display={'flex'} justifyContent={'space-between'} padding={'24px 32px'}>
        <TYPE.mediumHeader>Add an Existing Token</TYPE.mediumHeader>
        <DeployStepper activeStep={0} />
      </Box>
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
          <TokenInfo {...props} />
          <Box margin={'20px 32px 20px 32px'}>
            <TYPE.mediumGray>Please confirm the token information before deploying</TYPE.mediumGray>
          </Box>
        </>
      )}

      <Box padding={'0 32px 32px 32px'}>
        <Button disabled={!confirmed || deploying} onClick={onDeploy}>
          {deploying ? (
            <>
              <Loader />
              <Text marginLeft={32}>Deploying</Text>
            </>
          ) : (
            'Deploy'
          )}
        </Button>
      </Box>
    </>
  )
}
