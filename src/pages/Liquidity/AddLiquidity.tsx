import { useState, useCallback } from 'react'
import { Box } from '@material-ui/core'
import TextButton from 'components/Button/TextButton'
import CurrencyInputPanel from 'components/swap/CurrencyInputPanel/CurrencyInputPanel'
import AppBody from 'pages/AppBody'
import { useUserLogined } from 'state/user/hooks'
import { TYPE } from 'theme'
import { ReactComponent as ArrowLeft } from '../../assets/images/arrow_left.svg'
import { CurrencyList } from 'data/dummyData'
import Currency from 'models/currency'

export default function AddLiquidity({ onBackClick }: { onBackClick: () => void }) {
  const [amount, setAmount] = useState('')
  const [currency, setCurrency] = useState<Currency | null>(null)
  const userLogined = useUserLogined()

  const handleChangeAmount = useCallback((e) => setAmount(e.target.value), [])
  const handleCurrencySelect = useCallback((currency) => setCurrency(currency), [])
  return (
    <AppBody>
      <Box padding="20px 40px 40px" display="grid" gridGap="20px">
        <Box display="flex" justifyContent="space-between">
          <TextButton onClick={onBackClick}>
            <ArrowLeft />
          </TextButton>

          <TYPE.largeHeader>Add Liquidity</TYPE.largeHeader>
          <div />
        </Box>
        <CurrencyInputPanel
          onChange={handleChangeAmount}
          value={amount}
          selectedCurrency={currency}
          options={CurrencyList}
          onCurrencySelect={handleCurrencySelect}
          disabled={!userLogined}
          placeholder="Enter amount"
        />
      </Box>
    </AppBody>
  )
}
