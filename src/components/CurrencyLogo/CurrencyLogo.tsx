import React from 'react'
import { Box } from '@material-ui/core'
import Currency from '../../models/currency'

interface Props {
  currency: Currency
}

export default function CurrencyLogo(props: Props) {
  const { currency } = props
  return (
    <Box display="flex">
      <img src={currency.logo} alt={`${currency.symbol} logo`} />
      <Box marginLeft="12px" color="#FFFFFF" fontSize="16px">
        {currency.symbol}
      </Box>
    </Box>
  )
}
