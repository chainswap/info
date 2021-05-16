import React from 'react'
import { createMuiTheme, Theme, Typography } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { Text, TextProps } from 'rebass'

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

export const TYPE = {
  header(props: TextProps) {
    return <Text fontWeight={500} fontSize={20} fontFamily={'Futura PT'} {...props} />
  },
  smallheader(props: TextProps) {
    return <Text fontWeight={500} fontSize={18} {...props} />
  },
  subheader(props: TextProps) {
    return <Text fontWeight={400} fontSize={18} {...props} />
  },
  label(props: TextProps) {
    return <Text fontWeight={400} fontSize={12} opacity={0.6} {...props} />
  },
  light(props: TextProps) {
    return <Text fontWeight={400} fontSize={14} {...props} />
  },
}

export default theme
