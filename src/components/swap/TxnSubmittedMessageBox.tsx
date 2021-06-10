import React from 'react'
import { Box } from '@material-ui/core'
import Image from '../Image/Image'
import TextButton from '../Button/TextButton'
import Currency from '../../models/currency'
import MessageBox from '../MessageBox/MessageBox'
import useModal from '../../hooks/useModal'
import OutlineButton from '../Button/OutlineButton'
import { TYPE } from '../../theme/index'

interface Props {
  currency: Currency
  wallet: {
    logo: string
    name: string
  }
}

export default function TxnSubmittedMessageBox(props: Props) {
  const { currency, wallet } = props
  const message = 'Transaction Submitted'
  const { hideModal } = useModal()

  return (
    <MessageBox type={'success'}>
      <Box marginBottom={'28px'} textAlign={'center'} padding={'0 32px'} width={'420px'}>
        <TYPE.large>{message}</TYPE.large>
      </Box>
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
      <Box margin="0 auto 28px" display={'flex'} justifyContent={'center'}>
        <OutlineButton width="180px" primary onClick={hideModal}>
          Close
        </OutlineButton>
      </Box>
    </MessageBox>
  )
}
