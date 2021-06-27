import { unstable_createMuiStrictModeTheme as createMuiTheme, Theme, useTheme, styled } from '@material-ui/core'
import { Text, TextProps } from 'rebass'

interface TextColor {
  text1: string
  text2: string
  text3: string
  text4: string
  text5: string
  primary: string
}

interface BgColor {
  bg1: string
  bg2: string
  bg3: string
  bg4: string
  bg5: string
}

interface Gradient {
  gradient1: string
}

interface Height {
  header: string
  mobileHeader: string
}

interface Gray {
  main: string
  dark: string
}
declare module '@material-ui/core/styles/createMuiTheme' {
  interface ThemeOptions {
    textColor: TextColor
    bgColor: BgColor
    gradient: Gradient
    height: Height
    gray: Gray
  }
  interface Theme {
    textColor: TextColor
    bgColor: BgColor
    gradient: Gradient
    height: Height
    gray: Gray
  }
}

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      light: '#2E2247',
      main: '#9867FF',
      dark: '#7433FF',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#1D152D',
      main: '#211735',
      dark: '#3E276B',
      contrastText: '#9867FF',
    },
    error: {
      main: '#F53030',
    },
    warning: {
      main: '#9867FF',
    },
    info: {
      main: '#9867FF',
    },
    success: {
      main: '#2DAB50',
    },
    background: {
      default: '#131315',
    },
    text: {
      primary: '#FFFFFF',
    },
    action: {
      disabledOpacity: 0.8,
    },
  },
  textColor: {
    text1: '#FFFFFF',
    text2: '#CCCCCC',
    text3: '#999999',
    text4: '#727272',
    text5: '#333333',
    primary: '#9867FF',
  },
  bgColor: {
    bg1: '#000000',
    bg2: '#191919',
    bg3: '#252525',
    bg4: '#303030',
    bg5: '#A1A1A1',
  },
  gradient: {
    gradient1: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%), #000000',
  },
  height: {
    header: '88px',
    mobileHeader: '77px',
  },
  shape: {
    borderRadius: 10,
  },
  gray: {
    main: '#333333',
    dark: '#262626',
  },
})

export default theme

const TextWrapper = ({ textColor, ...props }: TextProps & { textColor?: keyof TextColor }) => {
  const theme = useTheme()
  return <Text {...props} color={textColor ? theme.textColor[textColor as keyof TextColor] : undefined} />
}

export const TYPE = {
  body(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={16} textColor="text1" {...props} />
  },
  bold(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={16} textColor="text1" {...props} />
  },
  largeBold(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={26} {...props} />
  },
  primary(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={16} textColor="primary" {...props} />
  },
  largeHeader(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={28} {...props} fontFamily="Futura PT" />
  },
  mediumHeader(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={22} {...props} fontFamily="Futura PT" />
  },
  smallHeader(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={16} {...props} fontFamily="Futura PT" />
  },
  header(props: TextProps) {
    return <TextWrapper fontWeight={500} {...props} fontFamily="Futura PT" />
  },
  small(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={12} {...props} />
  },
  medium(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={14} {...props} />
  },
  large(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={18} {...props} />
  },
  extremeLarge(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={40} {...props} />
  },
  smallGray(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={12} textColor="text3" {...props} />
  },
  extraSmallGray(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={10} textColor="text3" {...props} />
  },
  mediumGray(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={14} textColor="text3" {...props} />
  },
  mediumLightGray(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={14} textColor="text4" {...props} />
  },
  gray(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={16} textColor="text3" {...props} />
  },
  notification(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={13} textColor="text1" {...props} />
  },
}

export const HideOnMobile = styled('div')(({ theme, breakpoint }: { theme: Theme; breakpoint?: 'sm' | 'md' }) => ({
  [theme.breakpoints.down(breakpoint ?? 'md')]: {
    display: 'none',
  },
}))

export const ShowOnMobile = styled('div')(({ theme, breakpoint }: { theme: Theme; breakpoint?: 'sm' | 'md' }) => ({
  display: 'none',
  [theme.breakpoints.down(breakpoint ?? 'md')]: {
    display: 'block',
  },
}))
