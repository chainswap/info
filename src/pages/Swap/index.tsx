import React from 'react'
import OutlineButton from '../../components/Button/OutlineButton'
import AppBody from '../AppBody'
import SwapHeader from '../../components/swap/SwapHeader'
import CurrencyInputPanel from '../../components/CurrencyInputPanel'
import CurrencySelectPanel from '../../components/CurrencySelectPanel'
import { styled } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

const Wrapper = styled('div')({
  position: 'relative',
})

export default function Swap() {
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
            <OutlineButton size="large">Connect Wallet</OutlineButton>
          </Grid>
        </Grid>
      </AppBody>
    </>
  )
}
