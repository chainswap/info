import React, { useCallback } from 'react'
import { FixedSizeList } from 'react-window'
import { styled } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import Currency from '../../models/currency'
import { Mode } from './SelectCurrency'
import Image from '../Image/Image'
import { TYPE } from '../../theme/index'
import ImportButton from 'components/Button/ImportButton'
import ImportCurrencyModal from '../../pages/Swap/ImportCurrencyModal'
import useModal from '../../hooks/useModal'
import useCurrency from '../../hooks/useCurrency'

interface Props {
  selectedCurrency?: Currency | null
  mode?: Mode
}

const ListItem = styled('div')({
  display: 'flex',
  cursor: 'pointer',
  padding: '0 32px',
  height: '48px',
  justifyContent: 'space-between',
})

export default function CurrencyList(props: Props) {
  const { mode } = props
  const { showModal, hideModal } = useModal()
  const { currencyOptions, setCurrency } = useCurrency()

  const currencyKey = useCallback((currency: Currency): string => {
    return currency ? currency.symbol : ''
  }, [])

  const itemKey = useCallback((index: number, data: any) => currencyKey(data[index]), [currencyKey])

  const Row = ({ data, index }: any) => {
    const currency: Currency = data[index]
    const onClickCurrency = useCallback(() => {
      setCurrency(currency)
      hideModal()
    }, [currency])

    return (
      <ListItem onClick={mode === Mode.SELECT ? onClickCurrency : () => {}}>
        <Box display="flex">
          <Image src={currency.logo} alt="currency-logo" style={{ width: '30px', height: '30px' }} />
          <Box display="flex" flexDirection="column" marginLeft="16px">
            <TYPE.body>{currency.symbol}</TYPE.body>
            <TYPE.smallGray>{currency.name}</TYPE.smallGray>
          </Box>
        </Box>
        {mode === Mode.SELECT && <TYPE.bold>{currency.balance}</TYPE.bold>}
        {mode === Mode.IMPORT && (
          <ImportButton
            onClick={() => {
              showModal(<ImportCurrencyModal />)
            }}
          >
            Import
          </ImportButton>
        )}
      </ListItem>
    )
  }

  return (
    <FixedSizeList
      height={290}
      width="100%"
      itemCount={currencyOptions.length}
      itemSize={56}
      itemData={currencyOptions}
      itemKey={itemKey}
    >
      {Row}
    </FixedSizeList>
  )
}
