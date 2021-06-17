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
      width: (props: Props) => props.width || 92,
      height: (props: Props) => props.width || 36,
      fontSize: 14,
      fontWeight: 500,
      background: 'linear-gradient(96.37deg, #620AAB 18.99%, #221453 92.88%)',
      color: theme.palette.primary.contrastText,
      borderRadius: 49,
      transition: '.3s',
      '&:hover': {
        background: 'linear-gradient(96.37deg, #7433FF 18.99%, #221453 92.88%)',
      },
    },
    disabled: {
      background: 'linear-gradient(96.37deg, rgba(98, 10, 171, 0.4) 18.99%, rgba(34, 20, 83, 0.4) 92.88%)',
      color: '#464647',
    },
  })
)

export default function GradientButton(props: Props) {
  const { onClick, disabled } = props
  const classes = useStyles(props)

  return (
    <ButtonBase classes={{ ...classes }} onClick={onClick} disabled={disabled}>
      {props.children}
    </ButtonBase>
  )
}
