import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { styled, Box, MenuItem } from '@material-ui/core'
import { Text } from 'rebass'
import { useWalletModalToggle, useClaimModalToggle } from '../../state/application/hooks'
import StatusIcon from '../../assets/images/status_icon.svg'
import DummyLogo from '../../assets/images/dummy_logo.png'
import { ChainList } from '../../data/dummyData'
import OutlineButton from '../Button/OutlineButton'
import Select from '../Select/Select'
import LogoText from '../LogoText/LogoText'
import Image from '../Image/Image'
import { shortenAddress } from '../../utils/utils'
import Divider from '../../components/Divider/Divider'
import WalletModal from '../../components/WalletModal/WalletModal'
import ClaimModal from '../../components/claim/ClaimModal'
import Button from '../../components/Button/Button'
import Copy from '../Copy/Copy'
import NotifyBox from './NotifyBox'

const HeaderFrame = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: 88,
  padding: '32px 60px 24px 32px',
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
      <Box marginLeft={'12px'}>
        <Text fontSize={13} fontWeight={400}>{`${amount} ${currency}`}</Text>
      </Box>
      <Divider orientation={'vertical'} opacity={1} margin={'0 8px 0 10px'} />
      <Box paddingRight={'10.26px'} display={'flex'} alignItems={'center'}>
        <Image src={StatusIcon} alt={'status icon'} style={{ width: '12px', height: '12px' }} />
        <Box margin={'0 6px'}>
          <Text fontSize={12} fontWeight={400} opacity={0.6}>
            {shortenAddress(address)}
          </Text>
        </Box>
        <Copy toCopy={address} />
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

  const onChangeChain = (e: any) => {
    alert(e.target.value)
  }

  return (
    <>
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
        {address ? (
          <Box display="flex">
            <Box marginRight={'16px'}>
              <OutlineButton width={'100px'} height={'32px'} onClick={toggleClaimModal}>
                Claim List
              </OutlineButton>
            </Box>
            <Box marginRight={'8px'}>
              <Select defaultValue={chain} size={'small'} onChange={onChangeChain}>
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
          <Button size="small" width={'140px'} height={'32px'} onClick={toggleWalletModal}>
            Connect Wallet
          </Button>
        )}
      </HeaderFrame>
      <NotifyBox />
      <WalletModal />
      <ClaimModal />
    </>
  )
}
