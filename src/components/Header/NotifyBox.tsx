import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles, styled } from '@material-ui/styles'
import { Text } from 'rebass'
import TxnSuccessIcon from '../../assets/images/txn_success_icon.svg'
import ButtonText from '../Button/ButtonText'
import Image from '../Image/Image'

interface Props {
  notifications: string[]
}

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    right: '60px',
    top: '72px',
    width: '340px',
    backgroundColor: '#000000',
    borderRadius: '4px',
    padding: '17px 20px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      marginRight: '12px',
    },
  },
})

// Todo:
// const LoadingBar = styled('div')({
//   height: '1px',
//   width: '238.5px',
//   opacity: 0.6,
//   backgroundColor: '#FFFFFF',
// })

export default function NotifyBox() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.listItem}>
        <Image src={TxnSuccessIcon} alt={'transaction success icon'} />
        <p>Deposit 1.0 ETH for 0.00000001 BSC</p>
      </div>
      <div className={classes.listItem}>
        <Image src={TxnSuccessIcon} alt={'transaction success icon'} />
        <p>Deposit 1.0 ETH for 0.00000001 BSC</p>
      </div>
      <Box marginLeft={'28px'}>
        <ButtonText fontWeight={400} underline>
          View on Etherscan
        </ButtonText>
      </Box>
      {/* <LoadingBar /> */}
    </div>
  )
}
