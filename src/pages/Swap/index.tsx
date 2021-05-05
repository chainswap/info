import React from 'react'
import OutlineButton from '../../components/Button/OutlineButton'
import AppBody from '../AppBody'
import SwapHeader from '../../components/swap/SwapHeader'
import CurrencyInputPanel from '../../components/CurrencyInputPanel'

export default function Swap() {
  return (
    <AppBody>
      <SwapHeader />
      <CurrencyInputPanel />
      <OutlineButton size="large">Connect Wallet</OutlineButton>
    </AppBody>
  )
}
