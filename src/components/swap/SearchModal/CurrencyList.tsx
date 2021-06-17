import React, { useCallback } from 'react'
import { FixedSizeList } from 'react-window'
import CurrencyLogo from '../../../assets/images/dummy_logo.png'
import { makeStyles } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import Currency from '../../../models/currency'
import { Text } from 'rebass'
import ImportButton from '../../Button/ImportButton'

function currencyKey(currency: Currency): string {
  return currency ? currency.symbol : ''
}

interface Props {
  currencies: Currency[]
  selectedCurrency?: Currency | null
  showImportView: () => void
  setImportToken: (token: Currency) => void
  showImportBtn: boolean
  onCurrencySelect: (currency: Currency) => void
}

const useStyles = makeStyles({
  currencyRow: {
    cursor: 'pointer',
    padding: '0 32px',
    height: 48,
    display: 'flex',
    justifyContent: 'space-between',
  },
})

export default function CurrencyList(props: Props) {
  const classes = useStyles(props)
  const { currencies, showImportBtn, showImportView, onCurrencySelect } = props

  const Row = ({ data, index, style }: any) => {
    const currency: Currency = data[index]

    const onClickCurrency = () => onCurrencySelect(currency)

    return (
      <div className={classes.currencyRow}>
        <Box display="flex" onClick={onClickCurrency}>
          <img src={CurrencyLogo} alt="currency-logo" width="30px" height="30px" />
          <Box display="flex" flexDirection="column" marginLeft="16px">
            <Text fontSize={16}>{currency.symbol}</Text>
            <Text fontSize={12} opacity={0.6}>
              {currency.name}
            </Text>
          </Box>
        </Box>
        {showImportBtn ? (
          <ImportButton onClick={showImportView}>Import</ImportButton>
        ) : (
          <Text fontSize={16}>{currency.balance}</Text>
        )}
      </div>
    )
  }

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
