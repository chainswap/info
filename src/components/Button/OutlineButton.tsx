import React from 'react'
import { ButtonBase, makeStyles } from '@material-ui/core'

interface Props {
  onClick?: () => void
  primary?: boolean
  children: React.ReactNode
  width?: string
}

const useStyles = makeStyles({
  root: {
    width: (props: Props) => (props.width ? props.width : '100%'),
    border: (props: Props) => (props.primary ? 'solid 1px #9867FF' : 'solid 1px #fff'),
    fontSize: (props: Props) => (props.primary ? '16' : '14'),
    color: (props: Props) => (props.primary ? '#9867FF' : '#fff'),
    padding: '14px 24px',
    borderRadius: 49,
  },
})

export default function OutlineButton(props: Props) {
  const classes = useStyles(props)

  return (
    <ButtonBase className={classes.root} onClick={props.onClick}>
      {props.children}
    </ButtonBase>
  )
}
