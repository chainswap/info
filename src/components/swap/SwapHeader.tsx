import React from 'react'
import { styled } from '@material-ui/styles'

const StyledSwapHeader = styled('div')({
  padding: '12px 1rem 0px 1.5rem',
  width: '100%',
  maxWidth: 420,
  color: '#fff',
})

export default function SwapHeader() {
  return <StyledSwapHeader>Cross Chain Bridge</StyledSwapHeader>
}
