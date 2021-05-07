import React from 'react'
import { Dialog, makeStyles } from '@material-ui/core'
import { styled } from '@material-ui/styles'

interface Props {
  isOpen: boolean
  // onDismiss: () => void
  children?: React.ReactNode
}

const useStyles = makeStyles({
  root: {},
  paper: {
    background:
      '#000 linear-gradient(283.31deg,hsla(0,0%,100%,.18) -2.53%,hsla(0,0%,100%,.17) 18.66%,hsla(0,0%,100%,0) 98.68%)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxSizing: 'border-box',
    borderRadius: 42,
    width: 480,
    paddingTop: '24px 30px',
  },
  backdrop: {
    backgroundColor: 'rgba(0,0,0,.8)',
  },
})

const DialogTitle = styled('div')({
  color: '#FFFFFF',
  fontFamily: 'Roboto',
  fontWeight: 400,
  fontSize: 18,
  lineHeight: '26.76px',
})

export default function Modal(props: Props) {
  const { isOpen, children } = props
  const classes = useStyles(props)

  return (
    <Dialog
      open={isOpen}
      className={classes.root}
      PaperProps={{ className: classes.paper }}
      BackdropProps={{ className: classes.backdrop }}
    >
      {children}
    </Dialog>
  )
}
