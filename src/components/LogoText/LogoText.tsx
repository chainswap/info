import React from 'react'
import { Box } from '@material-ui/core'
import { Text } from 'rebass'

interface Props {
  logo: string
  text: string
  size?: 'small' | 'large'
}

export default function LogoText(props: Props) {
  const { logo, text, size } = props
  return (
    <Box display="flex" marginLeft={size == 'small' ? '8px' : '20px'}>
      <img src={logo} alt={`${text} logo`} />
      <Box marginLeft={size == 'small' ? '4px' : '12px'}>
        <Text fontSize={size == 'small' ? '13px' : '16px'}>{text}</Text>
      </Box>
    </Box>
  )
}
