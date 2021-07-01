import React from 'react'
import { X } from 'react-feather'
import { Box, makeStyles } from '@material-ui/core'
import TextButton from 'components/Button/TextButton'
import { ReactComponent as ArrowLeft } from 'assets/images/arrow_left.svg'
import { TYPE } from 'theme'
import useBreakpoint from 'hooks/useBreakpoint'

interface Props {
  children?: React.ReactNode
  width?: number
  height?: number
  onReturnClick?: () => void
  title?: string
  titleCenter?: boolean
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: (props: { width?: number }) => props.width || 560,
    height: (props: Props) => props.height,
    borderRadius: 20,
    background: theme.bgColor.bg1,
    justifyContent: 'center',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxSizing: 'border-box',
    // overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%!important',
    },
  },
  box: {
    padding: '20px 40px',
    [theme.breakpoints.down('sm')]: {
      padding: 20,
    },
  },
}))

export default function AppBody({ onReturnClick, title, children, titleCenter, ...props }: Props) {
  const classes = useStyles(props)
  const { matches } = useBreakpoint()

  return (
    <div className={classes.root}>
      {(onReturnClick || title) && (
        <Box display="flex" justifyContent="space-between" className={classes.box}>
          {onReturnClick && !matches && (
            <TextButton onClick={onReturnClick}>
              <ArrowLeft />
            </TextButton>
          )}

          {titleCenter && <div />}

          {title && <TYPE.mediumHeader>{title}</TYPE.mediumHeader>}

          {onReturnClick && matches ? (
            <TextButton onClick={onReturnClick}>
              <X />
            </TextButton>
          ) : (
            <div />
          )}
        </Box>
      )}
      {children}
    </div>
  )
}
