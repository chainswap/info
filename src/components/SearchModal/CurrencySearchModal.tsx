import React from 'react'
import Modal from '../Modal/Modal'
import CurrencySearch from './CurrencySearch'
import Currency from '../../models/currency'

interface Props {
  isOpen: boolean
  onDismiss: () => void
  currencies: Currency[]
  // selectedCurrency?: Currency | null
  // onCurrencySelect: (currency: Currency) => void
  // otherSelectedCurrency?: Currency | null
  // showCommonBases?: boolean
}

export default function CurrencySearchModal(props: Props) {
  const { currencies, isOpen, onDismiss } = props

  return (
    <>
      <Modal isOpen={isOpen} onDismiss={onDismiss} label={'Select a token'}>
        <CurrencySearch currencies={currencies} />
      </Modal>
    </>
  )
}
