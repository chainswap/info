import React from 'react'
import { styled } from '@material-ui/styles'

const Label = styled('div')({
  fontWeight: 400,
  fontSize: 12,
  fontFamily: 'Roboto',
  lineHeight: '17.84px',
  color: '#FFFFFF',
  opacity: 0.6,
})

export default function CurrencyInputPanel() {
  return (
    <>
      <Label>Amount</Label>
    </>
  )
}
