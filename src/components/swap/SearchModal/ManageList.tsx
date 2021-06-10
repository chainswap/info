import React, { ChangeEvent } from 'react'
import { Box } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { Text } from 'rebass'
import Image from '../../Image/Image'
import SwitchToggle from '../../SwitchToggle/SwitchToggle'
import GearIcon from '../../../assets/images/gear_icon.svg'

export interface Props {
  logo: string
  name: string
  amount: number
  checked: boolean
  onChangeSwitchToggle: (e: ChangeEvent<HTMLInputElement>) => void
}

const StyledList = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '14px',
  border: '1px solid rgba(152, 103, 255, 0.4)',
  height: 60,
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  padding: '0 20px',
})

export default function ManageList(props: Props) {
  const { logo, name, amount, checked, onChangeSwitchToggle } = props

  return (
    <StyledList>
      <Box display={'flex'}>
        <Image src={logo} alt={'token list logo'} style={{ height: 36, width: 36 }} />
        <Box marginLeft={'16px'}>
          <Text fontSize={'16px'} fontWeight={500}>
            {name}
          </Text>
          <Box display={'flex'}>
            <Text fontSize={'12px'} fontWeight={400} opacity={0.6} marginRight={'5px'}>
              {amount} tokens
            </Text>
            <Image src={GearIcon} alt={'gear icon'} />
          </Box>
        </Box>
      </Box>
      <Box>
        <SwitchToggle checked={checked} onChange={onChangeSwitchToggle} />
      </Box>
    </StyledList>
  )
}
