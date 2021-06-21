import React from 'react'
import { Box } from '@material-ui/core'
import Modal from 'components/Modal/Modal'
import Button from 'components/Button/Button'
import Currency from 'models/currency'
import Chain from 'models/chain'
import SwapChain from 'components/swap/SwapChain'
import ChainAddress from 'components/swap/ChainAddress'
import { TYPE } from 'theme/index'
import LogoText from 'components/LogoText/LogoText'

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
        <Box display="flex" justifyContent="center" marginTop="16px">
          <LogoText logo={selectedCurrency.logo} text={selectedCurrency.symbol} fontWeight={500} />
        </Box>

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
