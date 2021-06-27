import React from 'react'
import { Grid } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import AppBody from 'pages/AppBody'
import useBreakpoint from 'hooks/useBreakpoint'
import InfoCard from './InfoCard'

const Wrapper = styled('div')({
  padding: '0 40px 20px',
})

export default function Info() {
  const { matches } = useBreakpoint()

  return (
    <AppBody title="ChainSwap Stats" width={640}>
      <Wrapper>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <InfoCard size={matches ? 'small' : 'large'} title="TOTAL SWAAPED ASSETS VALUE" value="$ 163,598,758" />
          </Grid>
          <Grid item xs={matches ? 12 : 4}>
            <InfoCard size="small" title="SECURING THE NETWORK" value="5" unit="Nodes" />
          </Grid>
          <Grid item xs={matches ? 12 : 4}>
            <InfoCard size="small" title="CONNECTED VIA THE BRIDGED" value="3" unit="Chains" />
          </Grid>
          <Grid item xs={matches ? 12 : 4}>
            <InfoCard size="small" title="SUPPORTED" value="79" unit="Tokens" />
          </Grid>
        </Grid>
      </Wrapper>
    </AppBody>
  )
}
