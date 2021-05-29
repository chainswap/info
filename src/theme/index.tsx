import React from 'react'
import { createMuiTheme, Theme } from '@material-ui/core'
import { Text, TextProps } from 'rebass'

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9867FF',
      dark: '#7433FF',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#131315',
    },
    text: {
      primary: '#FFFFFF',
    },
    action: {
      disabledOpacity: 0.6,
    },
  },
})

export default theme
