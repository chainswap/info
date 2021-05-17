import React from 'react'
import { createMuiTheme, Theme } from '@material-ui/core'
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
  Header(props: TextProps) {
    return <Text fontWeight={500} fontSize={20} fontFamily={'Futura PT'} {...props} />
  },
  Smallheader(props: TextProps) {
    return <Text fontWeight={500} fontSize={18} {...props} />
  },
  Subheader(props: TextProps) {
    return <Text fontWeight={400} fontSize={18} {...props} />
  },
  Label(props: TextProps) {
    return <Text fontWeight={400} fontSize={12} opacity={0.6} {...props} />
  },
}

export default theme
