import React from 'react'
import OutlineButton from '../../components/Button/OutlineButton'
import AppBody from '../AppBody'
import SwapHeader from '../../components/swap/SwapHeader'

export default function Swap() {
  return (
    <AppBody>
      <SwapHeader />
      <OutlineButton size="large">Connect Wallet</OutlineButton>
    </AppBody>
  )
}
