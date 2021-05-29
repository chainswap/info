import React from 'react'
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
}

export default function ChainSelectPanel(props: Props) {
  const { label, disabled, selectedChain, chainList } = props

  const onSelectChain = (e: any) => {
    alert(e.target.value)
  }

  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <Select defaultValue={selectedChain.symbol} disabled={disabled} onChange={onSelectChain}>
        {chainList.map((chain) => (
          <MenuItem value={chain.symbol} key={chain.symbol}>
            <LogoText logo={chain.logo} text={chain.symbol} />
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}
