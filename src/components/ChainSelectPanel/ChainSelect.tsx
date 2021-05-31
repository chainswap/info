import React, { useState } from 'react'
import { MenuItem, Box } from '@material-ui/core'
import Select from '../Select/Select'
import LogoText from '../LogoText/LogoText'
import Chain from '../../models/chain'
import InputLabel from '../InputLabel/InputLabel'

interface Props {
  label: string
  disabled?: boolean
  chainList: Chain[]
  selectedChain: Chain
  onChange: (e: any) => void
}

export default function ChainSelectPanel(props: Props) {
  const { label, disabled, chainList, onChange, selectedChain } = props

  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <Select defaultValue={selectedChain.symbol} value={selectedChain.symbol} disabled={disabled} onChange={onChange}>
        {chainList.map((chain) => (
          <MenuItem value={chain.symbol} key={chain.symbol}>
            <LogoText logo={chain.logo} text={chain.symbol} />
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}
