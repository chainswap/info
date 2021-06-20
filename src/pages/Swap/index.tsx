import React, { useState, ChangeEvent, useCallback, useEffect } from 'react'
import SecondaryButton from 'components/Button/SecondaryButton'
import AppBody from '../AppBody'
import { Box } from '@material-ui/core'
import QuotaInfo from 'components/swap/QuotaInfo'
import ConfirmDepositModal from './ConfirmDepositModal'
import SwapStepper from 'components/swap/SwapStepper'
import TxnSubmittedMessageBox from './TxnSubmittedMessageBox'
import MetaMask from 'assets/images/meta_mask.svg'
import ConfirmWithdrawModal from './ConfirmWithdrawModal'
import { ChainList } from 'data/dummyData'
import Divider from 'components/Divider/Divider'
import WalletModal from 'components/WalletModal/WalletModal'
import useModal from 'hooks/useModal'
import { useUserLogined } from 'state/user/hooks'
import { Text } from 'rebass'
import Currency from 'models/currency'
import { ReactComponent as CheckIcon } from 'assets/images/check_icon.svg'
import ClaimModal from 'components/claim/ClaimModal'
import Chain from 'models/chain'
import { TYPE } from 'theme/index'
import SwapForm from './SwapForm'
import Notification, { NotificationType } from 'components/Notification/Notification'
import useCurrency from 'hooks/useCurrency'
import ErrorAndActionButton from 'components/Button/ErrorAndActionButton'
import { useMemo } from 'react'

enum SWAP_ERROR {
  SELECT_TOKEN = 'Select Token',
  SELECT_CHAIN = 'Select Chain',
  ENTER_AMOUNT = 'Enter Amount',
}

