import React, { ChangeEvent } from 'react'
import { styled } from '@material-ui/styles'
import CurrencySearchModal from '../swap/SearchModal/CurrencySearchModal'
import Input from '../Input/Input'
import OutlineButton from '../Button/OutlineButton'
import Currency from '../../models/currency'
import InputLabel from '../InputLabel/InputLabel'
import SelectButton from '../Button/SelectButton'
import useModal from '../../hooks/useModal'
import LogoText from '../LogoText/LogoText'
import theme from 'theme'

interface Props {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  selectedCurrency: Currency | null
  options: Currency[]
  onMax?: () => void
  disabled: boolean
  onCurrencySelect: (currency: Currency) => void
  placeholder?: string
  selectActive?: boolean
  inputFocused?: boolean
}

const LabelRow = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const Hint = styled('div')({
  color: '#FFFFFF',
  opacity: 0.4,
  fontWeight: 400,
  fontSize: 12,
})

const InputRow = styled('div')({
  position: 'relative',
  width: '100%',
  height: '48px',
  display: 'flex',
  justifyContent: 'flex-end',
})

const StyledInput = styled(Input)({
  position: 'absolute',
})

const ButtonWrapper = styled('div')({
  position: 'absolute',
  right: 196,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
})

export default function CurrencyInputPanel(props: Props) {
  const {
    selectedCurrency,
    options,
    onMax,
    value,
    disabled,
    onCurrencySelect,
    placeholder,
    selectActive,
    inputFocused,
  } = props
  const { showModal, hideModal } = useModal()

  const showCurrencySearch = () => {
    showModal(<CurrencySearchModal currencies={options} onCurrencySelect={onCurrencySelect} onDismiss={hideModal} />)
  }

  return (
    <div>
      <LabelRow>
        <InputLabel>Amount</InputLabel>
        {selectedCurrency && (
          <Hint>
            Balance: {selectedCurrency.balance} ${selectedCurrency.symbol}
          </Hint>
        )}
      </LabelRow>
      <InputRow>
        <StyledInput
          placeholder={placeholder ?? 'Enter amount to swap'}
          value={value.toString()}
          onChange={props.onChange}
          type={'number'}
          disabled={disabled}
          focused={inputFocused}
        />
        {selectedCurrency && onMax && (
          <ButtonWrapper>
            <OutlineButton width="64px" height="28px" onClick={onMax} color={theme.textColor.text1} borderRadius="20px">
              Max
            </OutlineButton>
          </ButtonWrapper>
        )}
        <SelectButton width={'180px'} onClick={showCurrencySearch} disabled={disabled} primary={selectActive}>
          {selectedCurrency ? (
            <LogoText logo={selectedCurrency.logo} text={selectedCurrency.symbol} />
          ) : (
            <>Select Token</>
          )}
        </SelectButton>
      </InputRow>
    </div>
  )
}
