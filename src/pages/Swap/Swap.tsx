import React, { useState, ChangeEvent, useCallback } from 'react'
import Button from '../../components/Button/Button'
import AppBody from '../AppBody'
import CurrencyInputPanel from '../../components/CurrencyInputPanel/CurrencyInputPanel'
import ChainSelectPanel from '../../components/ChainSelectPanel/ChainSelectPanel'
import { useWalletModalToggle } from '../../state/application/hooks'
import { Box } from '@material-ui/core'
import Input from '../../components/Input/Input'
import QuotaInfo from '../../components/swap/QuotaInfo'
import QuotaBar from '../../components/swap/QuotaBar'
import ConfirmDepositModal from '../../components/swap/ConfirmDepositModal'
import Stepper from '../../components/Stepper/Stepper'
import TxnSubmittedMessageBox from '../../components/swap/TxnSubmittedMessageBox'
import MetaMask from '../../assets/images/meta_mask.svg'
import ConfirmWithdrawModal from '../../components/swap/ConfirmWithdrawModal'
import { TYPE } from '../../theme'
import { CurrencyList, ChainList } from '../../data/dummyData'
import Divider from '../../components/Divider/Divider'
import ClaimPopupModal from '../../components/claim/ClaimPopupModal'

export default function Swap() {
  const [account, setAccount] = useState(true)
  const [amount, setAmount] = useState('')
  const [address, setAddress] = useState('0x72ef586A2c515B605A873ad9a8FBdFD43Df77123')
  const [from, setFrom] = useState(ChainList[0])
  const [to, setTo] = useState(ChainList[1])
  const [depositEnabled, setDepositEnabled] = useState(false)
  const [withdrawEnabled, setWithdrawEnabled] = useState(false)
  const [quota, setQuota] = useState(800)
  const [currency, setCurrency] = useState(CurrencyList[0])
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
    return CurrencyList[0]
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
          <TYPE.Header textAlign="center">Cross Chain Bridge</TYPE.Header>
        </Box>
        <Box display="grid" gridGap="20px" padding="0 32px">
          <CurrencyInputPanel
            onChange={onChangeAmount}
            value={amount}
            selectedCurrency={getSelectedCurrency()}
            options={CurrencyList}
          />
          <ChainSelectPanel from={from} to={to} chainList={ChainList} />
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
            <Box display="grid" gridGap="16px" padding="28px 32px 0 32px">
              <Box display="flex" justifyContent="space-between">
                <Button size="large" width="216px" disabled={!depositEnabled} onClick={onDeposit}>
                  {attemptingDeposit ? <>Depositing</> : <>Deposit in {from.symbol} Chain</>}
                </Button>
                <Button size={'large'} width={'216px'} disabled={!withdrawEnabled} onClick={onWithdraw}>
                  Withdraw from {to.symbol} Chain
                </Button>
              </Box>
              <Box display="flex" justifyContent="center">
                <Stepper />
              </Box>
            </Box>
            <Divider orientation={'horizontal'} margin={'24px 0 22px 0'} />
            <Box display="grid" gridGap="12px" padding="0 32px 28px 32px">
              <QuotaInfo quota={quota} currency={currency.symbol} percentage={getPercentage()} />
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
      <ConfirmDepositModal
        isOpen={showConfirmDeposit}
        onDismiss={onDismissShowConfirmDeposit}
        onConfirm={onConfirmDeposit}
        from={from}
        to={to}
        walletLogo={MetaMask}
        address={address}
        value={amount}
        selectedCurrency={getSelectedCurrency()}
      />
      <TxnSubmittedMessageBox
        isOpen={showTxnSubmitted}
        onDismiss={onDismissTxnSubmitted}
        currency={currency}
        wallet={{ logo: MetaMask, name: 'MetaMask' }}
      />
      <ConfirmWithdrawModal
        isOpen={showWithdrawDeposit}
        onDismiss={onDismissShowConfirmWithdraw}
        onConfirm={onConfirmWithdraw}
        from={from}
        to={to}
        walletLogo={MetaMask}
        address={address}
        value={amount}
        selectedCurrency={getSelectedCurrency()}
      />
      <ClaimPopupModal />
    </>
  )
}
