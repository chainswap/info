import React, { ChangeEvent } from 'react'
import { makeStyles } from '@material-ui/styles'
import { NativeSelect } from '@material-ui/core'

interface Props {
  children: React.ReactNode
  // onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  defaultValue: any
  disabled?: boolean
}

const useStyles = makeStyles({
  root: {
    width: 176,
    height: 46,
    borderRadius: 14,
    boxSizing: 'border-box',
    backgroundColor: '#1f1f1f',
    color: '#FFFFFF',
    padding: '14px 20px 14px 20px',
    cursor: (props: Props) => (props.disabled ? 'cursor' : 'pointer'),
  },
  icon: {
    right: 15,
    color: '#FFFFFF',
    display: (props: Props) => (props.disabled ? 'none' : 'block'),
  },
})

export default function Select(props: Props) {
  const classes = useStyles(props)

  return (
    <NativeSelect
      disableUnderline
      classes={{ root: classes.root, icon: classes.icon }}
      defaultValue={props.defaultValue}
      disabled={props.disabled}
    >
      {props.children}
    </NativeSelect>
  )
}
