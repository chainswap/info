import React from 'react'
import { MenuItem } from '@material-ui/core'
import AppBody from 'pages/AppBody'
import SelectButton from 'components/Button/SelectButton'
import { CurrencyList } from 'data/dummyData'

export default function Claim() {
  return (
    <AppBody title="Claim List">
      <SelectButton height="36px" width="160px" primary={true} right={40} top={20}>
        Select Button
      </SelectButton>
    </AppBody>
  )
}
