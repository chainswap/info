import React, { ChangeEvent } from 'react'
import { styled, Box } from '@material-ui/core'
import Input from '../Input/Input'
import OutlineButton from '../Button/OutlineButton'
import InputLabel from '../InputLabel/InputLabel'
import SelectButton from '../Button/SelectButton'
import useModal from '../../hooks/useModal'
import LogoText from '../LogoText/LogoText'
import theme, { TYPE } from '../../theme/index'
import SelectCurrencyModal from 'pages/Swap/SelectCurrencyModal'
import { useCallback } from 'react'
import useCurrency from '../../hooks/useCurrency'

interface Props {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onMax?: () => void
  disabled: boolean
  placeholder?: string
  selectActive?: boolean
  inputFocused?: boolean
}

const InputRow = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '48px',
  display: 'flex',
  justifyContent: 'flex-end',
  '& .Mui-focused': {
    '&:before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      width: 'calc(100% + 2px)',
      height: 'calc(100% + 2px)',
      borderRadius: 14,
      margin: -1,
      border: '1px solid ' + theme.palette.primary.main,
      zIndex: 10000,
    },
  },
}))

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
  const { onMax, value, disabled, placeholder, selectActive, inputFocused } = props
  const { showModal } = useModal()
  const { currency } = useCurrency()

  const showCurrencySearch = useCallback(() => {
    showModal(<SelectCurrencyModal />)
  }, [showModal])

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <InputLabel>Amount</InputLabel>
        {currency && (
          <TYPE.mediumGray>
            Balance: {currency.balance} ${currency.symbol}
          </TYPE.mediumGray>
        )}
      </Box>
      <InputRow>
        <StyledInput
          placeholder={placeholder ?? 'Enter amount to swap'}
          value={value.toString()}
          onChange={props.onChange}
          type={'number'}
          disabled={disabled}
          focused={inputFocused}
        />
        {currency && onMax && (
          <ButtonWrapper>
            <OutlineButton width="64px" height="28px" onClick={onMax} color={theme.textColor.text1} borderRadius="20px">
              Max
            </OutlineButton>
          </ButtonWrapper>
        )}
        <SelectButton width={'180px'} onClick={showCurrencySearch} disabled={disabled} primary={selectActive}>
          {currency ? <LogoText logo={currency.logo} text={currency.symbol} /> : <>Select Token</>}
        </SelectButton>
      </InputRow>
    </div>
  )
}
