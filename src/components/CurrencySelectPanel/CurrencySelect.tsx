import React from 'react'
import { MenuItem, Box } from '@material-ui/core'
import Select from '../Select/Select'
import { StyledInputLabel } from '../Input/Input'
import CurrencyLogo from '../CurrencyLogo/CurrencyLogo'
import DummyLogo from '../../assets/images/dummy_logo.png'

interface Props {
  label: string
  disabled?: boolean
}

export default function CurrencySelectPanel(props: Props) {
  const { label, disabled } = props
  return (
    <>
      <Box>
        <StyledInputLabel>{label}</StyledInputLabel>
        <Select defaultValue="ETH" disabled={disabled}>
          <MenuItem value="ETH">
            <CurrencyLogo currency={'ETH'} src={DummyLogo} />
          </MenuItem>
          <MenuItem value="BNB">
            <CurrencyLogo currency={'BNB'} src={DummyLogo} />
          </MenuItem>
        </Select>
      </Box>
    </>
  )
}
