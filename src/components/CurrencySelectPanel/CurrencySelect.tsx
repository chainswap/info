import React from 'react'
import { MenuItem, Box } from '@material-ui/core'
import Select from '../Select/Select'
import { StyledInputLabel } from '../Input/Input'
import CurrencyLogo from '../CurrencyLogo/CurrencyLogo'
import Currency from '../../models/currency'

interface Props {
  label: string
  disabled?: boolean
  currencyList: Currency[]
}

export default function CurrencySelectPanel(props: Props) {
  const { label, disabled, currencyList } = props
  return (
    <>
      <Box>
        <StyledInputLabel>{label}</StyledInputLabel>
        <Select defaultValue="ETH" disabled={disabled}>
          {currencyList.map((currency) => (
            <MenuItem value="ETH">
              <CurrencyLogo currency={currency} />
            </MenuItem>
          ))}
        </Select>
      </Box>
    </>
  )
}
