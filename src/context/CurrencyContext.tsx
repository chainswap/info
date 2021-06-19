import React, { useState, useCallback } from 'react'
import Currency from '../models/currency'
import { CurrencyList } from '../data/dummyData'

interface CurrencyContextType {
  currency: Currency | null
  currencyOptions: Currency[]
  setCurrency: (currency: Currency | null) => void
}

export const CurrencyContext = React.createContext<CurrencyContextType>({
  currency: null,
  currencyOptions: [],
  setCurrency: () => {},
})

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currency, _setCurrency] = useState<Currency | null>(null)
  const currencyOptions = CurrencyList
  const setCurrency = useCallback((currency: Currency | null) => {
    _setCurrency(currency)
  }, [])

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, currencyOptions }}>{children}</CurrencyContext.Provider>
  )
}
