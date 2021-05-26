import React from 'react'
import { Checkbox } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

interface Props {
  checked: boolean
  onCheck: () => void
}

// Todo: style checkbox
const useStyles = makeStyles({
  root: {
    color: '#9C6DFF',
  },
})

export default function _Checkbox(props: Props) {
  const classes = useStyles(props)
  const { checked, onCheck } = props
  return <Checkbox classes={{ ...classes }} checked={checked} onChange={onCheck} />
}
