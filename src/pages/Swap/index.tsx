import React from 'react'
import Button from '../../components/Button/Button'
import AppBody from '../AppBody'
import SwapHeader from '../../components/swap/SwapHeader'

export default function Swap() {
  return (
    <AppBody>
      <SwapHeader />
      <Button size="large">Connect Wallet</Button>
    </AppBody>
  )
}
