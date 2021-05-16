import React from 'react'
import { Box } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import CurrencyLogo from '../CurrencyLogo/CurrencyLogo'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Currency from '../../models/currency'
import { TYPE } from '../../theme/index'
import { Text } from 'rebass'

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

const Seperator = styled('div')({
  width: '100%',
  height: 1,
  backgroundColor: '#FFFFFF',
  opacity: 0.2,
  margin: '20px auto 24px',
})

export default function ConfirmWithdrawModal(props: Props) {
  const { isOpen, onDismiss, from, to, walletLogo, address, value, selectedCurrency, onConfirm } = props

  const trimmedAddress = (address: string) => {
    const limit = 25

    if (address.length > limit) {
      return address.substring(0, 20) + '...' + address.substr(-5)
    }
  }

  return (
    <>
      <Modal isOpen={isOpen} onDismiss={onDismiss}>
        <Box color="#FFFFFF" padding="40px 32px 28px" fontSize="18px">
          <TYPE.smallheader textAlign="center">
            1. Please switch <strong>your wallet network</strong> to BSC to complete token swap. 2. Also please{' '}
            <strong>switch to your wallet</strong> with the destination address
          </TYPE.smallheader>
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
        <Seperator />
        <Box marginBottom="12px">
          <TYPE.subheader textAlign={'center'} opacity={0.2}>
            3. Confirm Withdraw
          </TYPE.subheader>
        </Box>
        <Box>
          <Text fontWeight={'500'} fontSize={'28px'} textAlign={'center'} opacity={0.2}>
            {value} {selectedCurrency.symbol}
          </Text>
        </Box>
        <Box margin="28px 32px 29px">
          <Button size="large" onClick={onConfirm} disabled>
            Confirm
          </Button>
        </Box>
      </Modal>
    </>
  )
}
