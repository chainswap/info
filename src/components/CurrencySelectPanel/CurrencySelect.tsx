import React from 'react'
import { MenuItem, Box } from '@material-ui/core'
import Select from '../Select/Select'
import { TYPE } from '../../theme/index'
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
        <TYPE.label>{label}</TYPE.label>
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
