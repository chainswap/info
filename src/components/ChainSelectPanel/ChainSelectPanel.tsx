import React from 'react'
import SwitchArrow from '../../assets/images/switch_arrow.svg'
import ChainSelect from './ChainSelect'
import { Box } from '@material-ui/core'
import Chain from '../../models/chain'

interface Props {
  chainList: Chain[]
  from: Chain
  to: Chain
}

export default function CurrencySelectPanel(props: Props) {
  const { from, to, chainList } = props
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <ChainSelect label={'From'} disabled selectedChain={from} chainList={chainList} />
        <Box paddingTop="30px">
          <img src={SwitchArrow} alt={'switch_arrow_icon'} />
        </Box>
        <ChainSelect label={'To'} selectedChain={to} chainList={chainList} />
      </Box>
    </>
  )
}
