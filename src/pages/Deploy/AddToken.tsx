import React, { ChangeEvent, useState, useEffect, useCallback } from 'react'
import { TYPE } from 'theme/index'
import { Box } from '@material-ui/core'
import Input from 'components/Input/Input'
import DeployBody from './DeployBody'
import InfoCard from 'components/deploy/InfoCard'
import InputLabel from 'components/InputLabel/InputLabel'
import OutlineButton from 'components/Button/OutlineButton'
import Button from 'components/Button/Button'
import useModal from 'hooks/useModal'
import AddTokenMessageBox from './AddTokenMessageBox'

const dummyData = {
  tokenInfo: {
    'Token name': 'ETH',
    'Token symby': 'XXXXX',
    'Token decimals': 'XXXXX',
    'Total supply': 'XXXXX',
  },
  mainchainInfo: {
    'Token contract address': 'XXXXXXXXXXXXXXX',
    'Mappable contract address': 'XXXXXXXXXXXXXXX',
    'Mainchain ID': 'XXX',
  },
}

interface Props {
  toMapping: () => void
}

export default function AddToken(props: Props) {
  const { toMapping } = props
  const [address, setAddress] = useState('')
  const [chainId, setChainId] = useState('')
  const [{ confirmed, deploying }, setDeployStatus] = useState<{
    confirmed: boolean
    deploying: boolean
    deployed: boolean
  }>({
    confirmed: false,
    deploying: false,
    deployed: false,
  })
  const { showModal } = useModal()

  const onChangeAddress = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }, [])

  const onChangeChainId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setChainId(e.target.value)
  }, [])

  const toggleConfirm = useCallback(() => {
    setDeployStatus({
      confirmed: !confirmed,
      deploying: false,
      deployed: false,
    })
  }, [confirmed])

  const onDeploy = useCallback(() => {
    setDeployStatus({
      confirmed: true,
      deploying: true,
      deployed: false,
    })
    setTimeout(() => {
      setDeployStatus({
        deploying: false,
        confirmed: true,
        deployed: true,
      })
      showModal(<AddTokenMessageBox data={dummyData.mainchainInfo} action={toMapping} />)
    }, 500)
  }, [setDeployStatus, showModal])

  const getActions = useCallback(() => {
    if (!address) {
      return <OutlineButton primary>Enter Token Contract Address</OutlineButton>
    }
    if (!chainId) {
      return <OutlineButton primary>Enter the Chain ID</OutlineButton>
    }
    if (deploying) {
      return (
        <OutlineButton loading primary>
          Loading
        </OutlineButton>
      )
    }
    return <Button onClick={onDeploy}>Deploy</Button>
  }, [address, chainId, deploying, onDeploy])

  return (
    <>
      <DeployBody header={'Add an Existing Token'} activeStep={0}>
        <Box mb="24px">
          <Input
            label="Token Contract Address"
            value={address}
            onChange={onChangeAddress}
            placeholder={'Enter the token contract address'}
          />
        </Box>
        <Box mb="24px">
          <Box display="flex" alignItems="center">
            <InputLabel infoIcon>Mainchain ID</InputLabel>
          </Box>

          <Input value={chainId} onChange={onChangeChainId} placeholder={'Enter the chain ID of your existing token'} />
        </Box>
        {chainId && (
          <>
            <InfoCard
              data={dummyData.tokenInfo}
              confirmed={confirmed}
              toggleConfirm={toggleConfirm}
              confirmText={'I confirm the token information before deploying'}
            />
            <Box margin={'20px 0'}>
              <TYPE.mediumGray>Please confirm the token information before deploying</TYPE.mediumGray>
            </Box>
          </>
        )}

        {getActions()}
      </DeployBody>
    </>
  )
}
