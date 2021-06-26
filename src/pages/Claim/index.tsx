import React from 'react'
import { styled, Box } from '@material-ui/core'
import AppBody from 'pages/AppBody'
import SelectButton from 'components/Button/SelectButton'
import { CurrencyList } from 'data/dummyData'
import { TYPE } from 'theme/index'
import TextButton from 'components/Button/TextButton'

const TextWrapper = styled('div')({
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, 0)',
  top: 243,
})

const Footer = styled('div')({
  position: 'absolute',
  bottom: -45,
})

export default function Claim() {
  return (
    <Box position="relative">
      <AppBody title="Claim List" height={510} width={680}>
        <SelectButton height="36px" width="160px" primary={true} right={40} top={20}>
          Select Button
        </SelectButton>
        <TextWrapper>
          <TYPE.body>Please select a token to see your claim list</TYPE.body>
        </TextWrapper>
      </AppBody>
      <Footer>
        <Box display={'flex'} justifyContent={'space-between'} alignContent={'center'}>
          <TYPE.medium marginRight="5px">Don't see your claim request?</TYPE.medium>
          <TextButton fontSize={14} underline>
            Import now
          </TextButton>
        </Box>
      </Footer>
    </Box>
  )
}
