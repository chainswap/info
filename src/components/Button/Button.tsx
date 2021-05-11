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
  size?: 'small' | 'large'
}

const useStyles = makeStyles({
  root: {
    width: (props: Props) => (props.width ? props.width : '100%'),
    height: (props: Props) => (props.size === 'large' ? 48 : 32),
    background: '#9867FF',
    color: '#fff',
    textAlign: 'center',
    fontSize: (props: Props) => (props.size === 'large' ? 16 : 14),
    fontFamily: 'Roboto',
    fontWeight: 500,
    lineHeight: '21.36px',
    border: 'none',
    borderRadius: 49,
    outline: 'none',
    transition: '.3s',
    position: 'relative',
    '&:hover': {
      background: '#7433FF',
    },
    '& img': {
      marginRight: 12,
    },
  },
  disabled: {
    opacity: 0.6,
    cursor: 'auto',
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
