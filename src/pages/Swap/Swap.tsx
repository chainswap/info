import React, { useState, ChangeEvent, useCallback } from 'react'
import Button from '../../components/Button/Button'
import AppBody from '../AppBody'
import CurrencyInputPanel from '../../components/CurrencyInputPanel/CurrencyInputPanel'
import CurrencySelectPanel from '../../components/CurrencySelectPanel/CurrencySelectPanel'
import { useWalletModalToggle } from '../../state/application/hooks'
import WalletModal from '../../components/WalletModal'
import { styled } from '@material-ui/styles'
import { Box, Typography } from '@material-ui/core'
import Input from '../../components/Input/Input'
import QuotaInfo from '../../components/swap/QuotaInfo'
import QuotaBar from '../../components/swap/QuotaBar'
import ConfirmDepositModal from '../../components/swap/ConfirmDepositModal'
import DummyLogo from '../../assets/images/dummy_logo.png'
import Stepper from '../../components/Stepper/Stepper'
import TxnSubmittedModal from '../../components/swap/TxnSubmittedModal'
import MetaMask from '../../assets/images/meta_mask.svg'
import ConfirmWithdrawModal from '../../components/swap/_ConfirmWithdrawModal'
import { TYPE } from '../../theme'

const currencyList = [
  {
    logo: DummyLogo,
    symbol: 'TOKEN',
    name: 'ChainSwap.com Governance Token',
    balance: 800,
  },
  {
    logo: DummyLogo,
    symbol: 'MATTER',
    name: 'Antimatter.Finance Governance Token',
    balance: 400,
  },
]

const Seperator = styled('div')({
  width: '100%',
  height: 1,
  backgroundColor: '#FFFFFF',
  opacity: 0.2,
})

interface SwapStatus {}

