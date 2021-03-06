import React from 'react'
import { InputLabel as MuiInputLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { ReactComponent as InfoIcon } from '../../assets/images/info_icon.svg'

interface Props {
  children?: React.ReactNode
  infoIcon?: boolean
}

const useStyles = makeStyles({
  root: {
    color: '#FFFFFF',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    opacity: 0.6,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '148.69%',
  },
  icon: {
    marginLeft: 4,
    cursor: 'pointer',
  },
})

export default function InputLabel(props: Props) {
  const classes = useStyles(props)
  const { children, infoIcon } = props

  return (
    <MuiInputLabel className={classes.root}>
      <div className={classes.label}>{children}</div>
      {infoIcon && <InfoIcon className={classes.icon} />}
    </MuiInputLabel>
  )
}
