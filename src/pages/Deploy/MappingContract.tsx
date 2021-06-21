import React, { ChangeEvent, useCallback, useEffect, useState, useMemo } from 'react'
import DeployBody from './DeployBody'
import InfoCard from 'components/deploy/InfoCard'
import ChainMultiSelect from 'components/ChainSelect/ChainMultiSelect'
import { Box } from '@material-ui/core'
import Chain from 'models/chain'
import ChainSelect from 'components/ChainSelect/ChainSelect'
import { ChainState } from './index'
import useModal from 'hooks/useModal'
import MappingMessageBox from './MappingMessageBox'
import ErrorAndActionButton from 'components/Button/ErrorAndActionButton'
import { DeployData } from 'data/dummyData'
import DeployMappingForm from './DeployMappingForm'
import Divider from 'components/Divider/Divider'

enum MappingError {
  SELECT = 'Select Chain',
  FILL = 'Fill the Mainchain Info',
  DEPLOY = 'Deploy on Chain',
}

interface Props {
  chainList: Chain[]
  selectedChains: ChainState[]
  onChainSelect: (e: ChangeEvent<{ value: string[] }>) => void
  onNext: () => void
  edit?: boolean
}

export default function MappingContract(props: Props) {
  const { onChainSelect, chainList, selectedChains, onNext, edit } = props
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

  const error = useMemo(() => {
    if (edit) {
      return MappingError.FILL
    }
    if (chains.length < 2) {
      return MappingError.SELECT
    }
    if (!((chains[0].deployed === chains[1].deployed) === true)) {
      return MappingError.DEPLOY
    }
  }, [chains])

  return (
    <DeployBody header={'Mapping token contract deployment'} activeStep={1}>
      {edit ? (
        <>
          <DeployMappingForm />
          <Box m="20px" />
          <Divider extension={40} />
        </>
      ) : (
        <InfoCard data={DeployData.mainchainInfo} header="Mainchain Info" editable />
      )}

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
        error={error}
        onAction={() =>
          showModal(<MappingMessageBox chains={chains} data={DeployData.mainchainInfo} action={onNext} />)
        }
        actionText={'Next Step'}
      />
    </DeployBody>
  )
}
