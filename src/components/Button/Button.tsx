import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { ButtonBase } from '@material-ui/core'

interface Props {
  text: string
  onClick?: () => void
  primary?: boolean
  width?: string
  background?: string
  disabled?: boolean
}

const useStyles = makeStyles({
  root: {
    width: (props: Props) => (props.width ? props.width : '100%'),
    background: (props: Props) => (props.background ? props.background : '#9867FF'),
    height: 48,
    padding: '14px 24px',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 500,
    lineHeight: '21.36px',
    color: '#fff',
    border: 'none',
    borderRadius: 49,
    outline: 'none',
    transition: '.3s',
    '&:hover': {
      background: '#7433FF',
    },
  },
})

export default function Button(props: Props) {
  const { onClick, disabled } = props
  const classes = useStyles(props)
  return (
    <ButtonBase className={classes.root} onClick={onClick} disabled={disabled}>
      {props.text}
    </ButtonBase>
  )
}
