import React from 'react'
import { InputLabel as MuiInputLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

interface Props {
  children?: React.ReactNode
}

const useStyles = makeStyles({
  root: {
    color: '#FFFFFF',
    opacity: 0.6,
    fontWeight: 400,
    fontSize: 12,
    height: 18,
  },
})

export default function InputLabel(props: Props) {
  const classes = useStyles(props)
  return <MuiInputLabel className={classes.root}> {props.children}</MuiInputLabel>
}
