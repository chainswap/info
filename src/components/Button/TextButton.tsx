import React from 'react'
import { makeStyles, createStyles } from '@material-ui/styles'
import { ButtonBase, Theme } from '@material-ui/core'
interface Props {
  onClick?: () => void
  children: React.ReactNode
  fontSize?: number
  fontWeight?: number
  primary?: boolean
  underline?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textDecoration: (props: Props) => (props.underline ? 'underline' : 'none'),
      color: (props: Props) => (props.primary ? theme.palette.primary.main : theme.palette.primary.contrastText),
      fontSize: (props: Props) => props.fontSize || 16,
      fontWeight: (props: Props) => props.fontWeight || 500,
    },
  })
)

export default function TextButton(props: Props) {
  const { onClick } = props
  const classes = useStyles(props)
  return (
    <ButtonBase classes={{ ...classes }} onClick={onClick}>
      {props.children}
    </ButtonBase>
  )
}