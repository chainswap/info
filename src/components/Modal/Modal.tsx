import React from 'react'
import { Dialog, makeStyles } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import CloseIcon from '@material-ui/icons/Close'
import { Typography, Box } from '@material-ui/core'
import { TYPE } from '../../theme'

interface Props {
  isOpen: boolean
  onDismiss: () => void
  children?: React.ReactNode
  label?: string
  hideClose?: boolean
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
  marginTop: 24,
})

const CloseBox = styled('div')({
  position: 'absolute',
  right: 24,
  top: 24,
  color: '#FFFFFF',
  opacity: 0.6,
  '&:hover': {
    cursor: 'pointer',
  },
})

export default function Modal(props: Props) {
  const { isOpen, children, label, onDismiss, hideClose } = props
  const classes = useStyles(props)

  return (
    <>
      <Dialog
        open={isOpen}
        className={classes.root}
        PaperProps={{ className: classes.paper }}
        BackdropProps={{ className: classes.backdrop }}
      >
        <Box marginTop="24px">
          <TYPE.subheader textAlign={'center'}>{label}</TYPE.subheader>
        </Box>

        {!hideClose && (
          <CloseBox onClick={onDismiss}>
            <CloseIcon />
          </CloseBox>
        )}

        {children}
      </Dialog>
    </>
  )
}
