import React from 'react'
import { Box } from '@material-ui/core'
import Modal from '../Modal/Modal'
import SuccessIcon from '../../assets/images/success.svg'
import Image from '../Image/Image'
import ButtonText from '../Button/ButtonText'
import Currency from '../../models/currency'
import OutlineButton from '../Button/OutlineButton'

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
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} hideClose>
      <Box textAlign="center">
        <Box padding="32px 0 16px">
          <Image src={SuccessIcon} alt={'success icon'} size={'32px'} />
        </Box>
        <Box fontWeight="400" fontSize="18px" color="#FFFFFF" marginBottom="32px">
          Transaction Submitted
        </Box>
        <Box marginBottom="12px">
          <ButtonText size="13px">View on Etherscan</ButtonText>
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

        <Box margin="32px auto 28px">
          <OutlineButton width="180px" primary>
            Close
          </OutlineButton>
        </Box>
      </Box>
    </Modal>
  )
}
