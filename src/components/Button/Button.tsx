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
  size?: 'small' | 'large'
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: (props: Props) => props.width || '100%',
      height: (props: Props) => props.height || 48,
      fontSize: (props: Props) => (props.size === 'large' ? 16 : 14),
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      fontWeight: 500,
      borderRadius: 49,
      transition: '.3s',
      '&:hover': {
        background: theme.palette.primary.dark,
      },
    },
    disabled: {
      opacity: theme.palette.action.disabledOpacity,
    },
  })
)

export default function Button(props: Props) {
  const { onClick, disabled } = props
  const classes = useStyles(props)

  return (
    <ButtonBase classes={{ ...classes }} onClick={onClick} disabled={disabled}>
      {props.children}
    </ButtonBase>
  )
}
