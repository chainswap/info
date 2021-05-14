import React, { useState, useCallback, ChangeEvent } from 'react'
import { styled } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import CurrencySearchModal from '../SearchModal/CurrencySearchModal'
import Input, { StyledInputLabel } from '../Input/Input'
import OutlineButton from '../Button/OutlineButton'
import Currency from '../../models/currency'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CurrencyLogo from '../CurrencyLogo/CurrencyLogo'

interface Props {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  defaultCurrency: Currency
  selectedCurrency?: Currency
  options: Currency[]
}

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

const CurrencySelect = styled('div')({
  display: 'flex',
  alignItems: 'center',
  fontSize: '20px',
  fontWeight: 500,
  backgroundColor: 'transparent',
  color: '#FFFFFF',
  borderRadius: 12,
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  justifyContent: 'space-between',
})

export default function CurrencyInputPanel(props: Props) {
  const { selectedCurrency, defaultCurrency } = props
  const [modalOpen, setModalOpen] = useState(false)

  const handleDismissSearch = useCallback(() => {
    setModalOpen(false)
  }, [setModalOpen])

  return (
    <>
      <Box>
        <Box display="flex" justifyContent="space-between">
          <StyledInputLabel>Amount</StyledInputLabel>
          <StyledInputLabel style={{ opacity: 0.4 }}>
            {selectedCurrency && (
              <>
                your balance: {selectedCurrency.balance} {selectedCurrency.symbol}
              </>
            )}
          </StyledInputLabel>
        </Box>
        <InputRow>
          <StyledInput
            placeholder={'Enter amount to swap'}
            value={props.value.toString()}
            onChange={props.onChange}
            type={'number'}
          />
          <Box marginRight="20px">
            <OutlineButton width="64px" height="28px">
              Max
            </OutlineButton>
          </Box>
          <CurrencySelect
            onClick={() => {
              setModalOpen(true)
            }}
          >
            <CurrencyLogo currency={selectedCurrency ? selectedCurrency : defaultCurrency} />
            <ExpandMoreIcon />
          </CurrencySelect>
        </InputRow>
      </Box>
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
