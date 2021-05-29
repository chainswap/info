import React from 'react'
import { Box } from '@material-ui/core'
import ChainSelect from './ChainSelect'
import Chain from '../../models/chain'
import SwitchArrow from '../../assets/images/switch_arrow.svg'
import Image from '../Image/Image'

interface Props {
  chainList: Chain[]
  from: Chain
  to: Chain
}

export default function CurrencySelectPanel(props: Props) {
  const { from, to, chainList } = props
  return (
    <Box display="flex" justifyContent="space-between">
      <ChainSelect label={'From'} disabled selectedChain={from} chainList={chainList} />
      <Box paddingTop="24px">
        <Image src={SwitchArrow} alt={'switch_arrow_icon'} />
      </Box>
      <ChainSelect label={'To'} selectedChain={to} chainList={chainList} />
    </Box>
  )
}
