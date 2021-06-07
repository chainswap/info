import React, { useState, ChangeEvent, useCallback, useContext, useEffect } from 'react'
import { styled } from '@material-ui/styles'
import Button from '../../components/Button/Button'
import AppBody from '../AppBody'
import CurrencyInputPanel from '../../components/CurrencyInputPanel/CurrencyInputPanel'
import ChainSelectPanel from '../../components/ChainSelectPanel/ChainSelectPanel'
import { Box } from '@material-ui/core'
import Input from '../../components/Input/Input'
// import QuotaInfo from './QuotaInfo'
// import QuotaBar from './QuotaBar'
import ConfirmDepositModal from './ConfirmDepositModal'
import Stepper from '../../components/Stepper/Stepper'
import TxnSubmittedMessageBox from './TxnSubmittedMessageBox'
import MetaMask from '../../assets/images/meta_mask.svg'
import ConfirmWithdrawModal from './ConfirmWithdrawModal'
import { CurrencyList, ChainList } from '../../data/dummyData'
import Divider from '../../components/Divider/Divider'
import WalletModal from '../../components/WalletModal/WalletModal'
import { ModalContext } from '../../context/ModalContext'
import { useUserLogined } from '../../state/user/hooks'
import Loader from '../../assets/images/loader.svg'
import Image from '../../components/Image/Image'
import { Text } from 'rebass'
import Currency from '../../models/currency'
import CheckIcon from '../../assets/images/check_icon.svg'
import TextButton from '../../components/Button/TextButton'
import ClaimModal from '../../components/claim/ClaimModal'

const AppHeader = styled('div')({
  fontWeight: 500,
  fontSize: 20,
  fontFamily: 'Futura PT',
  margin: '12px 0 18px 0',
  textAlign: 'center',
})

const Notification = styled('div')({
  width: 448,
  height: 48,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 30px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: 32,
  margin: '20px auto 0',
})

