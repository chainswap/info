import React from 'react'
import { makeStyles, createStyles } from '@material-ui/styles'
import { ButtonBase, Theme } from '@material-ui/core'

interface Props {
  onClick?: () => void
  width?: string
  height?: string
  background?: string
  disabled?: boolean
  color?: string
  children?: React.ReactNode
  fontSize?: string
  classname?: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: (props: Props) => props.width || '100%',
      height: (props: Props) => props.height || 60,
      fontSize: (props: Props) => props.fontSize || 16,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      fontWeight: 500,
      borderRadius: theme.shape.borderRadius,
      transition: '.3s',
      '&:hover': {
        background: theme.palette.primary.dark,
      },
    },
    disabled: {
      opacity: theme.palette.action.disabledOpacity,
      backgroundColor: theme.palette.primary.light,
      color: '#464647',
    },
  })
)

export default function Button(props: Props) {
  const { onClick, disabled, classname } = props
  const classes = useStyles(props)

  return (
    <ButtonBase classes={{ ...classes }} onClick={onClick} disabled={disabled} className={classname}>
      {props.children}
    </ButtonBase>
  )
}
