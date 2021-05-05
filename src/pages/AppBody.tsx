import React from 'react'
import { styled } from '@material-ui/styles'

export const BodyWrapper = styled('div')({
  position: 'relative',
  maxWidth: 420,
  width: '100%',
  borderRadius: 30,
  background: '#000000',
  padding: '12px 32px 28px',
})

export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
