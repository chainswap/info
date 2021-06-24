import React, { ChangeEvent, useState, useCallback, useMemo } from 'react'
import { TYPE } from 'theme/index'
import { Box } from '@material-ui/core'
import Input from 'components/Input/Input'
import DeployBody from './DeployBody'
import InfoCard from 'components/deploy/InfoCard'
import InputLabel from 'components/InputLabel/InputLabel'
import ErrorAndActionButton from 'components/Button/ErrorAndActionButton'
import useModal from 'hooks/useModal'
import AddTokenMessageBox from './AddTokenMessageBox'
import { DeployData } from 'data/dummyData'

enum AddTokenError {
  ENTER_ADDRESS = 'Enter Token Contract Address',
  ENTER_CHAIN_ID = 'Enter the Chain ID',
}

interface Props {
  onNext: () => void
}

export default function AddToken(props: Props) {
  const { onNext } = props
  const [address, setAddress] = useState('')
  const [chainId, setChainId] = useState('')
  const [{ confirmed, deploying }, setDeployStatus] = useState<{
    confirmed: boolean
    deploying: boolean
  }>({
    confirmed: false,
    deploying: false,
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
    })
  }, [confirmed])

  const onDeploy = useCallback(() => {
    setDeployStatus({
      confirmed,
      deploying: true,
    })
    setTimeout(() => {
      showModal(<AddTokenMessageBox data={DeployData.mainchainInfo} action={onNext} />)
    }, 500)
  }, [onNext, showModal])

  const error = useMemo(() => {
    if (!address) {
      return AddTokenError.ENTER_ADDRESS
    }
    if (!chainId) {
      return AddTokenError.ENTER_CHAIN_ID
    }
  }, [address, chainId])

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
              data={DeployData.tokenInfo}
              confirmed={confirmed}
              toggleConfirm={toggleConfirm}
              confirmText={'I confirm the token information before deploying'}
            />
            <Box margin={'20px 0'}>
              <TYPE.mediumGray>Please confirm the token information before deploying</TYPE.mediumGray>
            </Box>
          </>
        )}

        <ErrorAndActionButton
          error={error}
          onAction={onDeploy}
          pending={deploying}
          pendingText={'Loading'}
          actionText={'Deploy'}
          disableAction={!confirmed}
        />
      </DeployBody>
    </>
  )
}
