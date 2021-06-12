import React, { ChangeEvent, useCallback } from 'react'
import { MenuItem, makeStyles, Box } from '@material-ui/core'
import Select from '../Select/Select'
import LogoText from '../LogoText/LogoText'
import Chain from '../../models/chain'
import InputLabel from '../InputLabel/InputLabel'
import SelectedIcon from '../../assets/images/selected_icon.svg'
import Checkbox from '../../components/Checkbox/Checkbox'
import { ConfirmedTransactionList } from 'data/dummyData'

interface Props {
  label: string
  disabled?: boolean
  chainList: Chain[]
  selectedChains: Chain[]
  onChainSelect?: (e: ChangeEvent<{ value: string[] }>) => void
  width?: string
}

const useStyles = makeStyles({
  menuItem: {
    '& label': {
      marginLeft: 20,
    },
  },
})

export default function ChainMultiSelect(props: Props) {
  const classes = useStyles(props)
  const { label, disabled, chainList, onChainSelect, selectedChains, width } = props

  const isSelected = useCallback(
    (chain: Chain) => {
      return !!selectedChains.find((el) => el.symbol === chain.symbol)
    },
    [selectedChains]
  )

  const renderValue = useCallback(() => {
    if (selectedChains.length > 0) {
      return selectedChains.map((chain: Chain) => chain.symbol).join(', ')
    }

    return 'Select the chain to enable crosschain functionality'
  }, [selectedChains])

  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <Select
        value={selectedChains?.map((el) => el.symbol) ?? []}
        disabled={disabled}
        onChange={onChainSelect}
        width={width}
        multiple
        renderValue={renderValue}
      >
        {chainList.map((chain) => (
          <MenuItem
            className={classes.menuItem}
            value={chain.symbol}
            key={chain.symbol}
            selected={!!selectedChains.find((el) => el.symbol === chain.symbol)}
            disabled={selectedChains.length >= 2 && !isSelected(chain)}
          >
            <Checkbox checked={isSelected(chain)} />
            <LogoText logo={chain.logo} text={chain.symbol} />
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}
