import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import Currency from '../../models/currency'
import Chain from '../../models/chain'
import SwapChain from './SwapChain'
import ChainAddress from './ChainAddress'
import Divider from '../Divider/Divider'
import { TYPE } from '../../theme/index'
import LogoText from 'components/LogoText/LogoText'
import { useCallback } from 'react'

export enum Mode {
  INSTRUCTION = 'instruction',
  CONFIRM = 'confirm',
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

const Fadable = styled('div')({
  opacity: (props: { faded: boolean }) => (props.faded ? 0.4 : 1),
})

const Instruction = ({ to }: { to: Chain }) => {
  return (
    <Box margin="0 auto 0" width="320px">
      <TYPE.bold textAlign={'center'}>
        1. Please switch <strong>your wallet network</strong> to {to.symbol} to complete token swap.
      </TYPE.bold>
      <TYPE.bold textAlign={'center'} marginTop="8px">
        2. Also please<strong>switch to your wallet</strong> with the destination address
      </TYPE.bold>
    </Box>
  )
}

export default function ConfirmWithdrawModal(props: Props) {
  const { from, to, walletLogo, address, value, selectedCurrency, onConfirm } = props

  const [mode, setMode] = useState(Mode.INSTRUCTION)

  const onClick = useCallback(() => {
    setMode(Mode.CONFIRM)
  }, [])

  return (
    <div onClick={onClick}>
      <Modal closeIcon>
        <>
          <Fadable faded={mode !== Mode.INSTRUCTION}>
            <Box marginBottom="24px">
              <Instruction to={to} />
              {mode === Mode.INSTRUCTION && <SwapChain from={from} to={to} />}
              {mode === Mode.INSTRUCTION && (
                <ChainAddress walletLogo={walletLogo} address={address} currency={selectedCurrency} />
              )}
            </Box>
          </Fadable>
          <Divider />
          <Fadable faded={mode !== Mode.CONFIRM}>
            <TYPE.body margin="24px auto 12px" textAlign="center">
              3. Confirm Withdraw
            </TYPE.body>
            <TYPE.extremeLarge textAlign="center">{value}</TYPE.extremeLarge>
            <Box display="flex" justifyContent="center">
              <LogoText logo={selectedCurrency.logo} text={selectedCurrency.symbol} fontSize={64} fontWeight={500} />
            </Box>
            {mode === Mode.CONFIRM && <SwapChain from={from} to={to} />}
            {mode === Mode.CONFIRM && (
              <ChainAddress walletLogo={walletLogo} address={address} currency={selectedCurrency} />
            )}
          </Fadable>
        </>
        <Box margin="28px 32px 29px">
          <Button onClick={onConfirm} disabled={mode === Mode.INSTRUCTION}>
            Confirm
          </Button>
        </Box>
      </Modal>
    </div>
  )
}
