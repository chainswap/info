import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import CurrencySearch from './CurrencySearch'
import Currency from '../../models/currency'
import Manage from './Manage'

const VIEWS = {
  SEARCH: 'search',
  MANAGE: 'manage',
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

  function onManage() {
    setView(VIEWS.MANAGE)
  }

  return (
    <>
      <Modal isOpen={isOpen} onDismiss={onDismiss} label={'Select a token'} showIcon>
        {view === VIEWS.SEARCH ? <CurrencySearch currencies={currencies} onManage={onManage} /> : <Manage />}
      </Modal>
    </>
  )
}
