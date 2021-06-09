import React from 'react'
import { Box } from '@material-ui/core'
import ChainSelect from './ChainSelect'
import Chain from '../../../models/chain'
import SwitchArrow from '../../../assets/images/switch_arrow.svg'
import Image from '../../Image/Image'

interface Props {
  chainList: Chain[]
  from: Chain
  to: Chain
  onChangeFrom: (e: void) => void
  onChangeTo: (e: void) => void
}

export default function ChainSelectPanel(props: Props) {
  const { from, to, chainList, onChangeFrom, onChangeTo } = props

  return (
    <Box display="flex" justifyContent="space-between">
      <ChainSelect label={'From'} disabled selectedChain={from} chainList={chainList} onChange={onChangeFrom} />
      <Image src={SwitchArrow} alt={'switch_arrow_icon'} style={{ marginTop: 12 }} />
      <ChainSelect label={'To'} selectedChain={to} chainList={chainList} onChange={onChangeTo} />
    </Box>
  )
}