export default function Swap() {
  const [account, setAccount] = useState(true)
  const [amount, setAmount] = useState('')
  const [address, setAddress] = useState('0x72ef586A2c515B605A873ad9a8FBdFD43Df77123')
  const [from, setFrom] = useState(currencyList[0])
  const [to, setTo] = useState(currencyList[1])
  const [depositEnabled, setDepositEnabled] = useState(false)
  const [withdrawEnabled, setWithdrawEnabled] = useState(false)
  const [quota, setQuota] = useState(800)
  const [currency, setCurrency] = useState('MATTER')
  // const [showConfirmDeposit, setShowConfirmDeposit] = useState(false)

  // modal and loading
  const [
    {
      showConfirmDeposit,
      attemptingDeposit,
      showTxnSubmitted,
      showWithdrawDeposit,
      attemptingWithdraw,
      depositCompleted,
      withdrawCompleted,
    },
    setSwapState,
  ] = useState<{
    showConfirmDeposit: boolean
    attemptingDeposit: boolean
    showTxnSubmitted: boolean
    showWithdrawDeposit: boolean
    attemptingWithdraw: boolean
    depositCompleted: boolean
    withdrawCompleted: boolean
  }>({
    showConfirmDeposit: false,
    attemptingDeposit: false,
    showTxnSubmitted: false,
    showWithdrawDeposit: false,
    attemptingWithdraw: false,
    depositCompleted: false,
    withdrawCompleted: false,
  })

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

  const onDeposit = () => {
    setSwapState({
      showConfirmDeposit: true,
      attemptingDeposit: false,
      showTxnSubmitted: false,
      showWithdrawDeposit: false,
      attemptingWithdraw: false,
      depositCompleted: false,
      withdrawCompleted: false,
    })
  }

  const onWithdraw = () => {
    setSwapState({
      showConfirmDeposit: false,
      attemptingDeposit: false,
      showTxnSubmitted: false,
      showWithdrawDeposit: true,
      attemptingWithdraw: false,
      depositCompleted: false,
      withdrawCompleted: false,
    })
  }

  const getPercentage = () => {
    return ((quota - parseFloat(amount)) / quota) * 100
  }

  const onDismissShowConfirmDeposit = useCallback(() => {
    setSwapState({
      showConfirmDeposit: false,
      attemptingDeposit: false,
      showTxnSubmitted: false,
      showWithdrawDeposit: false,
      attemptingWithdraw: false,
      depositCompleted: false,
      withdrawCompleted: false,
    })
  }, [])

  const onDismissShowConfirmWithdraw = useCallback(() => {
    setSwapState({
      showConfirmDeposit: false,
      attemptingDeposit: false,
      showTxnSubmitted: false,
      showWithdrawDeposit: false,
      attemptingWithdraw: false,
      depositCompleted: false,
      withdrawCompleted: false,
    })
  }, [])

  const getSelectedCurrency = () => {
    return currencyList[0]
  }

  const onConfirmDeposit = useCallback(() => {
    setSwapState({
      showConfirmDeposit: false,
      attemptingDeposit: true,
      showTxnSubmitted: false,
      showWithdrawDeposit: false,
      attemptingWithdraw: false,
      depositCompleted: false,
      withdrawCompleted: false,
    })
    setTimeout(function () {
      setSwapState({
        showConfirmDeposit: false,
        attemptingDeposit: false,
        showTxnSubmitted: true,
        showWithdrawDeposit: false,
        attemptingWithdraw: false,
        depositCompleted: false,
        withdrawCompleted: false,
      })
      setDepositEnabled(false)
      setWithdrawEnabled(true)
    }, 3000)
  }, [])

  const onConfirmWithdraw = useCallback(() => {
    setSwapState({
      showConfirmDeposit: false,
      attemptingDeposit: false,
      showTxnSubmitted: false,
      showWithdrawDeposit: false,
      attemptingWithdraw: true,
      depositCompleted: false,
      withdrawCompleted: false,
    })
    setTimeout(function () {
      setSwapState({
        showConfirmDeposit: false,
        attemptingDeposit: false,
        showTxnSubmitted: true,
        showWithdrawDeposit: false,
        attemptingWithdraw: false,
        depositCompleted: false,
        withdrawCompleted: false,
      })
      setDepositEnabled(false)
      setWithdrawEnabled(false)
    }, 3000)
  }, [])

  const onDismissTxnSubmitted = useCallback(() => {
    if (depositCompleted) {
      setSwapState({
        showConfirmDeposit: false,
        attemptingDeposit: false,
        showTxnSubmitted: false,
        showWithdrawDeposit: false,
        attemptingWithdraw: false,
        depositCompleted: true,
        withdrawCompleted: false,
      })

      return
    }
    setSwapState({
      showConfirmDeposit: false,
      attemptingDeposit: false,
      showTxnSubmitted: false,
      showWithdrawDeposit: false,
      attemptingWithdraw: false,
      depositCompleted: true,
      withdrawCompleted: true,
    })
  }, [])

  return (
    <>
      <AppBody>
        <Box margin="12px 0 18px 0">
          <TYPE.header align="center">Cross Chain Bridge</TYPE.header>
        </Box>
        <Box display="grid" gridGap="20px" padding="0 32px">
          <CurrencyInputPanel
            onChange={onChangeAmount}
            value={amount}
            selectedCurrency={getSelectedCurrency()}
            defaultCurrency={getSelectedCurrency()}
            options={currencyList}
          />
          <CurrencySelectPanel currencyList={currencyList} />
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
              <Box display="flex" justifyContent="space-between">
                <Button size="large" width="216px" disabled={!depositEnabled} onClick={onDeposit}>
                  {attemptingDeposit ? <>Depositing</> : <>Deposit in {from.symbol} Chain</>}
                </Button>
                <Button size="large" width="216px" disabled={!withdrawEnabled} onClick={onWithdraw}>
                  Withdraw from {to.symbol} Chain
                </Button>
              </Box>
              <Box display="flex" justifyContent="center">
                <Stepper />
              </Box>
            </Box>
            <Seperator />
            <Box display="grid" gridGap="12px" padding="24px 32px 28px 32px">
              <QuotaInfo quota={quota} currency={currency} percentage={getPercentage()} />
              <QuotaBar percentage={getPercentage()} />
            </Box>
          </>
        )}

        {!account && (
          <Box padding="27px 32px 31px">
            <Button size="large" onClick={toggleWalletModal}>
              Connect Wallet
            </Button>
          </Box>
        )}
      </AppBody>
      <WalletModal />
      <ConfirmDepositModal
        isOpen={showConfirmDeposit}
        onDismiss={onDismissShowConfirmDeposit}
        onConfirm={onConfirmDeposit}
        from={from}
        to={to}
        walletLogo={DummyLogo}
        address={address}
        value={amount}
        selectedCurrency={getSelectedCurrency()}
      />
      <TxnSubmittedModal
        isOpen={showTxnSubmitted}
        onDismiss={onDismissTxnSubmitted}
        currency={from}
        wallet={{ logo: MetaMask, name: 'MetaMask' }}
      />
      <ConfirmWithdrawModal
        isOpen={showWithdrawDeposit}
        onDismiss={onDismissShowConfirmWithdraw}
        onConfirm={onConfirmWithdraw}
        from={from}
        to={to}
        walletLogo={DummyLogo}
        address={address}
        value={amount}
        selectedCurrency={getSelectedCurrency()}
      />
    </>
  )
}
