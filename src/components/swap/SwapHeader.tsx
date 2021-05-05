import React from 'react'
import { styled } from '@material-ui/styles'

const StyledSwapHeader = styled('div')({
  width: '100%',
  maxWidth: 480,
  color: '#fff',
  textAlign: 'center',
})

const StyledSwapText = styled('p')({
  fontSize: 20,
  fontFamily: 'Futura PT',
  marginTop: 0,
  marginBottom: 20,
})

export default function SwapHeader() {
  return (
    <StyledSwapHeader>
      <StyledSwapText>Cross Chain Bridge</StyledSwapText>
    </StyledSwapHeader>
  )
}
