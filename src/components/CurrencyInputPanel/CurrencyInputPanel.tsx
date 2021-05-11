import React, { useState, useCallback, ChangeEvent } from 'react'
import { styled } from '@material-ui/styles'
import DummyLogo from '../../assets/images/dummy_logo.png'
import Column from '../Column/index'
import CurrencySearchModal from '../SearchModal/CurrencySearchModal'
import Input, { StyledInputLabel } from '../Input/Input'

const InputRow = styled('div')({
  alignItems: 'center',
  width: '100%',
  height: 48,
  borderRadius: 14,
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  overflow: 'hidden',
  display: 'flex',
  padding: '14px 20px 14px 0',
  boxSizing: 'border-box',
})

const StyledInput = styled(Input)({
  backgroundColor: 'transparent',
})

const CurrencySelect = styled('button')({
  alignItems: 'center',
  height: 36,
  fontSize: '20px',
  fontWeight: 500,
  backgroundColor: 'transparent',
  color: '#FFFFFF',
  borderRadius: 12,
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
})

const CurrencyLogo = styled('div')({
  marginRight: 12,
})

const StyledTokenName = styled('div')({
  fontSize: 16,
  marginRight: 12,
})

const ArrowDown = styled('div')({
  fontSize: 16,
})

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function CurrencyInputPanel(props: Props) {
  const [modalOpen, setModalOpen] = useState(false)
  const [amount, setAmount] = useState('')

  const handleDismissSearch = useCallback(() => {
    setModalOpen(false)
  }, [setModalOpen])

  return (
    <>
      <Column>
        <StyledInputLabel>Amount</StyledInputLabel>
        <InputRow>
          <StyledInput placeholder={'Enter amount to swap'} value={amount} onChange={props.onChange} />
          <CurrencySelect
            onClick={() => {
              setModalOpen(true)
            }}
          >
            <CurrencyLogo>
              <img src={DummyLogo} alt="currency_logo" />
            </CurrencyLogo>
            <StyledTokenName>Matter</StyledTokenName>
            <ArrowDown>V</ArrowDown>
          </CurrencySelect>
        </InputRow>
      </Column>
      <CurrencySearchModal
        isOpen={modalOpen}
        onDismiss={handleDismissSearch}
        // onCurrencySelect={onCurrencySelect}
        // selectedCurrency={currency}
        // otherSelectedCurrency={otherCurrency}
        // showCommonBases={showCommonBases}
      />
    </>
  )
}
