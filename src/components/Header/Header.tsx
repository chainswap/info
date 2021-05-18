import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { styled, Box, MenuItem } from '@material-ui/core'
import DummyLogo from '../../assets/images/dummy_logo.png'
import Button from '../../components/Button/Button'
import { useWalletModalToggle, useClaimModalToggle } from '../../state/application/hooks'
import OutlineButton from '../Button/OutlineButton'
import Select from '../Select/Select'
import LogoText from '../LogoText/LogoText'
import CopyIcon from '../../assets/images/copy.svg'
import Image from '../Image/Image'
import Bulb from '../../assets/images/bulb.svg'
import trimAddress from '../../utils/trimAddress'
import { Text } from 'rebass'

const ChainList = [
  {
    logo: DummyLogo,
    symbol: 'ETH',
  },
  {
    logo: DummyLogo,
    symbol: 'BSC',
  },
  {
    logo: DummyLogo,
    symbol: 'OEC',
  },
  {
    logo: DummyLogo,
    symbol: 'HECO',
  },
  {
    logo: DummyLogo,
    symbol: 'Polygon',
  },
]

const HeaderFrame = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: 88,
  padding: '32px 40px',
})

const Title = styled('a')({
  display: 'flex',
  alignItems: 'center',
  justifySelf: 'flex-start',
  marginRight: 12,
  '&:hover': {
    cursor: 'pointer',
  },
})

const HeaderLinks = styled('div')({
  marginLeft: 24,
})

const StyledNavLink = styled(NavLink)({
  alignItem: 'left',
  textDecoration: 'none',
  fontSize: 14,
  fontFamily: 'Roboto',
  lineHeight: '18.69px',
  letterSpacing: '0.02em',
  color: '#FFFFFF',
  margin: '0 12px',
  opacity: 0.5,
  '&.active': {
    opacity: 1,
  },
  '&:hover': {
    opacity: 1,
  },
})

const WalletInfo = ({ amount, currency, address }: { amount: number; currency: string; address: string }) => {
  return (
    <Box
      width={'250px'}
      height={'32px'}
      display={'flex'}
      border={'1px solid #FFFFFF'}
      borderRadius={'4px'}
      alignItems={'center'}
    >
      <Box margin={'0 10px 0 12px'}>
        <Text fontSize={13} fontWeight={400}>{`${amount} ${currency}`}</Text>
      </Box>
      <Box width={'1px'} height={'100%'} bgcolor={'#FFFFFF'} />
      <Box padding={'0 10.26px 0 8px'} display={'flex'}>
        <Image src={Bulb} alt={'bulb icon'} />
        <Box margin={'0 6px'}>
          <Text fontSize={12} fontWeight={400} opacity={0.6}>
            {trimAddress(address, 6, 4)}
          </Text>
        </Box>
        <Image src={CopyIcon} alt={'copy icon'} />
      </Box>
    </Box>
  )
}

export default function Header() {
  const toggleWalletModal = useWalletModalToggle()
  const toggleClaimModal = useClaimModalToggle()
  const [address, setAddress] = useState('0x72ef586A2c515B605A873ad9a8FBdFD43Df77123')
  // const address = null
  const [chain, setChain] = useState('BSC')
  const [amount, setAmount] = useState(1.24)
  const [currency, setCurrency] = useState('MATTER')

  return (
    <HeaderFrame>
      <Box display="flex">
        <Title href=".">
          <img width={'24px'} src={DummyLogo} alt="logo" />
        </Title>
        <HeaderLinks>
          <StyledNavLink id={`swap-nav-link`} to={'/swap'}>
            swap
          </StyledNavLink>
          <StyledNavLink id={`deploy-nav-link`} to={'/deploy'}>
            Deploy
          </StyledNavLink>
          <StyledNavLink id={`liquidity-nav-link`} to={'/liquidity'}>
            Liquidity
          </StyledNavLink>
          <StyledNavLink id={`farm-nav-link`} to={'/farm'}>
            Farm
          </StyledNavLink>
          <StyledNavLink id={`info-nav-link`} to={'/info'}>
            Info
          </StyledNavLink>
        </HeaderLinks>
      </Box>
      <Box marginRight={'60px'}>
        {address ? (
          <Box display="flex">
            <Box marginRight={'16px'}>
              <OutlineButton width={'100px'} height={'32px'} onClick={toggleClaimModal}>
                Claim List
              </OutlineButton>
            </Box>
            <Box marginRight={'8px'}>
              <Select defaultValue={chain} size={'small'}>
                {ChainList.map((chain) => (
                  <MenuItem value={chain.symbol} key={chain.symbol}>
                    <LogoText logo={chain.logo} text={chain.symbol} size={'small'} />
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <WalletInfo amount={amount} currency={currency} address={address} />
          </Box>
        ) : (
          <Button size="small" width={'140px'} onClick={toggleWalletModal}>
            Connect Wallet
          </Button>
        )}
      </Box>
    </HeaderFrame>
  )
}
