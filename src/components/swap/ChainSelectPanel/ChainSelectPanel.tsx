import React from 'react'
import { Box, styled } from '@material-ui/core'
import ChainSelect from '../../ChainSelect/ChainSelect'
import Chain from '../../../models/chain'
import { ReactComponent as SwitchArrowIcon } from '../../../assets/images/switch_arrow.svg'
import Image from '../../Image/Image'
import zIndex from '@material-ui/core/styles/zIndex'

interface Props {
  chainList: Chain[]
  from: Chain | null
  to: Chain | null
  onChangeFrom: (e: void) => void
  onChangeTo: (e: void) => void
}

export default function ChainSelectPanel(props: Props) {
  const { from, to, chainList, onChangeFrom, onChangeTo } = props

  return (
    <Box display="flex" justifyContent="space-between" alignItems={'flex-end'} position={'relative'}>
      <ChainSelect label={'From'} selectedChain={from} chainList={chainList} onChange={onChangeFrom} width={'232px'} />
      <Box position={'absolute'} left={'calc(50% - 16px)'} zIndex={99} padding="0px" height="32px" bottom="8px">
        <SwitchArrowIcon />
      </Box>
      <ChainSelect label={'To'} selectedChain={to} chainList={chainList} onChange={onChangeTo} width={'232px'} />
    </Box>
  )
}
