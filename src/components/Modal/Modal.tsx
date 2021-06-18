import React from 'react'
import { Dialog, makeStyles, Theme, Box } from '@material-ui/core'
import { styled, createStyles } from '@material-ui/styles'
import CloseIcon from '@material-ui/icons/Close'
import useModal from '../../hooks/useModal'
import { TYPE } from '../../theme/index'
import { useOnClickOutside } from 'hooks/useOnClickOutside'
import { useRef } from 'react'
import TextButton from 'components/Button/TextButton'
import { ReactComponent as ArrowLeft } from 'assets/images/arrow_left.svg'

interface Props {
  children?: React.ReactNode
  label?: string
  showIcon?: boolean
  width?: string
  onReturnClick?: () => void
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
      position: 'absolute',
      top: `calc(${theme.height.header} + 80px)`,
    },
    backdrop: {
      backgroundColor: 'rgba(0,0,0,.8)',
    },
  })
)

// const CloseBtn = styled('div')({
//   position: 'absolute',
//   right: 30,
//   top: 24,
//   color: '#FFFFFF',
//   opacity: 0.6,
//   zIndex: 999,
//   '&:hover': {
//     cursor: 'pointer',
//   },
// })

export default function Modal(props: Props) {
  const { children, label, showIcon, onReturnClick } = props
  const classes = useStyles(props)
  const { isOpen, hideModal } = useModal()
  const node = useRef<any>()
  useOnClickOutside(node, hideModal)

  return (
    <>
      <Dialog
        open={isOpen}
        className={classes.root}
        PaperProps={{ className: classes.paper, ref: node }}
        BackdropProps={{ className: classes.backdrop }}
      >
        {onReturnClick ||
          showIcon ||
          (label && (
            <Box display="flex" justifyContent="space-between" alignItems="center" padding="20px 40px">
              {onReturnClick ? (
                <TextButton onClick={onReturnClick}>
                  <ArrowLeft />
                </TextButton>
              ) : (
                <Box width="24px" />
              )}
              {label && <TYPE.mediumHeader textAlign="center">{label}</TYPE.mediumHeader>}
              {showIcon ? (
                <TextButton onClick={hideModal}>
                  <CloseIcon />
                </TextButton>
              ) : (
                <Box width="24px" />
              )}
            </Box>
          ))}

        {children}
      </Dialog>
    </>
  )
}
