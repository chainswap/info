import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles, styled } from '@material-ui/styles'
import { ReactComponent as TxnSuccessIcon } from '../../assets/images/txn_success_icon.svg'
import TextButton from '../Button/TextButton'
import Notification from '../../models/notification'

interface Props {
  notifications: Notification[]
}

const useStyles = makeStyles({
  root: {
    width: '340px',
    backgroundColor: '#000000',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      marginRight: '12px',
    },
  },
})

const BarOutter = styled(Box)({
  height: 2,
  // width: 340,
  backgroundColor: 'rgba(255,255,255,0.1)',
})

const BarInner = styled(Box)({
  height: 2,
  // width: 238.5,
  backgroundColor: 'rgba(255,255,255,0.6)',
  zIndex: 99999,
})

const LoadingBar = ({ percentage }: { percentage: number }) => {
  const outerWidth = 340
  const innerWidth = outerWidth * percentage

  return (
    <>
      <BarOutter width={outerWidth}>
        <BarInner width={innerWidth} />
      </BarOutter>
    </>
  )
}

export default function NotifyBox(props: Props) {
  const classes = useStyles()
  const { notifications } = props

  return (
    <Box className={classes.root}>
      <Box padding={'17px 20px 9px'}>
        {notifications.map((notification, key) => (
          <div className={classes.listItem}>
            <Box marginRight={'12px'}>
              <TxnSuccessIcon key={key} />
            </Box>
            <p>{notification.summary}</p>
          </div>
        ))}
      </Box>
      <Box marginLeft={'48px'}>
        <TextButton fontWeight={400} underline>
          View on Etherscan
        </TextButton>
      </Box>
      <Box marginTop={'21px'}>
        <LoadingBar percentage={0.7} />
      </Box>
    </Box>
  )
}
