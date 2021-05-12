import React, { useState, ChangeEvent, useEffect } from 'react'
import Button from '../../components/Button/Button'
import AppBody from '../AppBody'
import SwapHeader from '../../components/swap/SwapHeader'
import CurrencyInputPanel from '../../components/CurrencyInputPanel/CurrencyInputPanel'
import CurrencySelectPanel from '../../components/CurrencySelectPanel/CurrencySelectPanel'
import { useWalletModalToggle } from '../../state/application/hooks'
import WalletModal from '../../components/WalletModal'
import { styled } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import Input from '../../components/Input/Input'
import QuotaInfo from '../../components/swap/QuotaInfo'
import QuotaBar from '../../components/swap/QuotaBar'
import StepperContainer from '../../components/swap/StepperContainer'

const Seperator = styled('div')({
  width: '100%',
  height: 1,
  backgroundColor: '#FFFFFF',
  opacity: 0.2,
})

export default function Swap() {
  const [account, setAccouny] = useState(true)
  const [amount, setAmount] = useState('')
  const [address, setAddress] = useState('0x72ef586A2c515B605A873ad9a8FBdFD43Df77123')
  const [from, setFrom] = useState('ETH')
  const [to, setTo] = useState('BSC')
  const [depositEnabled, setDepositEnabled] = useState(false)
  const [withdrawEnabled, setWithdrawEnabled] = useState(false)
  const [quota, setQuota] = useState(800)
  const [currency, setCurrency] = useState('MATTER')

  // toggle wallet when disconnected
  const toggleWalletModal = useWalletModalToggle()

  const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    let currentAmount = e.currentTarget.value

    setAmount(e.currentTarget.value)
    checkDeposit(currentAmount, address)
  }

  const onChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    let currentAddress = e.currentTarget.value

    setAddress(currentAddress)
    checkDeposit(amount, currentAddress)
  }

  const checkDeposit = (amount: string, address: string) => {
    if (amount && address) {
      setDepositEnabled(true)
      return
    }
    setDepositEnabled(false)
  }

  function onDeposit() {
    alert('deposit')
  }

  function onWithdraw() {
    alert('withdraw')
  }

  function getPercentage() {
    return ((quota - parseFloat(amount)) / quota) * 100
  }

  return (
    <>
      <AppBody>
        <SwapHeader />
        <Box display="grid" gridGap="20px" padding="0 32px">
          <CurrencyInputPanel onChange={onChangeAmount} value={amount} />
          <CurrencySelectPanel />
          {account && (
            <Box>
              <Input
                label={'Destination Chain Wallet Address'}
                value={address}
                placeholder={'Enter address to swap'}
                onChange={onChangeAddress}
              />
            </Box>
          )}
        </Box>

        {account && (
          <>
            <Box display="grid" gridGap="16px" padding="28px 32px">
              <StepperContainer
                depositEnabled={depositEnabled}
                withdrawEnabled={withdrawEnabled}
                from={from}
                to={to}
                onDeposit={onDeposit}
                onWithdraw={onWithdraw}
              />
            </Box>
            <Seperator />
            <Box display="grid" gridGap="12px" padding="24px 32px 28px 32px">
              <QuotaInfo quota={quota} currency={currency} percentage={getPercentage()} />
              <QuotaBar percentage={getPercentage()} />
            </Box>
          </>
        )}

        {!account && (
          <Button size="large" onClick={toggleWalletModal}>
            Connect Wallet
          </Button>
        )}
      </AppBody>
      <WalletModal />
    </>
  )
}
