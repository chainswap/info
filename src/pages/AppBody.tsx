import React from 'react'
import { styled } from '@material-ui/styles'

export const BodyWrapper = styled('div')({
  position: 'relative',
  maxWidth: 512,
  width: 512,
  borderRadius: 32,
  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%), #000000',
  justifyContent: 'center',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxSizing: 'border-box',
})

export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
