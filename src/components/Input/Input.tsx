import React, { ChangeEvent } from 'react'
import { InputBase, Theme, Box } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/styles'
import InputLabel from '../InputLabel/InputLabel'
import { TYPE } from 'theme/index'

interface Props {
  placeholder?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  label?: string
  disabled?: boolean
  focused?: boolean
  outlined?: boolean
  type?: string
  info?: string
  height?: string | number
  width?: string | number
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: 16,
      color: '#FFFFFF',
      fontFamily: 'Roboto',
      fontWeight: 400,
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      height: (props: Props) => props.height || 48,
      paddingLeft: 20,
      borderRadius: 14,
      border: (props: Props) => `1px solid ${props.outlined ? 'rgba(255,255,255,.4)' : 'transparent'}`,
    },
    focused: {
      border: `1px solid ${theme.palette.primary.main} !important`,
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
      color: 'rgba(255,255,255,0.24)',
      cursor: 'not-allowed',
      backgroundColor: theme.gray.dark,
    },
    formControl: {
      width: (props: Props) => props.width || '100%',
    },
  })
)

export default function Input(props: Props) {
  const classes = useStyles(props)
  const { focused, placeholder, onChange, value, disabled, type, label, info } = props

  return (
    <div className={classes.formControl}>
      <Box display="flex" justifyContent="space-between">
        {label && <InputLabel>{props.label}</InputLabel>}
        {info ? <TYPE.mediumGray>{info}</TYPE.mediumGray> : <div />}
      </Box>
      <InputBase
        fullWidth={true}
        placeholder={placeholder}
        classes={{ ...classes }}
        inputRef={(input) => input && focused && input.focus()}
        onChange={onChange}
        value={value}
        disabled={disabled}
        type={type}
      />
    </div>
  )
}
