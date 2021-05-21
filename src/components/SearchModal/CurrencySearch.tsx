import React from 'react'
import { styled } from '@material-ui/styles'
import { Input, Box } from '@material-ui/core'
import CurrencyList from './CurrencyList'
import ButtonText from '../Button/ButtonText'
import Currency from '../../models/currency'
import Divider from '../../components/Divider/Divider'

const SearchInput = styled(Input)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  color: '#fff',
  outline: 'none',
  padding: '0 20px',
  margin: '0 auto',
  height: 48,
  borderRadius: 14,
  boxSizing: 'border-box',
  border: '1px solid rgba(255, 255, 255, 0.4)',
  background: 'hsla(0,0%,100%,.08)',
})

interface Props {
  currencies: Currency[]
}

export default function CurrencySearch(props: Props) {
  const { currencies } = props
  return (
    <>
      <Box padding="20px 32px 0 32px">
        <SearchInput disableUnderline placeholder={'Search by name or paste address'} />
      </Box>
      <Divider orientation={'horizontal'} margin={'20px 0 20px 0'} opacity={0.12} />
      <CurrencyList currencies={currencies} />
      <Divider orientation={'horizontal'} margin={'20px 0 20px 0'} opacity={0.12} />
      <Box width="100%" borderRadius="0 0 20px 20px" padding="0 0 13px 0" justifyContent="center" display="flex">
        <ButtonText>Manage</ButtonText>
      </Box>
    </>
  )
}
