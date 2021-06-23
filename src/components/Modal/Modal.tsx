import React from 'react'
import { Dialog, makeStyles, Theme, Box, IconButton } from '@material-ui/core'
import { createStyles } from '@material-ui/styles'
import CloseIcon from '@material-ui/icons/Close'
import useModal from '../../hooks/useModal'
import { TYPE } from '../../theme/index'
import { useOnClickOutside } from 'hooks/useOnClickOutside'
import { useRef } from 'react'
import { ReactComponent as ArrowLeft } from 'assets/images/arrow_left.svg'
import useBreakpoint from 'hooks/useBreakpoint'

interface Props {
  children?: React.ReactNode
  title?: string
  closeIcon?: boolean
  returnIcon?: boolean
  width?: string
  onReturnClick?: () => void
  isCardOnMobile?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    mobileRoot: {
      '& .MuiDialog-scrollPaper': {
        [theme.breakpoints.down('sm')]: {
          alignItems: 'flex-end',
        },
      },
    },
    paper: {
      width: (props: Props) => props.width || 480,
      background: theme.bgColor.bg1,
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxSizing: 'border-box',
      borderRadius: 20,
      overflowX: 'hidden',
      position: 'absolute',
      [theme.breakpoints.down('sm')]: {
        width: 'calc(100% - 32px)!important',
      },
    },
    mobilePaper: {
      [theme.breakpoints.down('sm')]: {
        border: 'none',
        borderTop: '1px solid ' + theme.bgColor.bg4,
        width: '100%!important',
        height: `calc(100% - ${theme.height.mobileHeader})`,
        margin: 0,
        paddingBottom: '30px',
        borderRadius: 0,
      },
    },
    backdrop: {
      backgroundColor: 'rgba(0,0,0,.8)',
    },
    mobileBackdrop: {
      [theme.breakpoints.down('sm')]: {
        background: 'none',
      },
    },
    closeIconContainer: {
      padding: 0,
      '&:hover $closeIcon': {
        color: theme.textColor.text1,
      },
    },
    closeIcon: {
      color: theme.textColor.text3,
    },
  })
)

export default function Modal(props: Props) {
  const { children, title, closeIcon, isCardOnMobile, returnIcon, onReturnClick } = props
  const classes = useStyles(props)
  const { matches } = useBreakpoint()
  const { isOpen, hideModal } = useModal()
  const node = useRef<any>()
  useOnClickOutside(node, hideModal)

  return (
    <>
      <Dialog
        open={isOpen}
        className={`${classes.root}${isCardOnMobile ? ' ' + classes.mobileRoot : ''}`}
        PaperProps={{ className: `${classes.paper}${isCardOnMobile ? ' ' + classes.mobilePaper : ''}`, ref: node }}
        BackdropProps={{ className: `${classes.backdrop}${isCardOnMobile ? ' ' + classes.mobileBackdrop : ''}` }}
      >
        {(returnIcon || closeIcon || title || onReturnClick) && (
          <Box display="flex" justifyContent="space-between" alignItems="center" padding="20px 30px">
            {(returnIcon && !matches) || onReturnClick ? (
              <IconButton onClick={onReturnClick ?? hideModal}>
                <ArrowLeft />
              </IconButton>
            ) : (
              <Box width="24px" />
            )}
            {title && <TYPE.mediumHeader textAlign="center">{title}</TYPE.mediumHeader>}
            {closeIcon || (returnIcon && matches) ? (
              <IconButton className={classes.closeIconContainer} onClick={hideModal}>
                <CloseIcon className={classes.closeIcon} />
              </IconButton>
            ) : (
              <Box width="24px" />
            )}
          </Box>
        )}
        {children}
      </Dialog>
    </>
  )
}
