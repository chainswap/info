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
        <Box paddingTop="30px">
          <img src={SwitchArrow} alt={'switch_arrow_icon'} />
        </Box>
        <CurrencySelect label={'To'} />
        {/* <CurrencyMenu /> */}
      </Box>
    </>
  )
}
