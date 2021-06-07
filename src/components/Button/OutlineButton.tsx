import React from 'react'
import { ButtonBase, Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'

interface Props {
  onClick?: () => void
  primary?: boolean
  children: React.ReactNode
  width?: string | number
  height?: string | number
  fontSize?: string
  disabled?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: (props: Props) => props.width || '100%',
      border: (props: Props) => `solid 1px ${props.primary ? theme.palette.primary.main : '#FFFFFF'}`,
      fontSize: (props: Props) => props.fontSize || 16,
      height: (props: Props) => props.height || 48,
      color: (props: Props) => (props.primary ? theme.palette.primary.main : '#FFFFFF'),
      borderRadius: 49,
      '&:hover': {
        color: theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark,
      },
    },
    disabled: {
      opacity: theme.palette.action.disabledOpacity,
    },
  })
)

export default function OutlineButton(props: Props) {
  const { onClick, disabled } = props
  const classes = useStyles(props)

  return (
    <ButtonBase className={classes.root} onClick={onClick} disabled={disabled}>
      {props.children}
    </ButtonBase>
  )
}
