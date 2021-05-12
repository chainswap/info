import React from 'react'
import { styled } from '@material-ui/styles'

const StyledSwapHeader = styled('div')({
  width: '100%',
  maxWidth: 480,
  color: '#fff',
  textAlign: 'center',
  fontSize: 20,
  fontFamily: 'Futura PT',
  margin: '12px 0 18px 0',
})

export default function SwapHeader() {
  return <StyledSwapHeader>Cross Chain Bridge</StyledSwapHeader>
}
