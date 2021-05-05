import React from 'react'
import { styled } from '@material-ui/styles'
import { Input } from '@material-ui/core'

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
  background: 'rgba(255, 255, 255, 0.08)',
})

const NumericalInput = styled('input')({})

const CurrencySelect = styled('button')({})

export default function CurrencyInputPanel() {
  return (
    <>
      <LabelRow>Amount</LabelRow>
      <InputRow>
        <NumericalInput placeholder="Enter amount to swap" />
        <CurrencySelect />
      </InputRow>
    </>
  )
}
