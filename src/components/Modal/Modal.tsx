import React from 'react'
import { Dialog, makeStyles } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import DummyLogo from '../../assets/images/dummy_logo.png'

interface Props {
  isOpen: boolean
  onDismiss: () => void
  children?: React.ReactNode
  label?: string
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
    padding: '24px 30px',
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
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 20,
})

const CloseIcon = styled('div')({
  position: 'absolute',
  right: 24,
  top: 24,
  '&:hover': {
    cursor: 'pointer',
    opacity: 0.6,
  },
})

export default function Modal(props: Props) {
  const { isOpen, children, label } = props
  const classes = useStyles(props)

  return (
    <>
      <Dialog
        open={isOpen}
        className={classes.root}
        PaperProps={{ className: classes.paper }}
        BackdropProps={{ className: classes.backdrop }}
      >
        <DialogTitle>{label}</DialogTitle>
        <CloseIcon onClick={props.onDismiss}>
          <img src={DummyLogo} alt="close-icon" />
        </CloseIcon>
        {children}
      </Dialog>
    </>
  )
}
