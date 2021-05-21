import React from 'react'
import { Box } from '@material-ui/core'
import Image from '../Image/Image'
import ButtonText from '../Button/ButtonText'
import Currency from '../../models/currency'
import MessageBox from '../MessageBox/MessageBox'

interface Props {
  isOpen: boolean
  onDismiss: () => void
  currency: Currency
  wallet: {
    logo: string
    name: string
  }
}

export default function TxnSubmittedModal(props: Props) {
  const { isOpen, onDismiss, currency, wallet } = props
  const message = 'Transaction Submitted'

  return (
    <MessageBox isOpen={isOpen} onDismiss={onDismiss} type={'success'} message={message}>
      <Box marginBottom="12px">
        <ButtonText fontSize="13px" fontWeight={400} primary>
          View on Etherscan
        </ButtonText>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box
          width="210px"
          height="32px"
          bgcolor="rgba(255, 255, 255, 0.09)"
          color="#FFFFFF"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="49px"
        >
          <Box marginRight="8px">
            Add {currency.symbol} to {wallet.name}
          </Box>
          <Image src={wallet.logo} alt={`wallet logo-${wallet.name}`} />
        </Box>
      </Box>
    </MessageBox>
  )
}
