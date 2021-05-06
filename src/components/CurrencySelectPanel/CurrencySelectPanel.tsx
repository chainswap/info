import React from 'react'

import SwitchArrow from '../../assets/images/switch_arrow.svg'
import { RowBetween } from '../Row'
import CurrencySelect from './CurrencySelect'

export default function CurrencySelectPanel() {
  return (
    <>
      <RowBetween>
        <CurrencySelect label={'From'} disabled />
        <img src={SwitchArrow} alt={'switch_arrow_icon'} />
        <CurrencySelect label={'To'} />
      </RowBetween>
    </>
  )
}
