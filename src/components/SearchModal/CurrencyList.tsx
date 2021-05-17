import React, { CSSProperties, useCallback } from 'react'
import { FixedSizeList } from 'react-window'
import CurrencyLogo from '../../assets/images/dummy_logo.png'
import { styled } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import Currency from '../../models/currency'

function currencyKey(currency: Currency): string {
  return currency ? currency.symbol : ''
}

interface Props {
  currencies: Currency[]
  selectedCurrency?: Currency | null
  // onCurrencySelect: (currency: Currency) => void
  // otherCurrency?: Currency | null
  // fixedListRef?: MutableRefObject<FixedSizeList | undefined>
  // showETH: boolean
  // showImportView: () => void
  // setImportToken: (token: Token) => void
  // breakIndex: number | undefined
}

const MenuItem = styled('div')({
  padding: '0 32px',
  height: 48,
  display: 'flex',
  justifyContent: 'space-between',
})

const CurrencySymbol = styled('div')({
  fontSize: 16,
  color: '#FFFFFF',
})

const CurrencyName = styled('div')({
  fontSize: 12,
  color: '#FFFFFF',
  opacity: 0.6,
})

const Balance = styled('div')({
  size: 16,
  color: '#FFFFFF',
})

const CurrencyRow = ({ style, currency, onSelect }: { style: CSSProperties; currency: any; onSelect: () => void }) => {
  return (
    <MenuItem>
      <Box display="flex">
        <img src={CurrencyLogo} alt="currency-logo" width="30px" height="30px" />
        <Box display="flex" flexDirection="column" marginLeft="16px">
          <CurrencySymbol>{currency.symbol}</CurrencySymbol>
          <CurrencyName>{currency.name}</CurrencyName>
        </Box>
      </Box>
      <Balance>{currency.balance}</Balance>
    </MenuItem>
  )
}

export default function CurrencyList(props: Props) {
  const { currencies, selectedCurrency } = props

  const Row = useCallback(
    ({ data, index, style }: any) => {
      const currency: Currency = data[index]
      console.log(currency)

      const onSelect = () => {
        alert('onCurrencySelect')
      }

      return <CurrencyRow style={style} currency={currency} onSelect={onSelect} />
    },
    [selectedCurrency]
  )

  const itemKey = useCallback((index: number, data: any) => currencyKey(data[index]), [])

  return (
    <FixedSizeList
      height={290}
      width="100%"
      itemCount={currencies.length}
      itemSize={56}
      itemData={currencies}
      itemKey={itemKey}
    >
      {Row}
    </FixedSizeList>
  )
}
