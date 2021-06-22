import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import TextButton from 'components/Button/TextButton'
import { ReactComponent as ArrowLeft } from 'assets/images/arrow_left.svg'
import { TYPE } from 'theme'

interface Props {
  children: React.ReactNode
  width?: number
  onReturnClick?: () => void
  title?: string
}

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: (props: { width?: number }) => props.width || 560,
    borderRadius: 20,
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%), #000000',
    justifyContent: 'center',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxSizing: 'border-box',
    overflow: 'auto',
  },
})

export default function AppBody({ onReturnClick, title, children, ...props }: Props) {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      {(onReturnClick || title) && (
        <Box display="flex" justifyContent="space-between" padding="20px 40px">
          <TextButton onClick={onReturnClick}>
            <ArrowLeft />
          </TextButton>

          {title && <TYPE.largeHeader>{title}</TYPE.largeHeader>}
          <div />
        </Box>
      )}
      {children}
    </div>
  )
}
