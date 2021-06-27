import React from 'react'
import { Grid } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import AppBody from 'pages/AppBody'
import { TYPE } from 'theme/index'

const Wrapper = styled('div')({
  padding: '0 40px 20px',
})

const MainCard = styled('div')({
  borderRadius: 10,
  backgroundColor: 'hsla(0,0%,100%,.08)',
  height: 100,
  padding: 20,
})

const Card = styled('div')({
  borderRadius: 10,
  backgroundColor: 'hsla(0,0%,100%,.08)',
  height: 80,
  padding: '10px 16px',
})

export default function Info() {
  return (
    <AppBody title="ChainSwap Stats" width={640}>
      <Wrapper>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <MainCard>
              <TYPE.extraSmallGray>TOTAL SWAAPED ASSETS VALUE</TYPE.extraSmallGray>
              <TYPE.extremeLarge>$ 163,598,758</TYPE.extremeLarge>
            </MainCard>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <TYPE.extraSmallGray>SECURING THE NETWORK</TYPE.extraSmallGray>
              <TYPE.largeBold>5 Nodes</TYPE.largeBold>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <TYPE.extraSmallGray>CONNECTED VIA THE BRIDGED</TYPE.extraSmallGray>
              <TYPE.largeBold>3 Chains</TYPE.largeBold>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <TYPE.extraSmallGray>SUPPORTED</TYPE.extraSmallGray>
              <TYPE.largeBold>79 Tokens</TYPE.largeBold>
            </Card>
          </Grid>
        </Grid>
      </Wrapper>
    </AppBody>
  )
}
