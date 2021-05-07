import React from 'react'
import Button from '../../components/Button/Button'
import AppBody from '../AppBody'
import SwapHeader from '../../components/swap/SwapHeader'
import CurrencyInputPanel from '../../components/CurrencyInputPanel'
import CurrencySelectPanel from '../../components/CurrencySelectPanel/CurrencySelectPanel'
import { Grid } from '@material-ui/core'
import { useWalletModalToggle } from '../../state/application/hooks'
import WalletModal from '../../components/WalletModal'
import { styled } from '@material-ui/styles'

const AppBodyGrid = styled('div')({
  display: 'grid',
  gridGap: 26,
})

export default function Swap() {
  // toggle wallet when disconnected
  const toggleWalletModal = useWalletModalToggle()

  return (
    <>
      <AppBody>
        <SwapHeader />
        <AppBodyGrid>
          <CurrencyInputPanel />
          <CurrencySelectPanel />
          <Button size="large" onClick={toggleWalletModal}>
            Connect Wallet
          </Button>
        </AppBodyGrid>
      </AppBody>
      <WalletModal />
    </>
  )
}
