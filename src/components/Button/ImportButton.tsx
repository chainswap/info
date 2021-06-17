import React from 'react'
import { makeStyles, createStyles } from '@material-ui/styles'
import { ButtonBase, Theme } from '@material-ui/core'

interface Props {
  onClick?: () => void
  width?: string
  height?: string
  disabled?: boolean
  children?: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: (props: Props) => props.width || 84,
      height: (props: Props) => props.width || 36,
      fontSize: 14,
      fontWeight: 500,
      background: '#231938',
      color: theme.palette.primary.main,
      borderRadius: theme.shape.borderRadius,
      transition: '.3s',
      '&:hover': {
        background: '#3E276B',
      },
    },
    disabled: {
      background: '#1A1327',
      color: '#362757',
    },
  })
)

export default function ImportButton(props: Props) {
  const { onClick, disabled } = props
  const classes = useStyles(props)

  return (
    <ButtonBase classes={{ ...classes }} onClick={onClick} disabled={disabled}>
      {props.children}
    </ButtonBase>
  )
}
