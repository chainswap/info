import React, { useState, useCallback } from 'react'
import Currency from '../models/currency'
import { CurrencyList } from '../data/dummyData'

interface CurrencyContextType {
  selectedCurrency: Currency | null
  currencyOptions: Currency[]
  setSelectedCurrency: (currency: Currency) => void
}

export const CurrencyContext = React.createContext<CurrencyContextType>({
  selectedCurrency: null,
  currencyOptions: [],
  setSelectedCurrency: () => {},
})

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currency, setCurrency] = useState<Currency | null>(null)
  const currencyOptions = CurrencyList
  const setSelectedCurrency = useCallback((currency: Currency) => {
    setCurrency(currency)
  }, [])

  return (
    <CurrencyContext.Provider value={{ selectedCurrency: currency, currencyOptions, setSelectedCurrency }}>
      {children}
    </CurrencyContext.Provider>
  )
}
