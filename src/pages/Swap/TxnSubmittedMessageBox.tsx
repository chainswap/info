import React, { useContext } from 'react'
import { Box } from '@material-ui/core'
import Image from '../../components/Image/Image'
import TextButton from '../../components/Button/TextButton'
import Currency from '../../models/currency'
import MessageBox from '../../components/MessageBox/MessageBox'
import { ModalContext } from '../../context/ModalContext'

interface Props {
  currency: Currency
  wallet: {
    logo: string
    name: string
  }
}

export default function TxnSubmittedMessageBox(props: Props) {
  const { isOpen, hideModal } = useContext(ModalContext)
  const { currency, wallet } = props
  const message = 'Transaction Submitted'

  return (
    <MessageBox isOpen={isOpen} onDismiss={hideModal} type={'success'} message={message}>
      <Box marginBottom="12px">
        <TextButton fontSize={13} fontWeight={400} primary>
          View on Etherscan
        </TextButton>
      </Box>
      <Box display="flex" justifyContent="center" marginBottom={'32px'}>
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
          <Image src={wallet.logo} alt={`wallet logo-${wallet.name}`} style={{ width: '16px', height: '14.3px' }} />
        </Box>
      </Box>
    </MessageBox>
  )
}
