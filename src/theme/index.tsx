import React from 'react'
import { createMuiTheme, Theme, Typography } from '@material-ui/core'
import { styled } from '@material-ui/styles'

const Colors = {
  white: '#FFFFFF',
}

const theme: Theme = createMuiTheme({
  palette: {
    background: {
      default: '#131315',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
  typography: {
    h1: {
      fontWeight: 500,
      fontSize: 20,
      fontFamily: 'Futura PT',
      color: Colors.white,
      lineHeight: '29.74px',
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 18,
      fontFamily: 'Roboto',
      color: Colors.white,
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 12,
      fontFamily: 'Roboto',
      color: Colors.white,
    },
    body1: {
      fontWeight: 500,
      fontSize: 16,
      color: Colors.white,
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
      color: Colors.white,
    },
  },
})

interface TextProps {
  opacity?: number
}

const TextWrapper = styled(Typography)({
  opacity: (props: TextProps) => props.opacity,
})

export const TYPE = {
  header(props: any) {
    return <TextWrapper variant={'h1'} {...props} />
  },
  subheader(props: any) {
    return <TextWrapper variant={'subtitle1'} {...props} />
  },
  label(props: any) {
    return <TextWrapper variant={'subtitle2'} opacity={0.6} {...props} />
  },
  light(props: any) {
    return <TextWrapper variant={'body2'} {...props} />
  },
}

export default theme
