import React, { ChangeEvent } from 'react'
import { InputBase, makeStyles } from '@material-ui/core'
import InputLabel from '../InputLabel/InputLabel'

interface Props {
  placeholder?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  label?: string
  type?: string
  style?: React.CSSProperties
}

const useStyles = makeStyles({
  root: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontWeight: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    height: 48,
    paddingLeft: 20,
    borderRadius: 14,
  },
  focused: {
    border: '1px solid #9867FF',
  },
  input: {
    '&::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
    },
    '&::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
    },
  },
})

export default function Input(props: Props) {
  const classes = useStyles(props)

  return (
    <>
      {props.label && <InputLabel>{props.label}</InputLabel>}
      <InputBase fullWidth={true} {...props} classes={{ ...classes }} />
    </>
  )
}
