import React, { useState, ChangeEvent } from 'react'
import Modal from '../Modal/Modal'
import CurrencySearch from './CurrencySearch'
import Currency from '../../models/currency'
import Manage from './Manage'
import Import from './Import'

const VIEWS = {
  SEARCH: 'search',
  MANAGE: 'manage',
  IMPORT: 'import',
}

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
  const [view, setView] = useState(VIEWS.SEARCH)

  const [currency, setCurrency] = useState('')

  function onManage() {
    setView(VIEWS.MANAGE)
  }

  function onChangeCurrency(e: ChangeEvent<HTMLInputElement>) {
    setCurrency(e.target.value)
  }

  function showImportView() {
    setView(VIEWS.IMPORT)
  }

  function setImportToken() {
    alert('set Import Token')
  }

  return (
    <>
      <Modal isOpen={isOpen} onDismiss={onDismiss} label={'Select a token'} showIcon>
        {view === VIEWS.SEARCH ? (
          <CurrencySearch
            currencies={currencies}
            onManage={onManage}
            onChange={onChangeCurrency}
            value={currency}
            showImportView={showImportView}
            setImportToken={setImportToken}
          />
        ) : view === VIEWS.MANAGE ? (
          <Manage />
        ) : (
          <Import />
        )}
      </Modal>
    </>
  )
}
