import React from 'react'
import { Box } from '@material-ui/core'

interface Props {
  logo: string
  text: string
}

export default function LogoText(props: Props) {
  const { logo, text } = props
  return (
    <Box display="flex">
      <img src={logo} alt={`${text} logo`} />
      <Box marginLeft="12px" color="#FFFFFF" fontSize="16px">
        {text}
      </Box>
    </Box>
  )
}
