import React, { useState, useEffect } from 'react'
import { styled, Box } from '@material-ui/core'
import AppBody from 'pages/AppBody'
import SelectButton from 'components/Button/SelectButton'
import { TYPE } from 'theme/index'
import TextButton from 'components/Button/TextButton'
import useModal from 'hooks/useModal'
import SelectCurrency from 'components/SelectCurrency/SelectCurrency'
import useCurrency from 'hooks/useCurrency'
import Currency from 'models/currency'
import LogoText from 'components/LogoText/LogoText'
import ClaimList from 'components/claim/ClaimList'

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
  const { showModal } = useModal()
  const { currency } = useCurrency()

  return (
    <Box position="relative">
      <AppBody title="Claim List" height={510} width={680}>
        <SelectButton
          height="36px"
          width="160px"
          primary={!currency}
          right={40}
          top={20}
          onClick={() => showModal(<SelectCurrency />)}
        >
          {currency ? <LogoText logo={currency.logo} text={currency.symbol} /> : <>Select Token</>}
        </SelectButton>
        <Box padding="0 40px">
          {currency ? (
            <ClaimList />
          ) : (
            <TextWrapper>
              <TYPE.body>Please select a token to see your claim list</TYPE.body>
            </TextWrapper>
          )}
        </Box>
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
