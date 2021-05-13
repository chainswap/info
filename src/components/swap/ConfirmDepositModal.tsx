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
  return <Box>ETH - BSC</Box>
}

export default function ConfirmDepositModal(props: Props) {
  const { isOpen, onDismiss } = props
  return (
    <>
      <Modal isOpen={isOpen} onDismiss={onDismiss} label={'Confirm Deposit'}>
        <Box>400 MATTER</Box>
        <Box>
          <SwapCurrency />
        </Box>
        <Box>
          <Box>Destination Chain Address</Box>
          <Box>0x72ef586A2c515...D43Df77123</Box>
        </Box>
        <Button size="large">Confirm</Button>
      </Modal>
    </>
  )
}
