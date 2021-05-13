import React from 'react'
import SwitchArrow from '../../assets/images/switch_arrow.svg'
import CurrencySelect from './CurrencySelect'
import { Box } from '@material-ui/core'
// import CurrencyMenu from './CurrencyMenu'

export default function CurrencySelectPanel() {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <CurrencySelect label={'From'} disabled />
        <img src={SwitchArrow} alt={'switch_arrow_icon'} />
        <CurrencySelect label={'To'} />
        {/* <CurrencyMenu /> */}
      </Box>
    </>
  )
}
