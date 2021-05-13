import React from 'react'
import { MenuItem, Box } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import DummyLogo from '../../assets/images/dummy_logo.png'
import Select from '../Select/Select'
import { StyledInputLabel } from '../Input/Input'

interface Props {
  label: string
  disabled?: boolean
}

const CurrencySelectLabel = styled('div')({
  color: '#FFFFFF',
  opacity: 0.6,
  fontSize: 12,
  fontWeight: 400,
  fontFamily: 'Roboto',
  lineHeight: '17.48px',
})

const CurrencyIcon = styled('div')({
  marginRight: 12,
})

export default function CurrencySelectPanel(props: Props) {
  const { label, disabled } = props
  return (
    <>
      <Box>
        <StyledInputLabel>{label}</StyledInputLabel>
        <Select defaultValue="ETH" disabled={disabled}>
          <MenuItem value="ETH">
            <CurrencyIcon>
              <img src={DummyLogo} alt="currency_icon" />
            </CurrencyIcon>
            ETH
          </MenuItem>
          <MenuItem value="BNB">
            <CurrencyIcon>
              <img src={DummyLogo} alt="currency_icon" />
            </CurrencyIcon>
            BNB
          </MenuItem>
        </Select>
      </Box>
    </>
  )
}
