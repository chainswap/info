import React, { ChangeEvent } from 'react'
import { InputBase, makeStyles } from '@material-ui/core'

interface Props {
  placeholder?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const useStyles = makeStyles({
  root: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontWeight: 500,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    height: 48,
    paddingLeft: 20,
    borderRadius: 14,
  },
})

export default function Input(props: Props) {
  const classes = useStyles(props)
  return <InputBase fullWidth={true} {...props} classes={{ ...classes }} />
}
