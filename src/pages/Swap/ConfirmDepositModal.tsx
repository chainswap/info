import React, { useContext } from 'react'
import { Box } from '@material-ui/core'
import Modal from '../../components/Modal/Modal'
import Button from '../../components/Button/Button'
import Currency from '../../models/currency'
import Chain from '../../models/chain'
import SwapChain from './SwapChain'
import { Text } from '../../components/Text/Text'
import ChainAddress from './ChainAddress'
import { ModalContext } from '../../context/ModalContext'

interface Props {
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
  const { isOpen, hideModal } = useContext(ModalContext)
  const { value, selectedCurrency, from, to, walletLogo, address, onConfirm } = props

  return (
    <>
      <Modal isOpen={isOpen} onDismiss={hideModal} label={'Confirm Deposit'} showIcon>
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
