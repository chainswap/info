import React from 'react'
import { Box } from '@material-ui/core'

interface Props {
  currency: string
  src: string
}

export default function CurrencyLogo(props: Props) {
  const { src, currency } = props
  return (
    <Box display="flex">
      <img src={src} alt={`${currency} logo`} />
      <Box marginLeft="12px" color="#FFFFFF">
        {currency}
      </Box>
    </Box>
  )
}