export default function Swap() {
  const userLogined = useUserLogined()
  const [amount, setAmount] = useState('')
  const [address, setAddress] = useState('0x72ef586A2c515B605A873ad9a8FBdFD43Df77123')
  const [from, setFrom] = useState(ChainList[0])
  const [to, setTo] = useState(ChainList[1])
  const [depositEnabled, setDepositEnabled] = useState(false)
  const [withdrawEnabled, setWithdrawEnabled] = useState(false)
  const [quota, setQuota] = useState(800)
  const [currency, setCurrency] = useState<Currency | null>(null)
  const { showModal, hideModal } = useContext(ModalContext)
  // const [percentage, setPercentage] = useState(0)
  const [step, setStep] = useState(0)
  const [authorized, setAutorized] = useState(false)
  const [wallet, setWallet] = useState({ logo: MetaMask, name: 'MetaMask' })

  // swap state
  const [{ attemptingDeposit, attemptingWithdraw, depositCompleted, withdrawCompleted }, setSwapState] = useState<{
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
    if (amount && address) {
      setDepositEnabled(true)
      return
    }
    setDepositEnabled(false)
  }, [amount, address])

  // useEffect(() => {
  //   const percentage = ((quota - parseFloat(amount)) / quota) * 100
  //   setPercentage(percentage)
  // }, [quota, amount])

  useEffect(() => {
    if (depositCompleted && withdrawCompleted) {
      setStep(2)
    } else if (depositCompleted) {
      setStep(1)
    }
  }, [depositCompleted, withdrawCompleted])

  const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.currentTarget.value)
  }

  const onChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    let currentAddress = e.currentTarget.value
    setAddress(currentAddress)
  }

  const onChangeTo = (e: any) => {
    const chain = ChainList.filter((el) => el.symbol === e.target.value)[0]
    setTo(chain)
  }

  const onChangeFrom = (e: any) => {
    const chain = ChainList.filter((el) => el.symbol === e.target.value)[0]
    setFrom(chain)
  }

  const onMax = () => {
    const maxAmount = quota.toString()
    setAmount(maxAmount)
  }

  const onConfirmDeposit = useCallback(() => {
    if (!currency) return
    hideModal()
    setDepositEnabled(false)
    setSwapState({
      attemptingDeposit: true,
      attemptingWithdraw: false,
      depositCompleted: false,
      withdrawCompleted: false,
    })

    setTimeout(function () {
      showModal(<TxnSubmittedMessageBox currency={currency} wallet={wallet} />)
      setSwapState({
        attemptingDeposit: false,
        attemptingWithdraw: false,
        depositCompleted: true,
        withdrawCompleted: false,
      })
      setWithdrawEnabled(true)
    }, 1500)
  }, [currency])

  const showConfirmDepositModal = () => {
    if (!currency) return

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
  }

  const onConfirmWithdraw = useCallback(() => {
    if (!currency) return

    hideModal()
    setWithdrawEnabled(false)
    setSwapState({
      attemptingDeposit: false,
      attemptingWithdraw: true,
      depositCompleted: true,
      withdrawCompleted: false,
    })

    setTimeout(function () {
      showModal(<TxnSubmittedMessageBox currency={currency} wallet={wallet} />)
      setSwapState({
        attemptingDeposit: false,
        attemptingWithdraw: false,
        depositCompleted: true,
        withdrawCompleted: true,
      })
      setDepositEnabled(false)
      setWithdrawEnabled(false)
    }, 1500)
  }, [currency])

  const showConfirmWithdrawModal = () => {
    if (!currency) return

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
  }

  const onCurrencySelect = (currency: Currency) => {
    setCurrency(currency)
    hideModal()
  }

  const authorize = () => {
    setAutorized(true)
  }

  return (
    <>
      <AppBody>
        <AppHeader>Cross Chain Bridge</AppHeader>

        <Box display="grid" gridGap="20px" padding="0 32px">
          <CurrencyInputPanel
            onChange={onChangeAmount}
            value={amount}
            selectedCurrency={currency}
            options={CurrencyList}
            onMax={onMax}
            onCurrencySelect={onCurrencySelect}
            disabled={!userLogined}
          />
          {userLogined && currency && (
            <>
              <ChainSelectPanel
                from={from}
                to={to}
                chainList={ChainList}
                onChangeTo={onChangeTo}
                onChangeFrom={onChangeFrom}
              />

              <Box>
                <Input
                  label={'Destination Chain Wallet Address'}
                  value={address}
                  placeholder={'Enter address to swap'}
                  onChange={onChangeAddress}
                />
                <Text fontSize={12} opacity={0.5} marginTop={'6px'}>
                  This is destination address of the To network
                </Text>
              </Box>
            </>
          )}
        </Box>

        {/* Buttons */}

        {userLogined && currency && authorized && (
          <>
            <Notification>
              <Text>Now you can swap Matter</Text>
              <Image src={CheckIcon} alt={'check icon'} />
            </Notification>
            <Box display="grid" gridGap="16px" padding="28px 32px 0 32px">
              <Box display="flex" justifyContent="space-between">
                <Button width={'216px'} disabled={!depositEnabled} onClick={showConfirmDepositModal}>
                  {attemptingDeposit ? (
                    <>
                      <Image src={Loader} alt={'loader icon'} />
                      <Text marginLeft={12} fontSize={16}>
                        Depositing
                      </Text>
                    </>
                  ) : (
                    <Text marginLeft={12} fontSize={16}>
                      Deposit in {from.symbol} Chain
                    </Text>
                  )}
                </Button>
                <Button width={'216px'} disabled={!withdrawEnabled} onClick={showConfirmWithdrawModal}>
                  {attemptingWithdraw ? (
                    <>
                      <Image src={Loader} alt={'loader icon'} />
                      <Text marginLeft={12} fontSize={16}>
                        Withdrawing
                      </Text>
                    </>
                  ) : (
                    <Text marginLeft={12} fontSize={16}>
                      Withdraw from {to.symbol} Chain
                    </Text>
                  )}
                </Button>
              </Box>
              <Box display="flex" justifyContent="center">
                <Stepper activeStep={step} />
              </Box>
            </Box>
            <Divider orientation={'horizontal'} margin={'24px 0 0 0'} />
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={60}>
              <TextButton onClick={() => showModal(<ClaimModal />)} primary>
                Claim List
              </TextButton>
            </Box>
            {/* <Box display="grid" gridGap="12px" padding="0 32px 28px 32px">
              <QuotaInfo quota={quota} currency={currency.symbol} percentage={percentage} />
              <QuotaBar percentage={percentage} />
            </Box> */}
          </>
        )}

        {userLogined && currency && !authorized && (
          <Box padding="32px 32px 36px 32px">
            <Button onClick={authorize}>Allow the Chainswap protocol to use your Matter</Button>
          </Box>
        )}

        {userLogined && !currency && (
          <Box padding="32px 32px 36px 32px">
            <Button disabled>Please select token for more options</Button>
          </Box>
        )}

        {!userLogined && (
          <Box padding="27px 32px 31px">
            <Button onClick={() => showModal(<WalletModal />)}>Connect Wallet</Button>
          </Box>
        )}
      </AppBody>
    </>
  )
}
