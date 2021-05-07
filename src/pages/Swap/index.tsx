import React from 'react'
import Button from '../../components/Button/Button'
import AppBody from '../AppBody'
import SwapHeader from '../../components/swap/SwapHeader'
import CurrencyInputPanel from '../../components/CurrencyInputPanel'
import CurrencySelectPanel from '../../components/CurrencySelectPanel/CurrencySelectPanel'
import { Grid } from '@material-ui/core'
import { useWalletModalToggle } from '../../state/application/hooks'

export default function Swap() {
  // toggle wallet when disconnected
  const toggleWalletModal = useWalletModalToggle()

  return (
    <>
      <AppBody>
        <Grid container direction={'column'} spacing={3} justify={'flex-start'}>
          <Grid container item>
            <SwapHeader />
          </Grid>
          <Grid container item>
            <CurrencyInputPanel />
          </Grid>
          <Grid container item>
            <CurrencySelectPanel />
          </Grid>
          <Grid container item>
            <Button size="large" onClick={toggleWalletModal}>
              Connect Wallet
            </Button>
          </Grid>
        </Grid>
      </AppBody>
    </>
  )
}
