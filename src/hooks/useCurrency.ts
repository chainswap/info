import { useContext } from 'react'
import { CurrencyContext } from '../context/CurrencyContext'

export default function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error('Must be used within a provider')
  }
  return context
}
