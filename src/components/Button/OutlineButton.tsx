import React from 'react'
import { ButtonBase, makeStyles } from '@material-ui/core'

interface Props {
  onClick?: () => void
  primary?: boolean
  children: React.ReactNode
  width?: string
  height?: string
  size?: 'small' | 'large'
  disabled?: boolean
}

const useStyles = makeStyles({
  root: {
    width: (props: Props) => (props.width ? props.width : '100%'),
    border: (props: Props) => (props.primary ? 'solid 1px #9867FF' : 'solid 1px #fff'),
    fontSize: (props: Props) => (props.size === 'large' ? '16px' : '14px'),
    height: (props: Props) => (props.height ? props.height : '48px'),
    color: (props: Props) => (props.primary ? '#9867FF' : '#fff'),
    padding: '14px 24px',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 500,
    borderRadius: 49,
    '& img': {
      marginRight: 20,
    },
    '&:hover': {
      color: '#9867FF',
      border: 'solid 1px #9867FF',
    },
  },
  disabled: {
    opacity: 0.4,
  },
})

export default function OutlineButton(props: Props) {
  const { onClick, disabled } = props
  const classes = useStyles(props)

  return (
    <ButtonBase className={classes.root} onClick={onClick} disabled={disabled}>
      {props.children}
    </ButtonBase>
  )
}
