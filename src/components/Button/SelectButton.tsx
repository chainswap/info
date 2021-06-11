import React from 'react'
import { Theme, ButtonBase } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

interface Props {
  onClick?: () => void
  width?: string
  height?: string
  children?: React.ReactNode
  primary?: boolean
  disabled?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: (props: Props) => props.width || 160,
      height: (props: Props) => props.height || 48,
      backgroundColor: (props: Props) => (props.primary ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.08)'),
      color: theme.palette.primary.contrastText,
      fontSize: 16,
      fontWeight: 500,
      borderRadius: 14,
      transition: '.3s',
      padding: '0 15.67px 0 20px',
      '&:hover': {
        background: (props: Props) => (props.primary ? theme.palette.primary.dark : theme.palette.primary.main),
      },
      display: 'flex',
      justifyContent: 'space-between',
    },
    disabled: {
      opacity: theme.palette.action.disabledOpacity,
    },
  })
)

export default function SelectButton(props: Props) {
  const { onClick, disabled } = props
  const classes = useStyles(props)

  return (
    <ButtonBase classes={{ root: classes.root, disabled: classes.disabled }} onClick={onClick} disabled={disabled}>
      {props.children}
      <ExpandMoreIcon />
    </ButtonBase>
  )
}
