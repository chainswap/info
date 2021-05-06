import React from 'react'
import { styled } from '@material-ui/styles'
import DropDown from '../../assets/images/dummy_logo.png'

const LabelRow = styled('div')({
  fontWeight: 400,
  fontSize: 12,
  fontFamily: 'Roboto',
  lineHeight: '17.84px',
  color: '#FFFFFF',
  opacity: 0.6,
})

const InputRow = styled('div')({
  alignItems: 'center',
  width: '100%',
  height: 48,
  borderRadius: 14,
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  overflow: 'hidden',
  display: 'flex',
  padding: '14px 20px 14px 20px',
  boxSizing: 'border-box',
})

const StyledInput = styled('input')({
  outline: 'none',
  border: 'none',
  fontSize: 16,
  fontFamily: 'Roboto',
  fontWeight: 400,
  backgroundColor: 'transparent',
  color: '#FFFFFF',
  height: '100%',
  position: 'relative',
  flex: '1 1 auto',
})

const CurrencySelect = styled('button')({
  alignItems: 'center',
  height: 36,
  fontSize: '20px',
  fontWeight: 500,
  backgroundColor: 'transparent',
  color: '#FFFFFF',
  borderRadius: 12,
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
})

export default function CurrencyInputPanel() {
  return (
    <>
      <LabelRow>Amount</LabelRow>
      <InputRow>
        <StyledInput placeholder="Enter amount to swap" />
        <CurrencySelect>
          {/* <CurrencyLogo /> */}
          {/* <StyledTokenName /> */}
          {/* <DropDown /> */}
        </CurrencySelect>
      </InputRow>
    </>
  )
}
