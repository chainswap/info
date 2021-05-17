import React from 'react'
import SwitchArrow from '../../assets/images/switch_arrow.svg'
import CurrencySelect from './ChainSelect'
import { Box } from '@material-ui/core'
import Chain from '../../models/chain'

interface Props {
  chainList: Chain[]
}

export default function CurrencySelectPanel(props: Props) {
  const { chainList } = props
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <CurrencySelect label={'From'} disabled chainList={chainList} />
        <Box paddingTop="30px">
          <img src={SwitchArrow} alt={'switch_arrow_icon'} />
        </Box>
        <CurrencySelect label={'To'} chainList={chainList} />
      </Box>
    </>
  )
}
