import React from 'react'
import { Box } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import CurrencyLogo from '../CurrencyLogo/CurrencyLogo'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

interface Props {
  isOpen: boolean
  onDismiss: () => void
  children?: React.ReactNode
  label?: string
  fromLogo: string
  from: string
  toLogo: string
  to: string
  walletLogo: string
  address: string
}

const Label = styled('label')({
  color: '#FFFFFF',
  opacity: 0.6,
  marginRight: '12px',
})

const SwapCurrency = ({
  fromLogo,
  from,
  toLogo,
  to,
}: {
  fromLogo: string
  from: string
  toLogo: string
  to: string
}) => {
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
        <CurrencyLogo currency={from} src={fromLogo} />
      </Box>
      <Box color={'#FFFFFF'}>
        <ArrowForwardIcon />
      </Box>
      <Box display="flex">
        <Label>To: </Label>
        <CurrencyLogo currency={to} src={toLogo} />
      </Box>
    </Box>
  )
}

export default function ConfirmDepositModal(props: Props) {
  const { isOpen, onDismiss, fromLogo, from, toLogo, to, walletLogo, address } = props

  const trimmedAddress = (address: string) => {
    const limit = 30

    if (address.length > limit) {
      return address.substring(0, 20) + '...' + address.substr(-5)
    }
  }

  return (
    <>
      <Modal isOpen={isOpen} onDismiss={onDismiss} label={'Confirm Deposit'}>
        <Box fontSize="28px" margin="20px 0 24px" textAlign="center" color="#FFFFFF" fontWeight="500">
          400 MATTER
        </Box>
        <Box>
          <SwapCurrency fromLogo={fromLogo} from={from} toLogo={toLogo} to={to} />
        </Box>
        <Box color="#FFFFFF" display="flex" justifyContent="space-between" margin="16px 32px 0 32px">
          <Label>Destination Chain Address:</Label>
          <Box>{trimmedAddress(address)}</Box>
        </Box>
        <Box margin="32px 32px 28px">
          <Button size="large">
            <img src={walletLogo} alt={'wallet logo'} />
            Confirm
          </Button>
        </Box>
      </Modal>
    </>
  )
}
