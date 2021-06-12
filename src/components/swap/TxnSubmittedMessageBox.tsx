import React from 'react'
import { Box } from '@material-ui/core'
import Image from '../Image/Image'
import TextButton from '../Button/TextButton'
import Currency from '../../models/currency'
import SimpleMessageBox from '../MessageBox/SimpleMessageBox'

interface Props {
  currency: Currency
  wallet: {
    logo: string
    name: string
  }
  action: () => void
}

export default function TxnSubmittedMessageBox(props: Props) {
  const { currency, wallet, action } = props

  return (
    <SimpleMessageBox type={'success'} header={'Transaction Submitted'} action={action}>
      <Box marginBottom="16px">
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
    </SimpleMessageBox>
  )
}
