import React from 'react'
import { makeStyles } from '@material-ui/styles'
import classes from '*.module.css'

interface Props {
  children: React.ReactNode
  width?: number
}

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: (props: Props) => props.width || 512,
    borderRadius: 32,
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%), #000000',
    justifyContent: 'center',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxSizing: 'border-box',
  },
})

export default function AppBody(props: Props) {
  const classes = useStyles(props)

  return <div className={classes.root}>{props.children}</div>
}
