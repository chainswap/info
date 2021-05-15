import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { ButtonBase } from '@material-ui/core'

interface Props {
  onClick?: () => void
  children: React.ReactNode
  size?: string
}

const useStyles = makeStyles({
  root: {
    padding: 0,
    width: 'fit-content',
    background: 'none',
    textDecoration: 'none',
    color: '#9867FF',
    fontSize: (props: Props) => (props.size ? props.size : 16),
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
