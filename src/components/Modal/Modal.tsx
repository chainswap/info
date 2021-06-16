import React from 'react'
import { Dialog, makeStyles, Theme } from '@material-ui/core'
import { styled, createStyles } from '@material-ui/styles'
import CloseIcon from '@material-ui/icons/Close'
import useModal from '../../hooks/useModal'
import { TYPE } from '../../theme/index'

interface Props {
  children?: React.ReactNode
  label?: string
  showIcon?: boolean
  width?: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      width: (props: Props) => props.width || 480,
      background: theme.bgColor.bg1,
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxSizing: 'border-box',
      borderRadius: 20,
      overflowX: 'hidden',
    },
    backdrop: {
      backgroundColor: 'rgba(0,0,0,.8)',
    },
  })
)

const CloseBtn = styled('div')({
  position: 'absolute',
  right: 30,
  top: 24,
  color: '#FFFFFF',
  opacity: 0.6,
  zIndex: 999,
  '&:hover': {
    cursor: 'pointer',
  },
})

export default function Modal(props: Props) {
  const { children, label, showIcon } = props
  const classes = useStyles(props)
  const { isOpen, hideModal } = useModal()

  return (
    <>
      <Dialog
        open={isOpen}
        className={classes.root}
        PaperProps={{ className: classes.paper }}
        BackdropProps={{ className: classes.backdrop }}
      >
        {label && (
          <TYPE.mediumHeader textAlign="center" marginTop="24px">
            {label}
          </TYPE.mediumHeader>
        )}
        {showIcon && (
          <CloseBtn onClick={hideModal}>
            <CloseIcon />
          </CloseBtn>
        )}
        {children}
      </Dialog>
    </>
  )
}
