import React from 'react'
import { Divider as MuiDivider, makeStyles, Theme } from '@material-ui/core'

interface Props {
  orientation?: 'horizontal' | 'vertical'
  solid?: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    border: 'none',
    height: (props: Props) => (props.orientation === 'vertical' ? '100%' : '1px'),
    backgroundColor: (props: Props) => (props.solid ? theme.textColor.text1 : theme.bgColor.bg4),
  },
}))

export default function Divider(props: Props) {
  const classes = useStyles(props)

  return <MuiDivider className={classes.root} {...props} />
}
