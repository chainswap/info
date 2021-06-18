import { useMemo, SyntheticEvent } from 'react'
import { Box, Paper, useTheme } from '@material-ui/core'
import TextButton from 'components/Button/TextButton'
import CurrencyInputPanel from 'components/CurrencyInputPanel/CurrencyInputPanel'
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
import { LiquidityState } from '.'

interface Props {
  liquidityState: LiquidityState
  amount: string
  onAmount: (e: SyntheticEvent) => void
  currency: Currency | null
  onCurrency: (currency: Currency) => void
  chain: Chain | null
  onChain: (e: SyntheticEvent) => void
  onAction: () => void
  pending: boolean
  onBackClick: () => void
  cardData?: { [key: string]: string }
}

enum Error {
  TOKEN = 'Select Token',
  CHAIN = 'Select Chain',
  AMOUNT = 'Enter Amount',
}

export default function LiquidityForm({
  liquidityState,
  onBackClick,
  amount,
  currency,
  onAmount,
  onCurrency,
  chain,
  onChain,
  pending,
  onAction,
  cardData,
}: Props) {
  const theme = useTheme()
  const userLogined = useUserLogined()

  const error = useMemo(() => {
    if (!currency) {
      return Error.TOKEN
    }
    if (!amount) {
      return Error.AMOUNT
    }
    if (!chain) {
      return Error.CHAIN
    }
  }, [amount, chain, currency])

  return (
    <AppBody>
      <Box padding="20px 40px 40px" display="grid" gridGap="24px">
        <Box display="flex" justifyContent="space-between">
          <TextButton onClick={onBackClick}>
            <ArrowLeft />
          </TextButton>

          <TYPE.largeHeader>
            {liquidityState === LiquidityState.ADD && 'Add Liquidity'}
            {liquidityState === LiquidityState.DEPOSIT && 'Deposit'}
          </TYPE.largeHeader>
          <div />
        </Box>
        <CurrencyInputPanel
          onChange={onAmount}
          value={amount}
          selectedCurrency={currency}
          options={CurrencyList}
          onCurrencySelect={onCurrency}
          disabled={!userLogined}
          placeholder="Enter amount"
          onMax={() => {}}
          selectActive={error === Error.TOKEN}
          inputFocused={error === Error.AMOUNT}
        />
        <ChainSelect
          label="chain"
          chainList={ChainList}
          selectedChain={chain}
          onChange={onChain}
          width="100%"
          active={error === Error.CHAIN}
        />
        {!error && cardData && (
          <Paper
            variant="outlined"
            style={{ backgroundColor: 'transparent', border: '1px solid ' + theme.bgColor.bg4 }}
          >
            <Box display="grid" gridGap="16px" padding="16px 20px">
              <TYPE.medium>
                {liquidityState === LiquidityState.ADD && 'Pool Information'}
                {liquidityState === LiquidityState.DEPOSIT && 'Your Position'}
              </TYPE.medium>
              {Object.keys(cardData).map((key) => (
                <Box display="flex" justifyContent="space-between" key={key}>
                  <TYPE.smallGray>{key}</TYPE.smallGray>
                  <TYPE.small>{cardData[key as keyof typeof cardData]}</TYPE.small>
                </Box>
              ))}
            </Box>
          </Paper>
        )}

        <Box style={{ marginTop: 10 }}>
          {error || pending ? (
            <OutlineButton primary disabled loading={pending}>
              {pending ? <>Waiting Confirmation</> : error}
            </OutlineButton>
          ) : (
            <Button onClick={onAction}>Provide Liquidity</Button>
          )}
          {pending && (
            <TYPE.gray style={{ marginTop: 13, textAlign: 'center' }}>
              Confirm this transaction in your wallet
            </TYPE.gray>
          )}
        </Box>
      </Box>
    </AppBody>
  )
}
