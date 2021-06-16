import React, { useState, ChangeEvent, useCallback, useEffect } from 'react'
import { styled } from '@material-ui/styles'
import Button from '../../components/Button/Button'
import SecondaryButton from '../../components/Button/SecondaryButton'
import AppBody from '../AppBody'
import CurrencyInputPanel from '../../components/swap/CurrencyInputPanel/CurrencyInputPanel'
import ChainSelectPanel from '../../components/swap/ChainSelectPanel/ChainSelectPanel'
import { Box } from '@material-ui/core'
import Input from '../../components/Input/Input'
// import QuotaInfo from '../../components/swap/QuotaInfo'
// import QuotaBar from '../../components/swap/QuotaBar'
import ConfirmDepositModal from '../../components/swap/ConfirmDepositModal'
import SwapStepper from '../../components/swap/SwapStepper'
import TxnSubmittedMessageBox from '../../components/swap/TxnSubmittedMessageBox'
import MetaMask from '../../assets/images/meta_mask.svg'
import ConfirmWithdrawModal from '../../components/swap/ConfirmWithdrawModal'
import { CurrencyList, ChainList } from '../../data/dummyData'
import Divider from '../../components/Divider/Divider'
import WalletModal from '../../components/WalletModal/WalletModal'
import useModal from '../../hooks/useModal'
import { useUserLogined } from '../../state/user/hooks'
import Loader from '../../assets/images/loader.svg'
import Image from '../../components/Image/Image'
import { Text } from 'rebass'
import Currency from '../../models/currency'
import { ReactComponent as CheckIcon } from '../../assets/images/check_icon.svg'
import ClaimModal from '../../components/claim/ClaimModal'
import OutlineButton from '../../components/Button/OutlineButton'
import Chain from '../../models/chain'
import { TYPE } from '../../theme/index'

const Notification = styled('div')({
  width: '100%',
  height: 48,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 16px 0 20px',
  border: '1px solid rgba(255, 255, 255, 0.4)',
  borderRadius: 10,
  margin: '20px auto 0',
})

export default function Swap() {
  const userLogined = useUserLogined()
  const [amount, setAmount] = useState('')
  const [address, setAddress] = useState('0x72ef586A2c515B605A873ad9a8FBdFD43Df77123')
  const [from, setFrom] = useState<Chain | null>(null)
  const [to, setTo] = useState<Chain | null>(null)
  const [depositEnabled, setDepositEnabled] = useState(false)
  const [withdrawEnabled, setWithdrawEnabled] = useState(false)
  const [quota] = useState(800)
  const [currency, setCurrency] = useState<Currency | null>(null)
  const { showModal, hideModal } = useModal()
  // const [percentage, setPercentage] = useState(0)
  const [step, setStep] = useState(0)
  const [authorized, setAutorized] = useState(false)
  // const [wallet] = useState({ logo: MetaMask, name: 'MetaMask' })
  const [showClaimModal, setShowClaimModal] = useState(false)

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
      showModal(<TxnSubmittedMessageBox action={() => {}} />)
      setSwapState({
        attemptingDeposit: false,
        attemptingWithdraw: false,
        depositCompleted: true,
        withdrawCompleted: false,
      })
      setWithdrawEnabled(true)
    }, 1500)
  }, [showModal, hideModal, currency])

  const showConfirmDepositModal = () => {
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
      showModal(<TxnSubmittedMessageBox action={() => {}} />)
      setSwapState({
        attemptingDeposit: false,
        attemptingWithdraw: false,
        depositCompleted: true,
        withdrawCompleted: true,
      })
      setDepositEnabled(false)
      setWithdrawEnabled(false)
    }, 1500)
  }, [showModal, hideModal, currency])

  const showConfirmWithdrawModal = () => {
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
        <Box padding={'20px 40px 0 40px'}>
          <TYPE.largeHeader marginBottom="20px">Cross Chain Bridge</TYPE.largeHeader>
          <Box display="grid" gridGap="20px">
            <CurrencyInputPanel
              onChange={onChangeAmount}
              value={amount}
              selectedCurrency={currency}
              options={CurrencyList}
              onMax={onMax}
              onCurrencySelect={onCurrencySelect}
              disabled={!userLogined}
            />
            {userLogined && (
              <ChainSelectPanel
                from={from}
                to={to}
                chainList={ChainList}
                onChangeTo={onChangeTo}
                onChangeFrom={onChangeFrom}
              />
            )}

            {userLogined && currency && (
              <>
                <Box>
                  <Input
                    label={'Destination Chain Wallet Address'}
                    value={address}
                    placeholder={'Enter address to swap'}
                    onChange={onChangeAddress}
                  />
                  <TYPE.mediumGray marginTop={'12px'}>This is destination address of the To network</TYPE.mediumGray>
                </Box>
              </>
            )}
          </Box>

          {/* Buttons */}

          {userLogined && currency && authorized && from && to && (
            <>
              <Notification>
                <Text fontSize="16px" fontWeight={400}>
                  Now you can swap Matter
                </Text>
                <CheckIcon />
              </Notification>
              <Box display="grid" gridGap="16px" marginTop="28px" marginBottom={'24px'}>
                <Box display="flex" justifyContent="space-between">
                  <Button width={'232px'} disabled={!depositEnabled} onClick={showConfirmDepositModal}>
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
                  <Button width={'232px'} disabled={!withdrawEnabled} onClick={showConfirmWithdrawModal}>
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
                  <SwapStepper activeStep={step} />
                </Box>
              </Box>
              <Divider orientation={'horizontal'} />
              {/* <Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={60}>
                <TextButton onClick={() => setShowClaimModal(true)} primary>
                  Claim List
                </TextButton>
              </Box> */}
              {/* <Box display="grid" gridGap="12px" padding="0 32px 28px 32px">
                <QuotaInfo quota={quota} currency={currency.symbol} percentage={70} />
                <QuotaBar percentage={70} />
              </Box> */}
            </>
          )}
        </Box>

        <Box padding={'0 40px 40px 40px'}>
          {userLogined && currency && !authorized && (
            <Box marginTop="32px">
              <Button onClick={authorize}>Allow the Chainswap protocol to use your Matter</Button>
            </Box>
          )}

          {userLogined && !currency && (
            <Box marginTop="32px">
              <OutlineButton primary>Select Token</OutlineButton>
            </Box>
          )}

          {!userLogined && (
            <Box marginTop="32px">
              <SecondaryButton onClick={() => showModal(<WalletModal />)}>Connect Wallet</SecondaryButton>
            </Box>
          )}
        </Box>
      </AppBody>

      {showClaimModal && <ClaimModal isOpen={showClaimModal} onDismiss={() => setShowClaimModal(false)} />}
    </>
  )
}
