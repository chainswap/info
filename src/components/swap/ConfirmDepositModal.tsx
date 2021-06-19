import React from 'react'
import { Box } from '@material-ui/core'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import Currency from '../../models/currency'
import Chain from '../../models/chain'
import SwapChain from './SwapChain'
import { Text } from 'rebass'
import ChainAddress from './ChainAddress'
import { TYPE } from '../../theme/index'

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
  const { value, selectedCurrency, from, to, walletLogo, address, onConfirm } = props

  return (
    <>
      <Modal title="Confirm Deposit" closeIcon>
        <TYPE.extremeLarge textAlign="center">
          {value} {selectedCurrency.symbol}
        </TYPE.extremeLarge>
        <SwapChain from={from} to={to} />
        <ChainAddress walletLogo={walletLogo} address={address} currency={selectedCurrency} />
        <Box margin="32px 32px 29px">
          <Button onClick={onConfirm}>Confirm</Button>
          <TYPE.mediumLightGray marginTop="12px">Chainswap charges a transaction fee 1 ETH</TYPE.mediumLightGray>
        </Box>
      </Modal>
    </>
  )
}
