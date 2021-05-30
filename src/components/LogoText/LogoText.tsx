import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Text } from 'rebass'
import Image from '../Image/Image'

interface Props {
  logo: string
  text: string
  size?: 'small' | 'large'
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
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
      <Text fontSize={size == 'small' ? '13px' : '16px'}>{text}</Text>
    </div>
  )
}
