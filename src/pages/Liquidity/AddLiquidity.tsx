import { useState, useCallback, useMemo } from 'react'
import { Box, Paper } from '@material-ui/core'
import TextButton from 'components/Button/TextButton'
import CurrencyInputPanel from 'components/swap/CurrencyInputPanel/CurrencyInputPanel'
import AppBody from 'pages/AppBody'
import { useUserLogined } from 'state/user/hooks'
import { TYPE } from 'theme'
import { ReactComponent as ArrowLeft } from '../../assets/images/arrow_left.svg'
import { ChainList, CurrencyList } from 'data/dummyData'
import Currency from 'models/currency'
import ChainSelect from 'components/ChainSelect/ChainSelect'
import Chain from 'models/chain'
import Button from 'components/Button/Button'
import OutlineButton from 'components/Button/OutlineButton'

export default function AddLiquidity({ onBackClick }: { onBackClick: () => void }) {
  const [amount, setAmount] = useState('')
  const [currency, setCurrency] = useState<Currency | null>(null)
  const [chain, setChain] = useState<Chain | null>(null)
  const error = useMemo(() => {
    if (!currency) {
      return 'Select Token'
    }
    if (!chain) {
      return 'Select Chain'
    }
    if (!amount) {
      return 'Enter Amount'
    }
  }, [amount, chain, currency])

  const userLogined = useUserLogined()

  const handleChangeAmount = useCallback((e) => setAmount(e.target.value), [])
  const handleCurrencySelect = useCallback((currency) => setCurrency(currency), [])
  return (
    <AppBody>
      <Box padding="20px 40px 40px" display="grid" gridGap="24px">
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
          onMax={() => {}}
        />
        <ChainSelect
          label="chain"
          chainList={ChainList}
          selectedChain={chain}
          placeholder={'Select Chain'}
          onChange={(e) => {
            setChain(ChainList.find((chain) => chain.symbol === e.target.value) ?? null)
          }}
          width="100%"
        />
        {/* {!error && ( */}
        <Paper variant="outlined" style={{ backgroundColor: 'transparent' }}>
          <Box display="grid" gridGap="16px" padding="16px 20px">
            <TYPE.medium>Pool Information</TYPE.medium>
            <Box display="flex" justifyContent="space-between">
              <TYPE.smallGray>Share of pool</TYPE.smallGray>
              <TYPE.smallGray>0.003%</TYPE.smallGray>
            </Box>
          </Box>
        </Paper>

        <Box style={{ marginTop: 10 }}>
          {error ? (
            <OutlineButton primary disabled>
              {error}
            </OutlineButton>
          ) : (
            <Button>Provide Liquidity</Button>
          )}
        </Box>
      </Box>
    </AppBody>
  )
}
