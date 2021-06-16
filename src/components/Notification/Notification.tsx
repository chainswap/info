import React, { useCallback } from 'react'
import { Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import { ReactComponent as InfoIcon } from '../../assets/images/notification_info.svg'
import { ReactComponent as SuccessIcon } from '../../assets/images/notification_success.svg'
import { ReactComponent as ErrorIcon } from '../../assets/images/notification_error.svg'
import { ReactComponent as WarningIcon } from '../../assets/images/notification_warning.svg'
import { TYPE } from '../../theme/index'

export enum NotificationType {
  INFO = 'info',
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
}

interface Props {
  type: NotificationType
  message: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    notification: {
      borderRadius: 8,
      border: (props: Props) =>
        `1px solid ${
          props.type === NotificationType.INFO
            ? theme.palette.info.main
            : props.type === NotificationType.SUCCESS
            ? theme.palette.success.main
            : props.type === NotificationType.ERROR
            ? theme.palette.error.main
            : theme.palette.warning.main
        }`,
      padding: '12px 17px',
      display: 'flex',
      alignItems: 'flex-start',
    },
  })
)

export default function Notification(props: Props) {
  const classes = useStyles(props)
  const { type, message } = props

  const getIcon = useCallback(() => {}, [])

  return (
    <div className={classes.notification}>
      {type === NotificationType.INFO ? (
        <InfoIcon />
      ) : props.type === NotificationType.SUCCESS ? (
        <SuccessIcon />
      ) : props.type === NotificationType.ERROR ? (
        <ErrorIcon />
      ) : (
        <WarningIcon />
      )}
      <TYPE.notification marginLeft={9}>{message}</TYPE.notification>
    </div>
  )
}
