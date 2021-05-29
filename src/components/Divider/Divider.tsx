import React from 'react'
import { Divider, makeStyles } from '@material-ui/core'

interface Props {
  margin: string
  orientation: 'horizontal' | 'vertical'
  opacity?: number
}

const useStyles = makeStyles({
  root: {
    border: 'none',
    height: (props: Props) => (props.orientation === 'horizontal' ? '1px' : '100%'),
    backgroundColor: '#FFFFFF',
    opacity: (props: Props) => props.opacity || 0.2,
    margin: (props: Props) => props.margin,
  },
})

export default function _Divider(props: Props) {
  const classes = useStyles(props)

  return <Divider className={classes.root} orientation={props.orientation} />
}
