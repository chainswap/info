import { useState, ChangeEvent, useCallback } from 'react'
import Modal from '../../Modal/Modal'
import CurrencySearch from './CurrencySearch'
import Currency from '../../../models/currency'
import Manage from './Manage'
import Import from './Import'

const VIEWS = {
  SEARCH: 'search',
  MANAGE: 'manage',
  IMPORT: 'import',
}

interface Props {
  currencies: Currency[]
  onCurrencySelect: (currency: Currency) => void
  onDismiss: () => void
}

export default function CurrencySearchModal(props: Props) {
  const { currencies, onCurrencySelect, onDismiss } = props
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

  const onSelect = useCallback(
    (currency) => {
      onCurrencySelect(currency)
      onDismiss()
    },
    [onCurrencySelect, onDismiss]
  )

  return (
    <>
      <Modal title="Select a token" closeIcon>
        {view === VIEWS.SEARCH ? (
          <CurrencySearch
            currencies={currencies}
            onManage={onManage}
            onChange={onChangeCurrency}
            value={currency}
            showImportView={showImportView}
            setImportToken={setImportToken}
            onCurrencySelect={onSelect}
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
