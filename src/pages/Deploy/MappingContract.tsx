import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import DeployBody from './DeployBody'
import InfoCard from '../../components/deploy/InfoCard'
import ChainMultiSelect from '../../components/ChainSelect/ChainMultiSelect'
import { Box } from '@material-ui/core'
import Chain from '../../models/chain'
import ChainSelect from 'components/ChainSelect/ChainSelect'
import { ChainState } from './index'
import useModal from '../../hooks/useModal'
import MappingMessageBox from './MappingMessageBox'

import ErrorAndActionButton from 'components/Button/ErrorAndActionButton'
import { useMemo } from 'react'

const dummyData = {
  mainchainInfo: {
    'Token contract address': 'XXXXXXXXXXXXXXX',
    'Mappable contract address': 'XXXXXXXXXXXXXXX',
    'Mainchain ID': 'XXX',
  },
}

enum MappingInstruction {
  Select = 'Select Chain',
  Deploy = 'Deploy on Chain',
}

interface Props {
  chainList: Chain[]
  selectedChains: ChainState[]
  onChainSelect: (e: ChangeEvent<{ value: string[] }>) => void
  onNext: () => void
}

export default function MappingContract(props: Props) {
  const { onChainSelect, chainList, selectedChains, onNext } = props
  const [chains, setChains] = useState(selectedChains)
  const { showModal } = useModal()

  useEffect(() => {
    setChains(selectedChains)
  }, [selectedChains])

  const onClickDeployBtn = useCallback(
    (targetChain: ChainState) => {
      setChains(chains.map((chain) => (chain.symbol === targetChain.symbol ? { ...chain, deploying: true } : chain)))
      setTimeout(() => {
        setChains(
          chains.map((chain) =>
            chain.symbol === targetChain.symbol ? { ...chain, deploying: false, deployed: true } : chain
          )
        )
      }, 500)
    },
    [chains]
  )

  const getInstruction = useMemo(() => {
    if (chains.length < 2) {
      return MappingInstruction.Select
    }
    if (!(chains[0].deployed && chains[1].deployed)) {
      return MappingInstruction.Deploy
    }
  }, [chains])

  const allDeployed = useMemo(() => {
    if (chains[0]?.deployed && chains[1]?.deployed) {
      return true
    }

    return false
  }, [chains])

  return (
    <DeployBody header={'Mapping token contract deployment'} activeStep={1}>
      <InfoCard data={dummyData.mainchainInfo} header="Mainchain Info" editable />
      <Box padding={'24px 0'}>
        <ChainMultiSelect
          label="Select Chain"
          selectedChains={selectedChains}
          chainList={chainList}
          width="100%"
          onChainSelect={onChainSelect}
        />
        {chains.map((chain, i) => (
          <Box marginTop={'24px'} key={chain.symbol}>
            <Box display="flex" alignItems="flex-end" justifyContent="space-between" marginBottom={'16px'}>
              <ChainSelect
                label={`Chain ${i + 1}`}
                chainList={chainList}
                selectedChain={chain}
                disabled
                width={'292px'}
              />
              <ErrorAndActionButton
                height="48px"
                width="176px"
                pending={chain.deploying}
                pendingText="Loading"
                success={chain.deployed}
                onAction={() => onClickDeployBtn(chain)}
                actionText={`Deploy on ${chain.symbol}`}
              />
            </Box>
            {chain.deployed && (
              <InfoCard
                data={{
                  'Token contract address': 'XXXXXXXXXXXXXXXXXXXXXX',
                  'Chain ID': 'XXX',
                }}
              />
            )}
          </Box>
        ))}
      </Box>
      <ErrorAndActionButton
        instruction={!allDeployed}
        onAction={() => showModal(<MappingMessageBox chains={chains} data={dummyData.mainchainInfo} action={onNext} />)}
        actionText={'Next Step'}
        instructionText={getInstruction}
      />
    </DeployBody>
  )
}
