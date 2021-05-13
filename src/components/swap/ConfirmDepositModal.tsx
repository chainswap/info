import React from 'react'
import { Box } from '@material-ui/core'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'

interface Props {
  isOpen: boolean
  onDismiss: () => void
  children?: React.ReactNode
  label?: string
}

const SwapCurrency = () => {
  return (
    <Box bgcolor="rgba(255, 255, 255, 0.08)" borderRadius="10px" height="48px" margin="0 32px">
      From: ETH - To: BSC
    </Box>
  )
}

export default function ConfirmDepositModal(props: Props) {
  const { isOpen, onDismiss } = props
  return (
    <>
      <Modal isOpen={isOpen} onDismiss={onDismiss} label={'Confirm Deposit'}>
        <Box fontSize="28px" margin="20px 0 24px" textAlign="center" color="#FFFFFF" fontWeight="500">
          400 MATTER
        </Box>
        <Box>
          <SwapCurrency />
        </Box>
        <Box color="#FFFFFF" display="flex" justifyContent="space-between" margin="16px 32px 0 32px">
          <Box>Destination Chain Address</Box>
          <Box>0x72ef586A2c515...D43Df77123</Box>
        </Box>
        <Box margin="32px 32px 28px">
          <Button size="large">Confirm</Button>
        </Box>
      </Modal>
    </>
  )
}
