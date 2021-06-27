import React from 'react'
import { Grid } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import AppBody from 'pages/AppBody'

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
  padding: 20,
})

export default function Info() {
  return (
    <AppBody title="ChainSwap Stats">
      <Wrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MainCard></MainCard>
          </Grid>
          <Grid item xs={4}>
            <Card></Card>
          </Grid>
          <Grid item xs={4}>
            <Card></Card>
          </Grid>
          <Grid item xs={4}>
            <Card></Card>
          </Grid>
        </Grid>
      </Wrapper>
    </AppBody>
  )
}
