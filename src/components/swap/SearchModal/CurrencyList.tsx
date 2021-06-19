import React, { useCallback } from 'react'
import { FixedSizeList } from 'react-window'
import { makeStyles } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import Currency from '../../../models/currency'
import { Text } from 'rebass'
import { Mode } from './SelectCurrencyModal'
import Image from '../../Image/Image'
import { TYPE } from '../../../theme/index'
import ImportButton from 'components/Button/ImportButton'

function currencyKey(currency: Currency): string {
  return currency ? currency.symbol : ''
}

interface Props {
  currencies: Currency[]
  selectedCurrency?: Currency | null
  mode?: Mode
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
  const { currencies, onCurrencySelect, mode } = props

  const Row = ({ data, index, style }: any) => {
    const currency: Currency = data[index]
    const onClickCurrency = () => onCurrencySelect(currency)

    return (
      <div className={classes.currencyRow}>
        <Box display="flex" onClick={onClickCurrency}>
          <Image src={currency.logo} alt="currency-logo" style={{ width: '30px', height: '30px' }} />
          <Box display="flex" flexDirection="column" marginLeft="16px">
            <Text fontSize={16}>{currency.symbol}</Text>
            <Text fontSize={12} opacity={0.6}>
              {currency.name}
            </Text>
          </Box>
        </Box>
        {mode === Mode.SELECT ? (
          <TYPE.bold>{currency.balance}</TYPE.bold>
        ) : (
          <ImportButton onClick={() => {}}>Import</ImportButton>
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
