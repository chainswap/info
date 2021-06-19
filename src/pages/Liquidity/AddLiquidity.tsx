import { useState, useCallback } from 'react'
import { ChainList } from 'data/dummyData'
import Currency from 'models/currency'
import Chain from 'models/chain'
import LiquidityForm from './LiquidityForm'
import useModal from 'hooks/useModal'
import TxnSubmittedMessageBox from 'pages/Swap/TxnSubmittedMessageBox'
import { LiquidityState } from '.'
import useCurrency from 'hooks/useCurrency'
import { useEffect } from 'react'

export default function AddLiquidity({ onReturnClick }: { onReturnClick: () => void }) {
  const [amount, setAmount] = useState('')
  const [chain, setChain] = useState<Chain | null>(null)
  const [pending, setPending] = useState(false)
  const { showModal } = useModal()
  const { currency, setCurrency } = useCurrency()

  useEffect(() => {
    setCurrency(null)
  }, [])

  const handleChangeAmount = useCallback((e) => setAmount(e.target.value), [])
  const handleCurrencySelect = useCallback((currency) => setCurrency(currency), [])
  const handleChainSelect = useCallback((e) => {
    setChain(ChainList.find((chain) => chain.symbol === e.target.value) ?? null)
  }, [])

  const handleShowSubmittedModal = useCallback(() => {
    showModal(<TxnSubmittedMessageBox action={() => {}} />)
  }, [showModal])

  const handleProvide = useCallback(() => {
    setPending(true)
    setTimeout(() => {
      setPending(false)
      handleShowSubmittedModal()
    }, 1000)
  }, [handleShowSubmittedModal])

  return (
    <LiquidityForm
      liquidityState={LiquidityState.ADD}
      amount={amount}
      onAmount={handleChangeAmount}
      currency={currency}
      onCurrency={handleCurrencySelect}
      chain={chain}
      onChain={handleChainSelect}
      onAction={handleProvide}
      pending={pending}
      onReturnClick={onReturnClick}
      cardData={{ 'Share of pool': '0.003%' }}
    />
  )
}
