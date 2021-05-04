import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { ButtonBase } from '@material-ui/core'

interface Props {
  onClick?: () => void
  width?: string
  background?: string
  disabled?: boolean
  color?: string
  children?: React.ReactNode
  primary?: boolean
}

const useStyles = makeStyles({
  root: {
    width: (props: Props) => (props.width ? props.width : '100%'),
    background: '#9867FF',
    color: '#fff',
    height: 48,
    padding: '14px 24px',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 500,
    lineHeight: '21.36px',
    border: 'none',
    borderRadius: 49,
    outline: 'none',
    transition: '.3s',
    '&:hover': {
      background: '#7433FF',
    },
    '& img': {
      marginRight: 12,
    },
  },
  disabled: {
    opacity: 0.6,
  },
})

export default function Button(props: Props) {
  const { onClick, disabled } = props
  const classes = useStyles(props)
  return (
    <ButtonBase classes={{ ...classes }} onClick={onClick} disabled={disabled}>
      {props.children}
    </ButtonBase>
  )
}
