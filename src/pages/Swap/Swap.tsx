import React, { useState, ChangeEvent, useEffect } from 'react'
import Button from '../../components/Button/Button'
import AppBody from '../AppBody'
import SwapHeader from '../../components/swap/SwapHeader'
import CurrencyInputPanel from '../../components/CurrencyInputPanel/CurrencyInputPanel'
import CurrencySelectPanel from '../../components/CurrencySelectPanel/CurrencySelectPanel'
import { useWalletModalToggle } from '../../state/application/hooks'
import WalletModal from '../../components/WalletModal'
import { styled } from '@material-ui/styles'
import Input from '../../components/Input/Input'
import Column from '../../components/Column/index'
import { RowBetween, RowFixed } from '../../components/Row/index'
import Stepper from '../../components/Stepper/Stepper'
import Row from '../../components/Row/index'

const FormWrapper = styled('div')({
  display: 'grid',
  gridGap: 20,
  padding: '0 32px',
})

const StepperWrapper = styled('div')({
  display: 'grid',
  gridGap: 16,
  padding: '28px 32px',
})

interface StepperContainerProps {
  onDeposit: () => void
  onWithdraw: () => void
  depositEnabled: boolean
  withdrawEnabled: boolean
  from: string
  to: string
}

function StepperContainer(props: StepperContainerProps) {
  const { depositEnabled, withdrawEnabled, onDeposit, onWithdraw, from, to } = props

  return (
    <>
      <RowBetween>
        <Button size="large" width="216px" disabled={!depositEnabled} onClick={onDeposit}>
          Deposit in {from} Chain
        </Button>
        <Button size="large" width="216px" disabled={!withdrawEnabled} onClick={onWithdraw}>
          Withdraw from {to} Chain
        </Button>
      </RowBetween>
      <Row justify={'center'}>
        <Stepper />
      </Row>
    </>
  )
}

const Seperator = styled('div')({
  width: '100%',
  height: 1,
  backgroundColor: '#FFFFFF',
  opacity: 0.2,
})

const Footer = styled('div')({
  width: '100%',
  borderRadius: '0 0 20px 20px',
  padding: 20,
})

const QuotaLabel = styled('label')({
  color: '#FFFFFF',
  opacity: 0.6,
  fontSize: 14,
  fontFamily: 'Roboto',
})

const QuotaData = styled('div')({
  display: 'flex',
  color: '#FFFFFF',
  fontWeight: 400,
  '& .percentage': {
    opacity: 0.4,
    marginLeft: 12,
  },
})

interface QuotaInfoProps {
  amount: number
  quota: number
  currency: string
}

function QuotaInfo(props: QuotaInfoProps) {
  const { amount, quota, currency } = props
  console.log(amount)
  // const amount = 0
  // const quota = 800
  // const currency = 'MATTER'
  const percentage = ((quota - amount) / quota) * 100
  return (
    <>
      <RowBetween>
        <QuotaLabel>Your Quota</QuotaLabel>
        <QuotaData>
          <div>
            {quota} {currency}
          </div>
          <div className="percentage">{percentage}% / 100%</div>
        </QuotaData>
      </RowBetween>
    </>
  )
}

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

  return (
    <>
      <AppBody>
        <SwapHeader />
        <FormWrapper>
          <CurrencyInputPanel onChange={onChangeAmount} value={amount} />
          <CurrencySelectPanel />
          {account && (
            <Column>
              <Input
                label={'Destination Chain Wallet Address'}
                value={address}
                placeholder={'Enter address to swap'}
                onChange={onChangeAddress}
              />
            </Column>
          )}
        </FormWrapper>

        {account && (
          <>
            <StepperWrapper>
              <StepperContainer
                depositEnabled={depositEnabled}
                withdrawEnabled={withdrawEnabled}
                from={from}
                to={to}
                onDeposit={onDeposit}
                onWithdraw={onWithdraw}
              />
            </StepperWrapper>
            <Seperator />
            <Footer>
              <QuotaInfo amount={parseFloat(amount)} quota={quota} currency={currency} />
              {/* <QuotaChart /> */}
            </Footer>
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
