import React, { useState, ChangeEvent, useCallback } from 'react'
import AppBody from '../AppBody'
import Entry from './Entry'
import AddToken from './AddToken'
import Mapping from './Mapping'
import useModal from '../../hooks/useModal'
import DeployMessageBox from '../../components/deploy/DeployMessageBox'
import Chain from '../../models/chain'
import { ChainList } from 'data/dummyData'

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

enum DEPLOY_STATE {
  ENTRY = 'entry',
  ADD = 'add',
  MAPPING = 'mapping',
}

export type DeployStatusType = {
  confirmed: boolean
  deploying: boolean
  deployed: boolean
}

export default function Deploy() {
  const [state, setState] = useState(DEPLOY_STATE.ENTRY)
  const [address, setAddress] = useState('')
  const [chainId, setChainId] = useState('')
  const [deployStatus, setDeployStatus] = useState<DeployStatusType>({
    confirmed: false,
    deploying: false,
    deployed: false,
  })
  const [selectedChains, setSelectedChains] = useState<Chain[]>([])

  const { showModal, hideModal } = useModal()

  const onChangeAddress = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }, [])

  const onChangeChainId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setChainId(e.target.value)
  }, [])

  const toggleConfirm = useCallback(() => {
    setDeployStatus({
      confirmed: !deployStatus.confirmed,
      deploying: false,
      deployed: false,
    })
  }, [])

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
      showModal(<DeployMessageBox data={dummyData.mainchainInfo} action={toMapping} />)
    }, 500)
  }, [])

  const toMapping = useCallback(() => {
    setState(DEPLOY_STATE.MAPPING)
    hideModal()
  }, [])

  const onChainSelect = useCallback(
    (e: ChangeEvent<{ value: string[] }>) => {
      const symbols: string[] = e.target.value
      const selectedItems = []

      for (let i = 0; i < symbols.length; i += 1) {
        const chain = ChainList.find((chain) => chain.symbol === symbols[i])
        if (chain) {
          selectedItems.push(chain)
        }
      }
      setSelectedChains(selectedItems)
    },
    [selectedChains]
  )

  return (
    <AppBody width={552}>
      {state === DEPLOY_STATE.ENTRY ? (
        <Entry onClickExistingToken={() => setState(DEPLOY_STATE.ADD)} onClickNewToken={() => {}} />
      ) : state === DEPLOY_STATE.ADD ? (
        <AddToken
          address={address}
          onChangeAddress={onChangeAddress}
          chainId={chainId}
          onChangeChainId={onChangeChainId}
          toggleConfirm={toggleConfirm}
          onDeploy={onDeploy}
          status={deployStatus}
          data={dummyData.tokenInfo}
        />
      ) : state === DEPLOY_STATE.MAPPING ? (
        <Mapping
          data={dummyData.mainchainInfo}
          chainList={ChainList}
          onChainSelect={onChainSelect}
          selectedChains={selectedChains}
        />
      ) : null}
    </AppBody>
  )
}
