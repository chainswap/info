import React from 'react'
import { createMuiTheme, Theme, Typography } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { Text } from 'rebass'

const theme: Theme = createMuiTheme({
  palette: {
    background: {
      default: '#131315',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
})

interface TextProps {
  opacity?: number
  align?: 'center' | 'left' | 'right' | 'justify'
}

const TextWrapper = styled(Text)({
  opacity: (props: TextProps) => props.opacity,
  textAlign: (props: TextProps) => props.align,
})

export const TYPE = {
  header(props: any) {
    return <TextWrapper fontWeight={500} fontSize={20} fontFamily={'Futura PT'} textAlign="center" {...props} />
  },
  subheader(props: any) {
    return <TextWrapper fontWeight={400} fontSize={18} align={'center'} {...props} />
  },
  label(props: any) {
    return <TextWrapper fontWeight={400} fontSize={12} opacity={0.6} {...props} />
  },
  light(props: any) {
    return <TextWrapper fontWeight={400} fontSize={14} {...props} />
  },
}

export default theme
