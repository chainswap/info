import React from 'react'
import { Box } from '@material-ui/core'
import { Text } from 'rebass'
import PendingIcon from '../../assets/images/pending_icon.svg'
import TxnSuccessIcon from '../../assets/images/txn_success_icon.svg'
import Image from '../Image/Image'

interface Props {
  transaction: string
}

export default function Transaction(props: Props) {
  function getStatusIcon() {
    return <Image src={TxnSuccessIcon} alt={'transaction success icon'} />
  }

  return (
    <Box display={'flex'} justifyContent={'space-between'}>
      <Text fontSize={'14px'}>{props.transaction}</Text>
      {getStatusIcon()}
    </Box>
  )
}
