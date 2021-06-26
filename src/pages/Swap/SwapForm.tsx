import React, { useState, ChangeEvent, useEffect } from 'react'
import { Box } from '@material-ui/core'
import CurrencyInputPanel from 'components/CurrencyInputPanel/CurrencyInputPanel'
import ChainSelect from 'components/ChainSelect/ChainSelect'
import Currency from 'models/currency'
import Chain from 'models/chain'
import Input from 'components/Input/Input'
import { TYPE } from 'theme/index'
import Switcher from 'components/swap/Switcher'
import useCurrency from 'hooks/useCurrency'
import useBreakpoint from 'hooks/useBreakpoint'

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

enum FormItem {
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
  const { currency } = useCurrency()
  const { matches } = useBreakpoint()

  const [active, setActive] = useState<FormItem | null>(null)

  useEffect(() => {
    if (!userLogined || !hintable) {
      return setActive(null)
    }
    if (!currency) {
      return setActive(FormItem.CURRENCY_SELECT)
    }
    if (!from) {
      return setActive(FormItem.CHAIN_SELECT_FROM)
    }
    if (!to) {
      return setActive(FormItem.CHAIN_SELECT_TO)
    }
    if (!amount) {
      return setActive(FormItem.CURRENCY_INPUT)
    }
    setActive(null)
  }, [currency, userLogined, from, to, amount, hintable])

  return (
    <>
      <CurrencyInputPanel
        onChange={onChangeAmount}
        value={amount}
        onMax={onMax}
        disabled={!userLogined}
        selectActive={active === FormItem.CURRENCY_SELECT}
        inputFocused={!amount && active === FormItem.CURRENCY_INPUT}
      />
      {showChainSelect && (
        <Box
          mt="24px"
          display="flex"
          flexDirection={matches ? 'column' : 'row'}
          justifyContent="space-between"
          alignItems={matches ? 'center' : 'flex-end'}
          position={'relative'}
        >
          <ChainSelect
            label={'From'}
            selectedChain={from}
            chainList={chainList}
            onChange={onChangeFrom}
            width={matches ? '100%' : '232px'}
            active={active === FormItem.CHAIN_SELECT_FROM}
          />

          {matches ? (
            <Box mt="12px">
              <Switcher />
            </Box>
          ) : (
            <Box position="absolute" left={'calc(50% - 16px)'} zIndex={1} height="32px" bottom="8px">
              <Switcher />
            </Box>
          )}

          <ChainSelect
            label={'To'}
            selectedChain={to}
            chainList={chainList}
            onChange={onChangeTo}
            width={matches ? '100%' : '232px'}
            active={active === FormItem.CHAIN_SELECT_TO}
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
