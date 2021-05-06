import React from 'react'
import { MenuItem } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import Select from '../Select/Select'

const CurrencySelectFrom = styled('div')({
  width: 176,
  height: 46,
  backgroundColor: '1f1f1f',
  boxSizing: 'border-box',
  borderRadius: 14,
  display: 'flex',
  alignItems: 'center',
})

export default function CurrencySelectPanel() {
  return (
    <CurrencySelectFrom>
      <Select defaultValue="ETH" disabled>
        <option value="ETH">ETH</option>
      </Select>
      <Select defaultValue="ETH">
        <option value="ETH">ETH</option>
      </Select>
    </CurrencySelectFrom>
  )
}
