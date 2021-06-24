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
import { DeployData, ChainList } from 'data/dummyData'
import { DEPLOY_STEP, DEPLOY_MODE } from './index'
import Chain from 'models/chain'
import DeployAddForm from './DeployAddForm'

enum AddTokenError {
  ENTER_ADDRESS = 'Enter Token Contract Address',
  ENTER_CHAIN_ID = 'Enter the Chain ID',
  ENTER_NAME = 'Enter Token Name',
  ENTER_SYMBY = 'Enter Token Symby',
  ENTER_DECLAIMS = 'Enter Token declaims',
  ENTER_SUPPLY = 'Enter Token Total Supply',
  SELECT_CHAIN = 'Select Chain',
}

interface Props {
  mode?: DEPLOY_MODE
  onStep: (step: DEPLOY_STEP) => void
}

export default function AddToken(props: Props) {
  const { mode, onStep } = props
  const [address, setAddress] = useState('')
  const [chainId, setChainId] = useState('')
  const [{ confirmed, deploying }, setDeployStatus] = useState<{
    confirmed: boolean
    deploying: boolean
  }>({
    confirmed: false,
    deploying: false,
  })
  const [name, setName] = useState('')
  const [symby, setSymby] = useState('')
  const [declaims, setDeclaims] = useState('')
  const [totalSupply, setTotalSupply] = useState('')
  const [chain, setChain] = useState<Chain | null>(null)
  const { showModal, hideModal } = useModal()

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

  const onMessage = useCallback(() => {
    onStep(DEPLOY_STEP.MAPPING_CONTRACT)
    hideModal()
  }, [onStep, hideModal])

  const onDeploy = useCallback(() => {
    setDeployStatus({
      confirmed,
      deploying: true,
    })
    setTimeout(() => {
      showModal(<AddTokenMessageBox data={DeployData.mainchainInfo} action={onMessage} />)
    }, 500)
  }, [onStep, showModal])

  const header = useMemo(() => {
    return mode === DEPLOY_MODE.EXISTING ? 'Add an Existing Token' : 'Add New Token'
  }, [])

  const errorNew = useMemo(() => {
    if (!name) {
      return 'Enter Token Name'
    }
    if (!symby) {
      return 'Enter Token Symby'
    }
    if (!declaims) {
      return 'Enter Token declaims'
    }
    if (!totalSupply) {
      return 'Enter Token Total Supply'
    }
    if (!chain) {
      return 'Select Chain'
    }
  }, [name, symby, declaims, totalSupply, chain])

  const errorExisting = useMemo(() => {
    if (mode === DEPLOY_MODE.EXISTING) {
      if (!address) {
        return AddTokenError.ENTER_ADDRESS
      }
      if (!chainId) {
        return AddTokenError.ENTER_CHAIN_ID
      }
    }
  }, [address, chainId])

  const onName = useCallback((e) => setName(e.target.value), [])
  const onSymby = useCallback((e) => setSymby(e.target.value), [])
  const onDeclaims = useCallback((e) => setDeclaims(e.target.value), [])
  const onTotalSupply = useCallback((e) => setTotalSupply(e.target.value), [])
  const onChainSelect = useCallback((e) => {
    setChain(ChainList.find((chain) => chain.symbol === e.target.value) ?? null)
  }, [])

  return (
    <>
      <DeployBody
        header={header}
        activeStep={DEPLOY_STEP.ADD_TOKEN}
        onStep={onStep}
        nonLinear={mode === DEPLOY_MODE.NEW}
      >
        {mode === DEPLOY_MODE.EXISTING && (
          <>
            <Box display="grid" gridGap="24px" mb="24px">
              <Input
                label="Token Contract Address"
                value={address}
                onChange={onChangeAddress}
                placeholder={'Enter the token contract address'}
              />
              <div>
                <InputLabel infoIcon>Mainchain ID</InputLabel>
                <Input
                  value={chainId}
                  onChange={onChangeChainId}
                  placeholder={'Enter the chain ID of your existing token'}
                />
              </div>
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
          </>
        )}

        {mode === DEPLOY_MODE.NEW && (
          <DeployAddForm
            name={name}
            symby={symby}
            declaims={declaims}
            totalSupply={totalSupply}
            chain={chain}
            checked={confirmed}
            onName={onName}
            onSymby={onSymby}
            onDeclaims={onDeclaims}
            onTotalSupply={onTotalSupply}
            onChain={onChainSelect}
            onChecked={toggleConfirm}
          />
        )}

        <ErrorAndActionButton
          error={mode === DEPLOY_MODE.EXISTING ? errorExisting : errorNew}
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
