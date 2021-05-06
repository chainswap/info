import React from 'react'
import { InputLabel } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import Select from '../Select/Select'
import SwitchArrow from '../../assets/images/switch_arrow.svg'
import { RowBetween } from '../../components/Row'

const CurrencySelect = styled('div')({
  width: 176,
  height: 46,
  boxSizing: 'border-box',
  borderRadius: 14,
  alignItems: 'center',
})

const CurrencySelectLabel = styled('div')({
  color: '#FFFFFF',
  opacity: 0.6,
  fontSize: 12,
  fontWeight: 400,
  fontFamily: 'Roboto',
  lineHeight: '17.48px',
})

export default function CurrencySelectPanel() {
  return (
    <>
      <RowBetween>
        <CurrencySelect>
          <CurrencySelectLabel>From</CurrencySelectLabel>
          <Select defaultValue="ETH" disabled>
            <option value="ETH">ETH</option>
          </Select>
        </CurrencySelect>
        <img src={SwitchArrow} alt={'switch_arrow_icon'} />
        <CurrencySelect>
          <CurrencySelectLabel>To</CurrencySelectLabel>
          <Select defaultValue="ETH">
            <option value="ETH">ETH</option>
          </Select>
        </CurrencySelect>
      </RowBetween>
    </>
  )
}
