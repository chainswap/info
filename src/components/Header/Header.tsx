import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { styled, Box } from '@material-ui/core'
import DummyLogo from '../../assets/images/dummy_logo.png'
import Button from '../../components/Button/Button'
import { useWalletModalToggle } from '../../state/application/hooks'
import OutlineButton from '../Button/OutlineButton'

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

export default function Header() {
  const toggleWalletModal = useWalletModalToggle()
  const [address, setAddress] = useState('0x72ef586A2c515B605A873ad9a8FBdFD43Df77123')

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
      {address ? (
        <>
          <OutlineButton width={'100px'} height={'32px'}>
            Claim List
          </OutlineButton>
        </>
      ) : (
        <Button size="small" width={'140px'} onClick={toggleWalletModal}>
          Connect Wallet
        </Button>
      )}
    </HeaderFrame>
  )
}
