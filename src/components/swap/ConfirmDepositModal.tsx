import React from 'react'
import { Box } from '@material-ui/core'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import Currency from '../../models/currency'
import Chain from '../../models/chain'
import SwapChain from './SwapChain'
import { Text } from 'rebass'
import ChainAddress from './ChainAddress'

interface Props {
  isOpen: boolean
  onDismiss: () => void
  children?: React.ReactNode
  label?: string
  from: Chain
  to: Chain
  walletLogo: string
  address: string
  value: string
  selectedCurrency: Currency
  onConfirm: () => void
}

export default function ConfirmDepositModal(props: Props) {
  const { isOpen, onDismiss, from, to, walletLogo, address, value, selectedCurrency, onConfirm } = props

  return (
    <>
      <Modal isOpen={isOpen} onDismiss={onDismiss} label={'Confirm Deposit'} showIcon>
        <Box paddingTop={'20px'}>
          <Text fontWeight={'500'} fontSize={'28px'} textAlign={'center'}>
            {value} {selectedCurrency.symbol}
          </Text>
        </Box>
        <SwapChain from={from} to={to} />
        <ChainAddress walletLogo={walletLogo} address={address} />
        <Box margin="32px 32px 28px">
          <Button onClick={onConfirm}>Confirm</Button>
        </Box>
      </Modal>
    </>
  )
}
