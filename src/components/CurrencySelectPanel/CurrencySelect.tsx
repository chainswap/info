import React from 'react'
import DummyLogo from '../../assets/images/dummy_logo.png'
import { MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { styled } from '@material-ui/styles'
import Select from '../Select/Select'
import Column from '../Column/index'

interface Props {
  label: string
  disabled?: boolean
}

const useStyles = makeStyles({
  select: {
    background: '#ffffff !important',
    border: 'solid 1px #cccccc',
    borderRadius: 5,
    padding: '11px 12px',
    '.Mui-focused &': {
      borderRadius: 16,
    },
  },
  selectMenu: {
    backgroundColor: '#ffffff !important',
  },
})

const CurrencySelectLabel = styled('div')({
  color: '#FFFFFF',
  opacity: 0.6,
  fontSize: 12,
  fontWeight: 400,
  fontFamily: 'Roboto',
  lineHeight: '17.48px',
})

const CurrencyIcon = styled('div')({
  marginRight: 12,
})

export default function CurrencySelectPanel(props: Props) {
  const classes = useStyles(props)
  const { label, disabled } = props
  return (
    <>
      <Column>
        <CurrencySelectLabel>{label}</CurrencySelectLabel>
        <Select defaultValue="ETH" disabled={disabled}>
          <MenuItem value="ETH" className={classes.selectMenu}>
            <CurrencyIcon>
              <img src={DummyLogo} alt="currency_icon" />
            </CurrencyIcon>
            ETH
          </MenuItem>
          <MenuItem value="BNB" className={classes.selectMenu}>
            <CurrencyIcon>
              <img src={DummyLogo} alt="currency_icon" />
            </CurrencyIcon>
            BNB
          </MenuItem>
        </Select>
      </Column>
    </>
  )
}
