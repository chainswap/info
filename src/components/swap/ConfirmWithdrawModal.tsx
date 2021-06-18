import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { Text } from 'rebass'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import Currency from '../../models/currency'
import Chain from '../../models/chain'
import SwapChain from './SwapChain'
import ChainAddress from './ChainAddress'
import Divider from '../Divider/Divider'

export enum Mode {
  INSTRUCTION,
  CONFIRM,
}

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

const Faded = styled('div')({
  opacity: 0.2,
})

const Instruction = ({ to }: { to: Chain }) => {
  return (
    <Box color="#FFFFFF" margin="40px 32px 0" width={416}>
      <Text fontWeight={500} fontSize={18} textAlign={'center'}>
        1. Please switch <strong>your wallet network</strong> to {to.symbol} to complete token swap. 2. Also please{' '}
        <strong>switch to your wallet</strong> with the destination address
      </Text>
    </Box>
  )
}

export default function ConfirmWithdrawModal(props: Props) {
  const { from, to, walletLogo, address, value, selectedCurrency, onConfirm } = props

  const [mode, setMode] = useState(Mode.INSTRUCTION)

  function onClick() {
    setMode(Mode.CONFIRM)
  }

  return (
    <div onClick={onClick}>
      <Modal closeIcon>
        {mode === Mode.INSTRUCTION ? (
          <>
            <Box paddingBottom={'24px'}>
              <Instruction to={to} />
              <SwapChain from={from} to={to} />
              <ChainAddress walletLogo={walletLogo} address={address} />
            </Box>
            <Divider />
            <Faded>
              <Box marginBottom="12px">
                <Text fontWeight={500} fontSize={18} textAlign={'center'}>
                  3. Confirm Withdraw
                </Text>
              </Box>
              <Box>
                <Text fontWeight={'500'} fontSize={28} textAlign={'center'}>
                  {value} {selectedCurrency.symbol}
                </Text>
              </Box>
            </Faded>
          </>
        ) : (
          <>
            <Faded>
              <Box paddingBottom={'24px'}>
                <Instruction to={to} />
              </Box>
            </Faded>
            <Divider orientation={'horizontal'} />
            <Box padding={'24px 12px'}>
              <Text fontWeight={400} fontSize={18} textAlign={'center'}>
                3. Confirm Withdraw
              </Text>
            </Box>
            <Box>
              <Text fontWeight={'500'} fontSize={28} textAlign={'center'}>
                {value} {selectedCurrency.symbol}
              </Text>
            </Box>
            <SwapChain from={from} to={to} />
            <ChainAddress walletLogo={walletLogo} address={address} />
          </>
        )}
        <Box margin="28px 32px 29px">
          <Button onClick={onConfirm} disabled={mode === Mode.INSTRUCTION}>
            Confirm
          </Button>
        </Box>
      </Modal>
    </div>
  )
}
