import React from 'react'
import { styled } from '@material-ui/styles'
import { Input, Box } from '@material-ui/core'
import CurrencyList from './CurrencyList'
import ButtonText from '../Button/ButtonText'

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

const Seperator = styled('div')({
  width: '100%',
  height: 1,
  backgroundColor: 'hsla(0,0%,100%,.12)',
  margin: '20px 0',
})

interface Props {
  isOpen: boolean
  onDismiss: () => void
}

export default function CurrencySearch(props: Props) {
  return (
    <>
      <Box padding="20px 32px 0 32px">
        <SearchInput disableUnderline placeholder={'Search by name or paste address'} />
      </Box>
      <Seperator />
      <CurrencyList />
      <Box width="100%" borderRadius="0 0 20px 20px" padding="20px" justifyContent="center" display="flex">
        <ButtonText>Manage</ButtonText>
      </Box>
    </>
  )
}
