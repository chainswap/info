import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from '@material-ui/core'
import DummyLogo from '../../assets/images/dummy_logo.png'
import { RowFixed } from '../Row'
import Button from '../../components/Button/Button'
import { useWalletModalToggle } from '../../state/application/hooks'

const HeaderFrame = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: 88,
  padding: '32px 40px',
})

const HeaderRow = styled(RowFixed)({})

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
})

export default function Header() {
  const toggleWalletModal = useWalletModalToggle()

  return (
    <HeaderFrame>
      <HeaderRow>
        <Title href="/swap">
          <img width={'24px'} src={DummyLogo} alt="logo" />
        </Title>
        <HeaderLinks>
          <StyledNavLink id={`swap-nav-link`} to={'/swap'}>
            swap
          </StyledNavLink>
          <StyledNavLink id={`swap-nav-link`} to={'/deploy'}>
            Deploy
          </StyledNavLink>
          <StyledNavLink id={`swap-nav-link`} to={'/liquidity'}>
            Liquidity
          </StyledNavLink>
          <StyledNavLink id={`swap-nav-link`} to={'/farm'}>
            Farm
          </StyledNavLink>
          <StyledNavLink id={`swap-nav-link`} to={'/info'}>
            Info
          </StyledNavLink>
        </HeaderLinks>
      </HeaderRow>
      <Button size="small" width={140} onClick={toggleWalletModal}>
        Connect Wallet
      </Button>
    </HeaderFrame>
  )
}
