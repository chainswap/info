import { useMemo, SyntheticEvent } from 'react'
import { Box } from '@material-ui/core'
import CurrencyInputPanel from 'components/CurrencyInputPanel/CurrencyInputPanel'
import AppBody from 'pages/AppBody'
import { useUserLogined } from 'state/user/hooks'
import { TYPE } from 'theme'
import { ChainList } from 'data/dummyData'
import Currency from 'models/currency'
import ChainSelect from 'components/ChainSelect/ChainSelect'
import Chain from 'models/chain'
import { LiquidityState } from '.'
import { OutlinedCard } from 'components/Card'
import ErrorAndActionButton from 'components/Button/ErrorAndActionButton'

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
  onReturnClick: () => void
  cardData?: { [key: string]: string }
}

export enum LiquidityError {
  TOKEN = 'Select Token',
  CHAIN = 'Select Chain',
  AMOUNT = 'Enter Amount',
}

export default function LiquidityForm({
  liquidityState,
  onReturnClick,
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
  const userLogined = useUserLogined()

  const error = useMemo(() => {
    if (!currency) {
      return LiquidityError.TOKEN
    }
    if (!amount) {
      return LiquidityError.AMOUNT
    }
    if (!chain) {
      return LiquidityError.CHAIN
    }
  }, [amount, chain, currency])

  return (
    <AppBody onReturnClick={onReturnClick} title={liquidityState === LiquidityState.ADD ? 'Add Liquidity' : 'Deposit'}>
      <Box padding="0 40px 40px" display="grid" gridGap="24px">
        <CurrencyInputPanel
          onChange={onAmount}
          value={amount}
          selectedCurrency={currency}
          onCurrencySelect={onCurrency}
          disabled={!userLogined}
          placeholder="Enter amount"
          onMax={() => {}}
          selectActive={error === LiquidityError.TOKEN}
          inputFocused={error === LiquidityError.AMOUNT}
        />
        <ChainSelect
          label="Chain"
          chainList={ChainList}
          selectedChain={chain}
          onChange={onChain}
          width="100%"
          active={error === LiquidityError.CHAIN}
        />
        {!error && cardData && (
          <OutlinedCard>
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
          </OutlinedCard>
        )}

        <Box style={{ marginTop: 10 }}>
          <ErrorAndActionButton onAction={onAction} actionText="Provide Liquidity" pending={pending} error={error} />
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
