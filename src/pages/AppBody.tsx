import React from 'react'
import { styled } from '@material-ui/styles'

export const BodyWrapper = styled('div')({
  position: 'relative',
  maxWidth: 480,
  width: '100%',
  borderRadius: 32,
  background: '#000000',
  padding: '12px 32px 28px',
  justifyContent: 'center',
  border: '1px solid hsla(0,0%,100%,.2)',
})

export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
