import React from 'react'
import { Box } from '@material-ui/core'
import TextButton from '../Button/TextButton'
import Currency from '../../models/currency'
import SimpleMessageBox from '../MessageBox/SimpleMessageBox'

interface Props {
  action: () => void
}

export default function TxnSubmittedMessageBox(props: Props) {
  const { action } = props

  return (
    <SimpleMessageBox type={'success'} header={'Transaction Submitted'} action={action}>
      <Box margin="20px 0 32px 0">
        <TextButton fontSize={13} fontWeight={400} underline>
          View on Etherscan
        </TextButton>
      </Box>
      {/* <Box display="flex" justifyContent="center" marginBottom={'32px'}>
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
      </Box> */}
    </SimpleMessageBox>
  )
}
