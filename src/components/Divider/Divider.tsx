import React from 'react'
import { Divider as MuiDivider, makeStyles } from '@material-ui/core'

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
const useDefaultStyles = makeStyles((theme) => ({
  root: {
    border: 'none',
    height: '1px',
    backgroundColor: theme.bgColor.bg4,
    margin: (props: { margin?: string }) => props.margin,
  },
}))

export default function _Divider(props: Props) {
  const classes = useStyles(props)

  return <MuiDivider className={classes.root} orientation={props.orientation} />
}

export function Divider(props: { margin?: string }) {
  const classes = useDefaultStyles(props)

  return <MuiDivider className={classes.root} />
}
