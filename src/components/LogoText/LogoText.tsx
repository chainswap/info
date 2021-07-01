import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Text } from 'rebass'
import Image from '../Image/Image'

interface Props {
  logo: string
  text: string
  fontWeight?: number
  fontSize?: number
  size?: 'small' | 'large'
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: (props: { fontWeight?: number }) => props.fontWeight || 400,
    fontSize: (props: { fontSize?: number }) => props.fontSize || 16,
    '& img': {
      marginRight: (props: Props) => (props.size === 'small' ? '4px' : '12px'),
    },
  },
})

export default function LogoText(props: Props) {
  const classes = useStyles(props)
  const { logo, text, size } = props
  return (
    <div className={classes.root}>
      <Image src={logo} alt={`${text} logo`} />
      <Text fontSize={size}>{text}</Text>
    </div>
  )
}
