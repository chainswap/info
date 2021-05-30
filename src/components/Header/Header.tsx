import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Box, Menu, MenuItem } from '@material-ui/core'
import { styled, makeStyles } from '@material-ui/styles'
import { Text } from 'rebass'
import { useWalletModalToggle, useClaimModalToggle } from '../../state/application/hooks'
import StatusIcon from '../../assets/images/status_icon.svg'
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
import ChainSwap from '../../assets/images/chain_swap.svg'
import routes from '../../constants/routes'
import SelectedIcon from '../../assets/images/selected_icon.svg'

enum Mode {
  VISITOR,
  USER,
}

const NavLinks = [
  {
    name: 'Swap',
    link: routes.swap,
  },
  {
    name: 'Deploy',
    link: routes.deploy,
  },
  {
    name: 'Liquidity',
    link: routes.liquidity,
  },
  {
    name: 'Farm',
    link: routes.farm,
  },
  {
    name: 'Info',
    link: routes.info,
  },
]

const useStyles = makeStyles({
  root: {
    height: 88,
    backgroundColor: '#131315',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: 'none',
    padding: '0 60px 00 40px',
  },
  mainLogo: {
    '& img': {
      width: 180.8,
      height: 34.7,
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  navLink: {
    textDecoration: 'none',
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.5,
    marginRight: 28,
    '&.active': {
      opacity: 1,
    },
    '&:hover': {
      opacity: 1,
    },
  },
})

const LinksWrapper = styled('div')({
  marginLeft: 60.2,
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
  const classes = useStyles()

  const [mode, setMode] = useState(Mode.USER)
  const toggleWalletModal = useWalletModalToggle()
  const toggleClaimModal = useClaimModalToggle()
  const [address, setAddress] = useState('0x72ef586A2c515B605A873ad9a8FBdFD43Df77123')
  // const address = null
  const [chain, setChain] = useState(ChainList[0])
  const [amount, setAmount] = useState(1.24)
  const [currency, setCurrency] = useState('MATTER')
  const [showMenu, setShowMenu] = useState(false)
  const [value, setValue] = useState(null)

  // function onChangeChain(e: any) {
  //   const chain = ChainList.filter((el) => el.symbol === e.target.value)[0]
  //   setChain(chain)
  //   setShowMenu(false)
  //   console.log(e)
  // }

  function openMenu() {
    console.log('open')
    setShowMenu(true)
  }

  function onSelectCurrency(e: any) {
    console.log(e.target.value)
    setValue(e.target.value)
    setShowMenu(false)
  }

  return (
    <>
      <AppBar className={classes.root}>
        <Box display="flex" alignItems="center">
          <NavLink id={'chainswap'} to={routes.swap} className={classes.mainLogo}>
            <Image src={ChainSwap} alt={'chainswap'} />
          </NavLink>
          <LinksWrapper>
            {NavLinks.map((nav) => (
              <NavLink id={`${nav.link}-nav-link`} to={nav.link} className={classes.navLink}>
                {nav.name}
              </NavLink>
            ))}
          </LinksWrapper>
        </Box>

        {mode === Mode.USER && address ? (
          <Box display="flex">
            <Box mr={'16px'}>
              <OutlineButton width={'100px'} height={'32px'} onClick={toggleClaimModal}>
                Claim List
              </OutlineButton>
            </Box>
            <Box mr={'8px'}>
              <Select
                defaultValue={chain}
                size={'small'}
                onChange={onSelectCurrency}
                selectedIcon={chain.logo}
                selectedName={chain.symbol}
                value={value}
              >
                {ChainList.map((option) => (
                  <MenuItem value={option.symbol} key={option.symbol} onClick={onSelectCurrency}>
                    {chain.symbol === option.symbol && <Image src={SelectedIcon} alt={'selected icon'} />}
                    <LogoText logo={option.logo} text={option.symbol} size={'small'} />
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <WalletInfo amount={amount} currency={currency} address={address} />
          </Box>
        ) : (
          <Button fontSize={'14px'} width={'140px'} height={'32px'} onClick={toggleWalletModal}>
            Connect Wallet
          </Button>
        )}
      </AppBar>

      {mode === Mode.USER && (
        <Box position={'absolute'} right={'60px'} top={'72px'}>
          <NotifyBox />
        </Box>
      )}

      <WalletModal />
      <ClaimModal />
    </>
  )
}
