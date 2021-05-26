import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { Text } from 'rebass'
import Button from '../Button/Button'
import WarningIcon from '../../assets/images/warning_icon.svg'
import DummyLogo from '../../assets/images/dummy_logo.png'
import CoinGecko from '../../assets/images/coin_gecko.svg'
import Image from '../Image/Image'
import ButtonText from '../Button/ButtonText'
import Checkbox from './Checkbox'

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '23px 32px 32px 32px',
})

const TokenInfoCard = styled('div')({
  backgroundColor: 'rgba(0,0,0,0.2)',
  border: '1px solid rgba(255,255,255,0.2)',
  borderRadius: 22,
  padding: '24px 24px 25px 24px',
  width: 416,
  marginBottom: 16,
})

const WarningCard = styled('div')({
  width: 416,
  backgroundColor: 'rgba(152, 103, 255, 0.08)',
  borderRadius: '22px',
  padding: '24px 24px 26px 24px',
  marginBottom: 24,
})

const TokenInfo = () => {
  return (
    <TokenInfoCard>
      <Box display={'flex'} marginBottom={'8px'}>
        <Image src={DummyLogo} alt={'token icon'} />
        <Text fontSize={16} fontWeight={500} marginLeft={12}>
          TOKEN NAME1
        </Text>
        <Text fontSize={16} fontWeight={400} opacity={0.4} marginLeft={0.8}>
          TOKEN
        </Text>
      </Box>
      <ButtonText fontSize={'14px'} fontWeight={400} primary>
        0xKos369cd4se1oos369cd4se1s369cd4se187ujv
      </ButtonText>
      <Box display={'flex'} marginTop={'6px'}>
        <Image src={CoinGecko} alt={'src icon'} />
        <Text fontSize={12} fontWeight={400} opacity={0.6} marginLeft={'6px'}>
          via Coingecko
        </Text>
      </Box>
    </TokenInfoCard>
  )
}

const Warning = ({ checked, onCheck }: { checked: boolean; onCheck: () => void }) => {
  return (
    <WarningCard>
      <Image src={WarningIcon} alt={'warning icon'} />
      <Text fontSize={18} margin={'12px 0 12px 0'}>
        Bridge at your own risk
      </Text>
      <Text fontSize={16} fontWeight={400} opacity={0.7}>
        Anyone can bridge a token, including creating fake versions of existing tokens that claim to represent projects
      </Text>
      <Box display={'flex'} alignItems={'center'} marginTop={'12px'}>
        <Checkbox checked={checked} onCheck={onCheck} />
        <Text fontSize={16} fontWeight={400}>
          I understand
        </Text>
      </Box>
    </WarningCard>
  )
}

export default function Import() {
  const [checked, setChecked] = useState(false)

  function onCheck() {
    setChecked(!checked)
  }

  return (
    <Wrapper>
      <TokenInfo />
      <Warning checked={checked} onCheck={onCheck} />
      <Button>Import</Button>
    </Wrapper>
  )
}
