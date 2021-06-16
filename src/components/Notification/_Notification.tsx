import React, { useCallback } from 'react'
import { Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import { ReactComponent as InfoIcon } from '../../assets/images/notification_info.svg'
import { ReactComponent as SuccessIcon } from '../../assets/images/notification_success.svg'
import { ReactComponent as ErrorIcon } from '../../assets/images/notification_error.svg'
import { ReactComponent as WarningIcon } from '../../assets/images/notification_warning.svg'
import { TYPE } from '../../theme/index'

enum Type {
  INFO = 'info',
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
}

interface Props {
  type: Type
  message: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    notification: {
      borderRadius: 8,
      border: (props: Props) =>
        `1px solid ${
          props.type === Type.INFO
            ? theme.palette.info
            : props.type === Type.SUCCESS
            ? theme.palette.success
            : props.type === Type.ERROR
            ? theme.palette.error
            : theme.palette.warning
        }`,
    },
  })
)

export default function Notification(props: Props) {
  const classes = useStyles(props)
  const { type, message } = props

  const getIcon = useCallback(() => {}, [])

  return (
    <div className={classes.notification}>
      {type === Type.INFO ? (
        <InfoIcon />
      ) : props.type === Type.SUCCESS ? (
        <SuccessIcon />
      ) : props.type === Type.ERROR ? (
        <ErrorIcon />
      ) : (
        <WarningIcon />
      )}
      <TYPE.notification>{message}</TYPE.notification>
    </div>
  )
}