export default function Swap() {
  const userLogined = useUserLogined()
  const [amount, setAmount] = useState('')
  const [address, setAddress] = useState('0xKos369cd6vwd94wq1gt4hr87ujv')
  const [from, setFrom] = useState<Chain | null>(null)
  const [to, setTo] = useState<Chain | null>(null)
  const [quota] = useState(800)
  const { showModal, hideModal } = useModal()
  const [percentage, setPercentage] = useState(0)
  const [step, setStep] = useState(0)
  const [authorized, setAuthorized] = useState(false)
  const [showClaimModal, setShowClaimModal] = useState(false)
  const { currency, setCurrency, currencyOptions } = useCurrency()

  // swap state
  const [{ attemptingDeposit, attemptingWithdraw, depositCompleted, withdrawCompleted }, setSwapStatus] = useState<{
    attemptingDeposit: boolean
    attemptingWithdraw: boolean
    depositCompleted: boolean
    withdrawCompleted: boolean
  }>({
    attemptingDeposit: false,
    attemptingWithdraw: false,
    depositCompleted: false,
    withdrawCompleted: false,
  })

  useEffect(() => {
    setCurrency(null)
  }, [setCurrency])

  useEffect(() => {
    const percentage = ((quota - parseFloat(amount)) / quota) * 100
    setPercentage(percentage)
  }, [quota, amount])

  useEffect(() => {
    if (depositCompleted && withdrawCompleted) {
      setStep(2)
    } else if (depositCompleted) {
      setStep(1)
    }
  }, [depositCompleted, withdrawCompleted])

  const onChangeAmount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.currentTarget.value)
  }, [])

  const onChangeAddress = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    let currentAddress = e.currentTarget.value
    setAddress(currentAddress)
  }, [])

  const onChangeTo = useCallback((e: any) => {
    const chain = ChainList.filter((el) => el.symbol === e.target.value)[0]
    setTo(chain)
  }, [])

  const onChangeFrom = useCallback((e: any) => {
    const chain = ChainList.filter((el) => el.symbol === e.target.value)[0]
    setFrom(chain)
  }, [])

  const onMax = useCallback(() => {
    const maxAmount = quota.toString()
    setAmount(maxAmount)
  }, [quota])

  const onConfirmDeposit = useCallback(() => {
    if (!currency) return
    hideModal()
    setAmount('')
    setSwapStatus({
      attemptingDeposit: true,
      attemptingWithdraw: false,
      depositCompleted: false,
      withdrawCompleted: false,
    })

    setTimeout(function () {
      showModal(<TxnSubmittedMessageBox action={() => {}} />)
      setSwapStatus({
        attemptingDeposit: false,
        attemptingWithdraw: false,
        depositCompleted: true,
        withdrawCompleted: false,
      })
    }, 1500)
  }, [showModal, hideModal, currency])

  const showConfirmDepositModal = useCallback(() => {
    if (!currency || !from || !to) return

    showModal(
      <ConfirmDepositModal
        onConfirm={onConfirmDeposit}
        from={from}
        to={to}
        walletLogo={MetaMask}
        address={address}
        value={amount}
        selectedCurrency={currency}
      />
    )
  }, [currency, from, to, onConfirmDeposit, address, amount, showModal])

  const onConfirmWithdraw = useCallback(() => {
    if (!currency) return

    hideModal()
    setAmount('')
    setSwapStatus({
      attemptingDeposit: false,
      attemptingWithdraw: true,
      depositCompleted: true,
      withdrawCompleted: false,
    })

    setTimeout(function () {
      showModal(<TxnSubmittedMessageBox action={() => {}} />)
      setSwapStatus({
        attemptingDeposit: false,
        attemptingWithdraw: false,
        depositCompleted: true,
        withdrawCompleted: true,
      })
    }, 1500)
  }, [showModal, hideModal, currency])

  const showConfirmWithdrawModal = useCallback(() => {
    if (!currency || !from || !to) return

    showModal(
      <ConfirmWithdrawModal
        onConfirm={onConfirmWithdraw}
        from={from}
        to={to}
        walletLogo={MetaMask}
        address={address}
        value={amount}
        selectedCurrency={currency}
      />
    )
  }, [currency, from, to, onConfirmWithdraw, address, amount, showModal])

  const setSelectedCurrency = useCallback(
    (currency: Currency) => {
      setCurrency(currency)
      hideModal()
    },
    [setCurrency, hideModal]
  )

  const authorize = useCallback(() => {
    setAuthorized(true)
  }, [])

  const error = useMemo(() => {
    if (!currency) {
      return SWAP_ERROR.SELECT_TOKEN
    }
    if (!from || !to) {
      return SWAP_ERROR.SELECT_CHAIN
    }
    if (!amount) {
      return SWAP_ERROR.ENTER_AMOUNT
    }
  }, [currency, from, to, amount])

  const getActions = useCallback(() => {
    if (!userLogined) {
      return (
        <SecondaryButton onClick={() => showModal(<WalletModal onDismiss={hideModal} />)}>
          Connect Wallet
        </SecondaryButton>
      )
    }

    if (!authorized) {
      return (
        <ErrorAndActionButton
          onAction={authorize}
          actionText={`Allow the Chainswap protocol to use your ${currency?.symbol}`}
          pending={attemptingDeposit}
          pendingText={'Depositing'}
          disableAction={depositCompleted}
          error={error}
        />
      )
    }

    return (
      <>
        <Box display="flex" justifyContent="space-between">
          <ErrorAndActionButton
            onAction={showConfirmDepositModal}
            actionText={`Withdrawl from ${from?.symbol} Chain`}
            pending={attemptingDeposit}
            pendingText={'Depositing'}
            disableAction={depositCompleted}
            width="232px"
          />
          <ErrorAndActionButton
            onAction={showConfirmWithdrawModal}
            actionText={`Deposit in ${to?.symbol} Chain`}
            pending={attemptingWithdraw}
            pendingText={'Withdrawing'}
            error={depositCompleted && !withdrawCompleted && !amount ? SWAP_ERROR.ENTER_AMOUNT : undefined}
            disableAction={withdrawCompleted || !depositCompleted}
            width="232px"
          />
        </Box>
        <Box display="flex" justifyContent="center" marginTop="16px">
          <SwapStepper activeStep={step} />
        </Box>
      </>
    )
  }, [
    userLogined,
    currency,
    from,
    to,
    authorize,
    showModal,
    hideModal,
    step,
    authorized,
    amount,
    attemptingDeposit,
    attemptingWithdraw,
    depositCompleted,
    error,
    showConfirmDepositModal,
    showConfirmWithdrawModal,
    withdrawCompleted,
  ])

  return (
    <>
      <AppBody>
        <Box padding={'20px 40px 0 40px'}>
          <TYPE.largeHeader marginBottom="20px">Cross Chain Bridge</TYPE.largeHeader>
          <Box display="grid" gridGap="20px">
            <SwapForm
              showChainSelect={userLogined}
              showDestination={!!(amount && currency && from && to && !authorized)}
              onChangeAmount={onChangeAmount}
              amount={amount}
              currency={currency}
              currencyOptions={currencyOptions}
              onMax={onMax}
              setSelectedCurrency={setSelectedCurrency}
              userLogined={userLogined}
              from={from}
              to={to}
              onChangeFrom={onChangeFrom}
              onChangeTo={onChangeTo}
              address={address}
              onChangeAddress={onChangeAddress}
              chainList={ChainList}
              hintable={!withdrawCompleted}
            />
          </Box>
          {authorized && (
            <>
              <Box marginTop="16px">
                <Notification
                  type={NotificationType.WARNING}
                  message={
                    'You swap address will be your receiving address. Please switch the network to check your balance after completition.'
                  }
                />
              </Box>
              <Box
                width="100%"
                height="48px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding="0 16px 0 20px"
                border="1px solid rgba(255, 255, 255, 0.4)"
                borderRadius="10px"
                margin="20px auto 0"
              >
                <Text fontSize="16px" fontWeight={400}>
                  Now you can swap Matter
                </Text>
                <CheckIcon />
              </Box>
            </>
          )}
        </Box>

        <Box padding={'0 40px 0 40px'} margin="32px 0 24px 0">
          {getActions()}
        </Box>
        <Divider orientation={'horizontal'} />
        {authorized && currency && <QuotaInfo quota={quota} currency={currency.symbol} percentage={percentage} />}
      </AppBody>

      {showClaimModal && <ClaimModal isOpen={showClaimModal} onDismiss={() => setShowClaimModal(false)} />}
    </>
  )
}
