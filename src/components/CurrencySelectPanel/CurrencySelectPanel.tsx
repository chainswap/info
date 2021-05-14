import React from 'react'
import SwitchArrow from '../../assets/images/switch_arrow.svg'
import CurrencySelect from './CurrencySelect'
import { Box } from '@material-ui/core'
// import CurrencyMenu from './CurrencyMenu'
import Currency from '../../models/currency'

interface Props {
  currencyList: Currency[]
}

export default function CurrencySelectPanel(props: Props) {
  const { currencyList } = props
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <CurrencySelect label={'From'} disabled currencyList={currencyList} />
        <Box paddingTop="30px">
          <img src={SwitchArrow} alt={'switch_arrow_icon'} />
        </Box>
        <CurrencySelect label={'To'} currencyList={currencyList} />
        {/* <CurrencyMenu /> */}
      </Box>
    </>
  )
}
