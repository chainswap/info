import React, { useState, useCallback, ChangeEvent } from 'react'
import { styled } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import CurrencySearchModal from '../SearchModal/CurrencySearchModal'
import Input from '../Input/Input'
import OutlineButton from '../Button/OutlineButton'
import Currency from '../../models/currency'
import LogoText from '../LogoText/LogoText'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import InputLabel from '../InputLabel/InputLabel'

interface Props {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  selectedCurrency: Currency
  options: Currency[]
}

const CurrencySelect = styled('div')({
  display: 'flex',
  alignItems: 'center',
  fontSize: '20px',
  fontWeight: 500,
  cursor: 'pointer',
  justifyContent: 'space-between',
})

const Hint = styled('div')({
  color: '#FFFFFF',
  opacity: 0.4,
  fontWeight: 400,
  fontSize: 12,
})

export default function CurrencyInputPanel(props: Props) {
  const { selectedCurrency, options } = props
  const [modalOpen, setModalOpen] = useState(false)

  const handleDismissSearch = useCallback(() => {
    setModalOpen(false)
  }, [setModalOpen])

  return (
    <>
      <Box>
        <Box display="flex" justifyContent="space-between">
          <InputLabel>Amount</InputLabel>
          {selectedCurrency && (
            <Hint>
              your balance: ${selectedCurrency.balance} ${selectedCurrency.symbol}
            </Hint>
          )}
        </Box>
        <Box position={'relative'} width={'100%'} height={'48px'}>
          <Box position={'absolute'} width={'100%'}>
            <Input
              placeholder={'Enter amount to swap'}
              value={props.value.toString()}
              onChange={props.onChange}
              type={'number'}
            />
          </Box>

          <Box position={'absolute'} right={'160px'} height={'100%'} display="flex" alignItems={'center'}>
            <OutlineButton width="64px" height="28px">
              Max
            </OutlineButton>
          </Box>
          <Box position={'absolute'} right={'18px'} height={'100%'} display="flex" alignItems={'center'}>
            <CurrencySelect
              onClick={() => {
                setModalOpen(true)
              }}
            >
              <LogoText logo={selectedCurrency.logo} text={selectedCurrency.symbol} />
              <ExpandMoreIcon />
              {/* <Image src={ExpandMoreIcon} alt={'expand more icon'} /> */}
            </CurrencySelect>
          </Box>
        </Box>
      </Box>
      <CurrencySearchModal isOpen={modalOpen} onDismiss={handleDismissSearch} currencies={options} />
    </>
  )
}
