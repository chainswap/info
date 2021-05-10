import React from 'react'
import { styled } from '@material-ui/styles'
import { Input } from '@material-ui/core'
import CurrencyList from './CurrencyList'

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

const Padded = styled('div')({
  padding: '20px 32px 0 32px',
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
      <Padded>
        <SearchInput disableUnderline placeholder={'Search by name or paste address'} />
      </Padded>
      <Seperator />
      <CurrencyList />
    </>
  )
}
