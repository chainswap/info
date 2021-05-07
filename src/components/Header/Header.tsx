import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from '@material-ui/core'
import DummyLogo from '../../assets/images/dummy_logo.png'
import Row from '../Row'

const HeaderRow = styled(Row)({
  width: '100%',
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

const HeaderLinks = styled(Row)({})

const StyledNavLink = styled(NavLink)({
  alignItem: 'left',
  textDecoration: 'none',
  fontSize: 14,
  fontFamily: 'Roboto',
  lineHeight: '18.69px',
  letterSpacing: '0.02em',
  color: '#FFFFFF',
})

export default function Header() {
  return (
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
  )
}
