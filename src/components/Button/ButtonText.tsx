import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { ButtonBase } from '@material-ui/core'
interface Props {
  onClick?: () => void
  children: React.ReactNode
  fontSize?: string
  fontWeight?: number
  primary?: boolean
  underline?: boolean
}

const useStyles = makeStyles({
  root: {
    padding: 0,
    width: 'fit-content',
    background: 'none',
    textDecoration: (props: Props) => (props.underline ? 'underline' : 'none'),
    color: (props: Props) => (props.primary ? '#9867FF' : '#FFFFFF'),
    fontSize: (props: Props) => (props.fontSize ? props.fontSize : 16),
    fontWeight: (props: Props) => (props.fontWeight ? props.fontWeight : 500),
  },
})

export default function ButtonText(props: Props) {
  const { onClick } = props
  const classes = useStyles(props)
  return (
    <ButtonBase classes={{ ...classes }} onClick={onClick}>
      {props.children}
    </ButtonBase>
  )
}
