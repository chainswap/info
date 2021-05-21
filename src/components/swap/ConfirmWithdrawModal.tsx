import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { Text } from 'rebass'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import Currency from '../../models/currency'
import Chain from '../../models/chain'
import { TYPE } from '../../theme/index'
import SwapChain from './SwapChain'
import ChainAddress from './ChainAddress'
import Divider from '../../components/Divider/Divider'

enum Mode {
  INSTRUCTION,
  CONFIRM,
}

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

const FadedBox = styled(Box)({
  opacity: 0.2,
})

const Instruction = ({ to }: { to: Chain }) => {
  return (
    <Box color="#FFFFFF" margin="40px 32px 0" width={416}>
      <TYPE.Smallheader textAlign="center">
        1. Please switch <strong>your wallet network</strong> to {to.symbol} to complete token swap. 2. Also please{' '}
        <strong>switch to your wallet</strong> with the destination address
      </TYPE.Smallheader>
    </Box>
  )
}

export default function ConfirmWithdrawModal(props: Props) {
  const { isOpen, onDismiss, from, to, walletLogo, address, value, selectedCurrency, onConfirm } = props
  const [mode, setMode] = useState(Mode.INSTRUCTION)

  return (
    <>
      <Modal isOpen={isOpen} onDismiss={onDismiss}>
        {mode === Mode.INSTRUCTION ? (
          <>
            <Instruction to={to} />
            <SwapChain from={from} to={to} />
            <ChainAddress walletLogo={walletLogo} address={address} />
            <Divider orientation={'horizontal'} margin={'20px 0 24px 0'} />
            <FadedBox>
              <Box marginBottom="12px">
                <TYPE.Subheader textAlign={'center'}>3. Confirm Withdraw</TYPE.Subheader>
              </Box>
              <Box>
                <Text fontWeight={'500'} fontSize={'28px'} textAlign={'center'}>
                  {value} {selectedCurrency.symbol}
                </Text>
              </Box>
            </FadedBox>
          </>
        ) : (
          <>
            <FadedBox>
              <Instruction to={to} />
            </FadedBox>
            <Divider orientation={'horizontal'} margin={'20px 0 24px 0'} />
            <Box marginBottom="12px">
              <TYPE.Subheader textAlign={'center'}>3. Confirm Withdraw</TYPE.Subheader>
            </Box>
            <Box>
              <Text fontWeight={'500'} fontSize={'28px'} textAlign={'center'}>
                {value} {selectedCurrency.symbol}
              </Text>
            </Box>
            <SwapChain from={from} to={to} />
            <ChainAddress walletLogo={walletLogo} address={address} />
          </>
        )}
        <Box margin="28px 32px 29px">
          <Button size="large" onClick={onConfirm} disabled={mode === Mode.INSTRUCTION}>
            Confirm
          </Button>
        </Box>
      </Modal>
    </>
  )
}
