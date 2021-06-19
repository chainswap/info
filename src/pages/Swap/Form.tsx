import React, { useState, ChangeEvent, useEffect, useRef } from 'react'
import { Box } from '@material-ui/core'
import CurrencyInputPanel from '../../components/CurrencyInputPanel/CurrencyInputPanel'
import ChainSelect from '../../components/ChainSelect/ChainSelect'
import Currency from '../../models/currency'
import Chain from '../../models/chain'
import Input from '../../components/Input/Input'
import { TYPE } from '../../theme/index'
import Switcher from '../../components/swap/Switcher'
import useCurrency from '../../hooks/useCurrency'
import usePrevious from '../../hooks/usePrevious'

interface Props {
  showChainSelect: boolean
  showDestination: boolean
  onChangeAmount: (e: ChangeEvent<HTMLInputElement>) => void
  amount: string
  currency: Currency | null
  currencyOptions: Currency[]
  onMax: () => void
  setSelectedCurrency: (currency: Currency) => void
  userLogined: boolean
  from: Chain | null
  to: Chain | null
  onChangeFrom: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeTo: (e: ChangeEvent<HTMLInputElement>) => void
  address: string
  onChangeAddress: (e: ChangeEvent<HTMLInputElement>) => void
  chainList: Chain[]
  hintable: boolean
}

enum Hintable {
  CURRENCY_INPUT,
  CURRENCY_SELECT,
  CHAIN_SELECT_FROM,
  CHAIN_SELECT_TO,
}

export default function Form(props: Props) {
  const {
    showChainSelect,
    showDestination,
    onChangeAmount,
    amount,
    onMax,
    setSelectedCurrency,
    userLogined,
    from,
    to,
    onChangeFrom,
    onChangeTo,
    address,
    onChangeAddress,
    chainList,
    hintable,
  } = props
  const [onHint, setOnHint] = useState<Hintable | null>(null)
  const [currency, setCurrency] = useState<Currency | null>(null)
  const { selectedCurrency } = useCurrency()
  const prevSelectedCurrency = usePrevious<Currency | null>(selectedCurrency)

  useEffect(() => {
    if (prevSelectedCurrency !== selectedCurrency) {
      setCurrency(selectedCurrency)
    }
  }, [selectedCurrency])

  // onHint
  useEffect(() => {
    if (!userLogined || !hintable) {
      return setOnHint(null)
    }
    if (!currency) {
      return setOnHint(Hintable.CURRENCY_SELECT)
    }
    if (!from) {
      return setOnHint(Hintable.CHAIN_SELECT_FROM)
    }
    if (!to) {
      return setOnHint(Hintable.CHAIN_SELECT_TO)
    }
    if (!amount) {
      return setOnHint(Hintable.CURRENCY_INPUT)
    }
  }, [currency, userLogined, from, to, amount, hintable])

  return (
    <>
      <CurrencyInputPanel
        onChange={onChangeAmount}
        value={amount}
        selectedCurrency={currency}
        onMax={onMax}
        setSelectedCurrency={setSelectedCurrency}
        disabled={!userLogined}
        selectActive={onHint === Hintable.CURRENCY_SELECT}
        inputFocused={!amount && onHint === Hintable.CURRENCY_INPUT}
      />
      {showChainSelect && (
        <Box display="flex" justifyContent="space-between" alignItems={'flex-end'} position={'relative'}>
          <ChainSelect
            label={'From'}
            selectedChain={from}
            chainList={chainList}
            onChange={onChangeFrom}
            width={'232px'}
            active={onHint === Hintable.CHAIN_SELECT_FROM}
          />
          <Box position={'absolute'} left={'calc(50% - 16px)'} zIndex={99} padding="0px" height="32px" bottom="8px">
            <Switcher />
          </Box>
          <ChainSelect
            label={'To'}
            selectedChain={to}
            chainList={chainList}
            onChange={onChangeTo}
            width={'232px'}
            active={onHint === Hintable.CHAIN_SELECT_TO}
          />
        </Box>
      )}
      {showDestination && (
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
    </>
  )
}
