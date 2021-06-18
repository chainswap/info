import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import DeployBody from './DeployBody'
import InfoCard from '../../components/deploy/InfoCard'
import ChainMultiSelect from '../../components/ChainSelect/ChainMultiSelect'
import { Box, useTheme } from '@material-ui/core'
import Chain from '../../models/chain'
import ChainSelect from 'components/ChainSelect/ChainSelect'
import OutlineButton from 'components/Button/OutlineButton'
import { ChainState } from './index'
import { ReactComponent as SuccessIcon } from '../../assets/images/deploy_success.svg'
import { Text } from 'rebass'
import useModal from '../../hooks/useModal'
import MappingMessageBox from './MappingMessageBox'

interface Props {
  chainList: Chain[]
  selectedChains: ChainState[]
  onChainSelect: (e: ChangeEvent<{ value: string[] }>) => void
  data: {
    'Token contract address': string
    'Mappable contract address': string
    'Mainchain ID': string
  }
  onNext: () => void
}

export default function Mapping(props: Props) {
  const theme = useTheme()
  const { data, onChainSelect, chainList, selectedChains, onNext } = props
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [chains, setChains] = useState(selectedChains)
  const { showModal } = useModal()

  const deployBtnText = useCallback((chain: ChainState) => {
    if (chain.deploying) {
      return <Text marginLeft={12.5}>Deploying</Text>
    }
    if (chain.deployed) {
      return (
        <>
          <SuccessIcon />
          <Text marginLeft={12.5}>Success</Text>
        </>
      )
    }

    return `Deploy on ${chain.symbol}`
  }, [])

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

  useEffect(() => {
    setChains(selectedChains)
  }, [selectedChains])

  useEffect(() => {
    if (chains.length === 2 && chains[0]?.deployed && chains[1]?.deployed) {
      setBtnDisabled(false)
    }
  }, [chains])

  return (
    <DeployBody
      header={'Mapping token contract deployment'}
      activeStep={1}
      loading={false}
      onClick={() => showModal(<MappingMessageBox chains={chains} data={data} action={onNext} />)}
      btnText="Next Step"
      loadingText=""
      btnDisabled={btnDisabled}
    >
      <InfoCard data={data} header="Mainchain Info" editable />
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
              <OutlineButton
                width={'180px'}
                onClick={() => onClickDeployBtn(chain)}
                color={chain.deployed ? theme.textColor.text4 : theme.palette.primary.main}
                loading={chain.deploying}
              >
                {deployBtnText(chain)}
              </OutlineButton>
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
    </DeployBody>
  )
}
