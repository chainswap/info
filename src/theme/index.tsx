import { createMuiTheme, Theme, styled, useTheme } from '@material-ui/core'
import { Text, TextProps } from 'rebass'

interface TextColor {
  '1': string
  '2': string
  '3': string
  '4': string
  '5': string
}
declare module '@material-ui/core/styles/createMuiTheme' {
  interface ThemeOptions {
    textColor?: TextColor
  }
  interface Theme {
    textColor?: TextColor
  }
}

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
  textColor: {
    '1': '#FFFFFF',
    '2': '#CCCCCC',
    '3': '#999999',
    '4': '#727272',
    '5': '#333333',
  },
})

export default theme

const TextWrapper = ({ textColor, ...props }: TextProps & { textColor?: keyof TextColor }) => {
  const theme = useTheme()
  return <Text {...props} color={textColor ? theme?.textColor?.[textColor] : undefined} />
}

export const TYPE = {
  body(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={16} textColor={'1'} {...props} />
  },
  largeHeader(props: TextProps) {
    return <TextWrapper fontWeight={600} fontSize={24} {...props} fontFamily="Futura PT" />
  },
  mediumHeader(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={22} {...props} fontFamily="Futura PT" />
  },
  smallHeader(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={16} {...props} fontFamily="Futura PT" />
  },
  small(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={12} {...props} />
  },
  medium(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={14} {...props} />
  },
  smallGray(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={12} textColor={'3'} {...props} />
  },
}
