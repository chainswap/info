import React from 'react'
import { Box } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import CurrencyLogo from '../CurrencyLogo/CurrencyLogo'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Currency from '../../models/currency'
import CurrencyInputPanel from '../CurrencyInputPanel/CurrencyInputPanel'

interface Props {
  isOpen: boolean
  onDismiss: () => void
  children?: React.ReactNode
  label?: string
  from: Currency
  to: Currency
  walletLogo: string
  address: string
  value: string
  selectedCurrency: Currency
  onConfirm: () => void
}

const Label = styled('label')({
  color: '#FFFFFF',
  opacity: 0.6,
  marginRight: '12px',
})

const SwapCurrency = ({ from, to }: { from: Currency; to: Currency }) => {
  // const {fromLogo, from, toLogo, to} = props
  return (
    <Box
      bgcolor="rgba(255, 255, 255, 0.08)"
      borderRadius="10px"
      height="48px"
      margin="0 32px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="0 40px"
    >
      <Box display="flex">
        <Label>From: </Label>
        <CurrencyLogo currency={from} />
      </Box>
      <Box color={'#FFFFFF'}>
        <ArrowForwardIcon />
      </Box>
      <Box display="flex">
        <Label>To: </Label>
        <CurrencyLogo currency={to} />
      </Box>
    </Box>
  )
}

export default function ConfirmDepositModal(props: Props) {
  const { isOpen, onDismiss, from, to, walletLogo, address, value, selectedCurrency, onConfirm } = props

  const trimmedAddress = (address: string) => {
    const limit = 25

    if (address.length > limit) {
      return address.substring(0, 20) + '...' + address.substr(-5)
    }
  }

  return (
    <>
      <Modal isOpen={isOpen} onDismiss={onDismiss} label={'Confirm Deposit'}>
        <Box fontSize="28px" margin="20px 0 24px" textAlign="center" color="#FFFFFF" fontWeight="500">
          {value} {selectedCurrency.symbol}
        </Box>
        <Box>
          <SwapCurrency from={from} to={to} />
        </Box>
        <Box color="#FFFFFF" display="flex" justifyContent="space-between" margin="16px 32px 0 32px">
          <Label>Destination Chain Address:</Label>
          <Box display="flex" alignItems="center">
            <img src={walletLogo} alt={'wallet logo'} />
            <Box marginLeft="8px" fontSize="12px">
              {trimmedAddress(address)}
            </Box>
          </Box>
        </Box>
        <Box margin="32px 32px 28px">
          <Button size="large" onClick={onConfirm}>
            Confirm
          </Button>
        </Box>
      </Modal>
    </>
  )
}
