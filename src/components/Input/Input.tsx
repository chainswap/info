import React, { ChangeEvent } from 'react'
import { InputBase, Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/styles'
import InputLabel from '../InputLabel/InputLabel'

interface Props {
  placeholder?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  label?: string
  type?: string
  style?: React.CSSProperties
  disabled?: boolean
  focused?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: 16,
      color: '#FFFFFF',
      fontFamily: 'Roboto',
      fontWeight: 400,
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      height: 48,
      paddingLeft: 20,
      borderRadius: 14,
      border: '1px solid transparent',
    },
    focused: {
      border: '1px solid',
      borderColor: theme.palette.primary.main,
    },
    input: {
      '&::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
      },
      '&::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
      },
    },
    disabled: {
      color: theme.palette.primary.contrastText,
    },
  })
)

export default function Input(props: Props) {
  const classes = useStyles(props)

  return (
    <>
      {props.label && <InputLabel>{props.label}</InputLabel>}
      <InputBase
        fullWidth={true}
        {...props}
        classes={{ ...classes }}
        inputRef={(input) => input && props.focused && input.focus()}
      />
    </>
  )
}
