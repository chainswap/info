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
  // address: string
  // chainId: string
  // onChangeAddress: (e: ChangeEvent<HTMLInputElement>) => void
  // onChangeChainId: (e: ChangeEvent<HTMLInputElement>) => void
  // onDeploy: () => void
  // toggleConfirm: () => void
  // status: DeployStatusType
  // data: {
  //   'Token name': string
  //   'Token symby': string
  //   'Token decimals': string
  //   'Total supply': string
  // }
}

enum Hintable {
  ADDRESS,
  CHAIN_ID,
}

export default function AddToken(props: Props) {
  const [onHint, setOnHint] = useState<Hintable | null>(null)
  const [address, setAddress] = useState('')
  const [chainId, setChainId] = useState('')
  const [{ confirmed, deploying, deployed }, setDeployStatus] = useState<{
    confirmed: boolean
    deploying: boolean
    deployed: boolean
  }>({
    confirmed: false,
    deploying: false,
    deployed: false,
  })
  const { showModal, hideModal } = useModal()

  // onHint
  useEffect(() => {
    if (!address || address === '') {
      return setOnHint(Hintable.ADDRESS)
    }
    if (!chainId) {
      return setOnHint(Hintable.CHAIN_ID)
    }
    setOnHint(null)
  }, [address, chainId])

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

  // const toMapping = useCallback(() => {
  //   setState(DEPLOY_STATE.MAPPING)
  //   hideModal()
  // }, [setState, hideModal])

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
      showModal(<AddTokenMessageBox data={dummyData.mainchainInfo} action={() => {}} />)
    }, 3000)
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
  }, [address, chainId, deploying])

  return (
    <>
      <DeployBody header={'Add an Existing Token'} activeStep={0}>
        <Box mb="24px">
          <Input
            label="Token Contract Address"
            value={address}
            onChange={onChangeAddress}
            placeholder={'Enter the token contract address'}
            focused={onHint === Hintable.ADDRESS}
          />
        </Box>
        <Box mb="24px">
          <Box display="flex" alignItems="center">
            <InputLabel infoIcon>Mainchain ID</InputLabel>
          </Box>

          <Input
            value={chainId}
            onChange={onChangeChainId}
            placeholder={'Enter the chain ID of your existing token'}
            focused={onHint === Hintable.CHAIN_ID}
          />
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
