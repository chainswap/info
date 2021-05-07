import React from 'react'
import Modal from '../Modal/Modal'
import CurrencySearch from './CurrencySearch'

interface Props {
  isOpen: boolean
  onDismiss: () => void
  // selectedCurrency?: Currency | null
  // onCurrencySelect: (currency: Currency) => void
  // otherSelectedCurrency?: Currency | null
  // showCommonBases?: boolean
}

export default function CurrencySearchModal(props: Props) {
  return (
    <>
      <Modal isOpen={props.isOpen} onDismiss={props.onDismiss} label={'Select a token'}>
        <CurrencySearch isOpen={props.isOpen} onDismiss={props.onDismiss} />
      </Modal>
    </>
  )
}
