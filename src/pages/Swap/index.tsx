import React, { useState, ChangeEvent, useCallback, useEffect } from 'react'
import Button from '../../components/Button/Button'
import SecondaryButton from '../../components/Button/SecondaryButton'
import AppBody from '../AppBody'
import { Box } from '@material-ui/core'
import QuotaInfo from '../../components/swap/QuotaInfo'
import ConfirmDepositModal from './ConfirmDepositModal'
import SwapStepper from '../../components/swap/SwapStepper'
import TxnSubmittedMessageBox from './TxnSubmittedMessageBox'
import MetaMask from '../../assets/images/meta_mask.svg'
import ConfirmWithdrawModal from './ConfirmWithdrawModal'
import { CurrencyList, ChainList } from '../../data/dummyData'
import Divider from '../../components/Divider/Divider'
import WalletModal from '../../components/WalletModal/WalletModal'
import useModal from '../../hooks/useModal'
import { useUserLogined } from '../../state/user/hooks'
import { Text } from 'rebass'
import Currency from '../../models/currency'
import { ReactComponent as CheckIcon } from '../../assets/images/check_icon.svg'
import ClaimModal from '../../components/claim/ClaimModal'
import OutlineButton from '../../components/Button/OutlineButton'
import Chain from '../../models/chain'
import { TYPE } from '../../theme/index'
import Form from './Form'
import Notification, { NotificationType } from '../../components/Notification/Notification'
import usePrevious from 'hooks/usePrevious'
import useCurrency from 'hooks/useCurrency'

export default function Swap() {
  const userLogined = useUserLogined()
  const [amount, setAmount] = useState('')
  const [address, setAddress] = useState('0xKos369cd6vwd94wq1gt4hr87ujv')
  const [from, setFrom] = useState<Chain | null>(null)
  const [to, setTo] = useState<Chain | null>(null)
  const [depositEnabled, setDepositEnabled] = useState(false)
  const [withdrawEnabled, setWithdrawEnabled] = useState(false)
  const [quota] = useState(800)
  const [currency, setCurrency] = useState<Currency | null>(null)
  const { showModal, hideModal } = useModal()
  const [percentage, setPercentage] = useState(0)
  const [step, setStep] = useState(0)
  const [authorized, setAuthorized] = useState(false)
  const [showClaimModal, setShowClaimModal] = useState(false)
  const { selectedCurrency } = useCurrency()
  const prevSelectedCurrency = usePrevious(selectedCurrency)

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
    if (prevSelectedCurrency !== selectedCurrency) {
      setCurrency(selectedCurrency)
    }
  }, [selectedCurrency])

  useEffect(() => {
    if (amount && address && !depositCompleted) {
      setDepositEnabled(true)
      return
    }
    setDepositEnabled(false)
  }, [amount, address, depositCompleted])

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
    setDepositEnabled(false)
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
      setWithdrawEnabled(true)
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
    setWithdrawEnabled(false)
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
      setDepositEnabled(false)
      setWithdrawEnabled(false)
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
    [hideModal]
  )

  const authorize = useCallback(() => {
    setAuthorized(true)
  }, [])

  const getDepositBtn = useCallback(() => {
    if (!from) {
      return
    }
    if (attemptingDeposit) {
      return (
        <OutlineButton width="232px" loading primary>
          <Text marginLeft={12} fontSize={16}>
            Depositing
          </Text>
        </OutlineButton>
      )
    }
    return (
      <Button width="232px" disabled={!depositEnabled} onClick={showConfirmDepositModal}>
        <Text marginLeft={12} fontSize={16}>
          Deposit in {from.symbol} Chain
        </Text>
      </Button>
    )
  }, [from, attemptingDeposit, depositEnabled, showConfirmDepositModal])

  const getWithdrawBtn = useCallback(() => {
    if (!to) {
      return
    }
    if (attemptingWithdraw) {
      return (
        <OutlineButton width="232px" loading primary>
          <Text marginLeft={12} fontSize={16}>
            Withdrawing
          </Text>
        </OutlineButton>
      )
    }
    if (depositCompleted && !withdrawCompleted && !amount) {
      return (
        <OutlineButton width="232px" primary>
          Enter Amount
        </OutlineButton>
      )
    }
    return (
      <Button width={'232px'} disabled={!withdrawEnabled} onClick={showConfirmWithdrawModal}>
        <Text marginLeft={12} fontSize={16}>
          Withdraw from {to.symbol} Chain
        </Text>
      </Button>
    )
  }, [to, amount, attemptingWithdraw, withdrawEnabled, showConfirmWithdrawModal, depositCompleted, withdrawCompleted])

  const getActions = useCallback(() => {
    if (!userLogined) {
      return (
        <SecondaryButton onClick={() => showModal(<WalletModal onDismiss={hideModal} />)}>
          Connect Wallet
        </SecondaryButton>
      )
    }
    if (!currency) {
      return <OutlineButton primary>Select Token</OutlineButton>
    }
    if (!from || !to) {
      return <OutlineButton primary>Select Chain</OutlineButton>
    }
    if (!authorized && !amount) {
      return <OutlineButton primary>Enter Amount</OutlineButton>
    }
    if (!authorized) {
      return <Button onClick={authorize}>Allow the Chainswap protocol to use your Matter</Button>
    }

    return (
      <>
        <Box display="flex" justifyContent="space-between">
          {getDepositBtn()}
          {getWithdrawBtn()}
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
    getDepositBtn,
    getWithdrawBtn,
  ])

  return (
    <>
      <AppBody>
        <Box padding={'20px 40px 0 40px'}>
          <TYPE.largeHeader marginBottom="20px">Cross Chain Bridge</TYPE.largeHeader>
          <Box display="grid" gridGap="20px">
            <Form
              showChainSelect={userLogined}
              showDestination={!!(amount && currency && from && to && !authorized)}
              onChangeAmount={onChangeAmount}
              amount={amount}
              currency={currency}
              currencyOptions={CurrencyList}
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
