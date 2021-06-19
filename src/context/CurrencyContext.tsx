import React, { useState, useCallback } from 'react'
import Currency from '../models/currency'
import { CurrencyList } from '../data/dummyData'

interface CurrencyContextType {
  selectedCurrency: Currency | null
  currencyOptions: Currency[]
  onCurrencySelect: (currency: Currency) => void
}

export const CurrencyContext = React.createContext<CurrencyContextType>({
  selectedCurrency: null,
  currencyOptions: [],
  onCurrencySelect: () => {},
})

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(null)
  const currencyOptions = CurrencyList
  const onCurrencySelect = useCallback((currency: Currency) => {
    setSelectedCurrency(currency)
  }, [])

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, currencyOptions, onCurrencySelect }}>
      {children}
    </CurrencyContext.Provider>
  )
}
