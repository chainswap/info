import React from 'react'
import Button from '../../components/Button/Button'
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
            <Button size="large">Connect Wallet</Button>
          </Grid>
        </Grid>
      </AppBody>
    </>
  )
}
