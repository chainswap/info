import React, { CSSProperties, useCallback } from 'react'
import { FixedSizeList } from 'react-window'
import CurrencyLogo from '../../assets/images/dummy_logo.png'
import { styled } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import Currency from '../../models/currency'
import { Text } from 'rebass'
import OutlineButton from '../Button/OutlineButton'

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
  showImportView: () => void
  setImportToken: (token: Currency) => void
  // breakIndex: number | undefined
}

const CurrencyRow = ({
  style,
  currency,
  onSelect,
  showImportView,
  setImportToken,
}: {
  style: CSSProperties
  currency: any
  onSelect: () => void
  showImportView: () => void
  setImportToken: (token: Currency) => void
}) => {
  const showImport = true

  return (
    <Box padding={'0 32px'} height={48} display={'flex'} justifyContent={'space-between'}>
      <Box display="flex">
        <img src={CurrencyLogo} alt="currency-logo" width="30px" height="30px" />
        <Box display="flex" flexDirection="column" marginLeft="16px">
          <Text fontSize={16}>{currency.symbol}</Text>
          <Text fontSize={12} opacity={0.6}>
            {currency.name}
          </Text>
        </Box>
      </Box>
      {showImport ? (
        <OutlineButton size={'small'} width={'84px'} height={'36px'} primary onClick={showImportView}>
          Import
        </OutlineButton>
      ) : (
        <Text fontSize={16}>{currency.balance}</Text>
      )}
    </Box>
  )
}

export default function CurrencyList(props: Props) {
  const { currencies, selectedCurrency, showImportView, setImportToken } = props

  const Row = useCallback(
    ({ data, index, style }: any) => {
      const currency: Currency = data[index]

      const onSelect = () => {
        alert('onCurrencySelect')
      }

      return (
        <CurrencyRow
          style={style}
          currency={currency}
          onSelect={onSelect}
          showImportView={showImportView}
          setImportToken={setImportToken}
        />
      )
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
