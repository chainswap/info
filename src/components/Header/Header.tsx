import { useState, useEffect, useCallback } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { X, ChevronUp, Menu } from 'react-feather'
import { AppBar, Box, MenuItem, makeStyles, styled } from '@material-ui/core'
import { Text } from 'rebass'
import StatusIcon from '../../assets/images/status_icon.svg'
import { ChainList } from '../../data/dummyData'
import ClaimButton from '../Button/ClaimButton'
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
import useModal from '../../hooks/useModal'
import { useUserLogined } from '../../state/user/hooks'
import TextButton from '../Button/TextButton'
import AccountModal from '../../components/AccountModal/AccountModal'
import { ConfirmedTransactionList, PendingTransactionList, NotificationList } from '../../data/dummyData'
import PlainSelect from '../Select/PlainSelect'
import { HideOnMobile, ShowOnMobile } from 'theme'
import Modal from 'components/Modal/Modal'

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

const AboutNavItems = [
  {
    name: 'Apply for listing',
    link: null,
  },
  {
    name: 'Auditing report',
    link: null,
  },
  {
    name: 'Support',
    link: null,
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: theme.height.header,
    backgroundColor: '#131315',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: 'none',
    padding: '0 60px 00 40px',
    [theme.breakpoints.down('md')]: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      top: 'unset',
      borderTop: '1px solid ' + theme.bgColor.bg4,
      justifyContent: 'center',
    },
  },
  actionButton: {
    [theme.breakpoints.down('md')]: {
      maxWidth: 320,
      width: '100%',
      borderRadius: 49,
      height: 40,
    },
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
  menuItem: {
    '&::before': {
      content: '""',
      width: 30,
      height: 20,
      display: 'flex',
      justifyContent: 'center',
    },
    '&.Mui-selected::before': {
      content: `url(${SelectedIcon})`,
      width: 30,
      height: 20,
      display: 'flex',
      justifyContent: 'center',
    },
  },
}))

const useMobileStyle = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: theme.height.mobileHeader,
    backgroundColor: '#131315',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: 'none',
    padding: '28px 24px',
  },
  mainLogo: {
    '& img': {
      width: 136,
      height: 34.7,
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  navLink: {
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: 24,
    color: theme.textColor.text1,
    padding: '13px 24px',
    width: '100%',
    textAlign: 'left',
    '&.active': {
      color: theme.palette.primary.main,
    },
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}))

const LinksWrapper = styled('div')({
  marginLeft: 60.2,
})

const WalletInfo = ({ amount, currency, address }: { amount: number; currency: string; address: string }) => {
  const { showModal } = useModal()
  const showAccountModal = () => {
    showModal(
      <AccountModal
        ENSName={'0xe60b...e6d3'}
        pendingTransactions={PendingTransactionList}
        confirmedTransactions={ConfirmedTransactionList}
      />
    )
  }

  return (
    <Box
      width={'250px'}
      height={'32px'}
      display={'flex'}
      border={'1px solid #FFFFFF'}
      borderRadius={'4px'}
      alignItems={'center'}
    >
      <Box padding={'0 10px 0 12px'}>
        <Text fontSize={13} fontWeight={400}>{`${amount} ${currency}`}</Text>
      </Box>
      <Divider orientation={'vertical'} />
      <Box padding={'0 10.26px 0 8px'} display={'flex'} alignItems={'center'}>
        <Image src={StatusIcon} alt={'status icon'} style={{ width: '12px', height: '12px' }} />
        <Box margin={'0 6px'}>
          <TextButton onClick={showAccountModal} fontSize={12} opacity={0.6}>
            {shortenAddress(address)}
          </TextButton>
        </Box>
        <HideOnMobile>
          <Copy toCopy={address} />
        </HideOnMobile>
      </Box>
    </Box>
  )
}

export default function Header() {
  const classes = useStyles()

  const [mode, setMode] = useState(Mode.VISITOR)
  const [address] = useState('0xKos369cd6vwd94wq1gt4hr87ujv')
  // const address = null
  const [chain, setChain] = useState(ChainList[0])
  const [amount] = useState(1.24)
  const [currency] = useState('MATTER')
  const userLogined = useUserLogined()
  const { showModal, hideModal } = useModal()
  // const [showClaimModal, setShowClaimModal] = useState(false)
  const history = useHistory()

  useEffect(() => {
    if (userLogined) {
      setMode(Mode.USER)
    }
  }, [userLogined])

  function onChangeChain(e: any) {
    const chain = ChainList.filter((el) => el.symbol === e.target.value)[0]
    setChain(chain)
  }

  return (
    <>
      <MobileHeader />
      <AppBar className={classes.root}>
        <HideOnMobile>
          <Box display="flex" alignItems="center">
            <NavLink id={'chainswap'} to={routes.swap} className={classes.mainLogo}>
              <Image src={ChainSwap} alt={'chainswap'} />
            </NavLink>
            <LinksWrapper>
              {NavLinks.map((nav) => (
                <NavLink key={nav.name} id={`${nav.link}-nav-link`} to={nav.link} className={classes.navLink}>
                  {nav.name}
                </NavLink>
              ))}
              <PlainSelect placeholder="about">
                {AboutNavItems.map((item) => (
                  <MenuItem key={item.name}>{item.name}</MenuItem>
                ))}
              </PlainSelect>
            </LinksWrapper>
          </Box>
        </HideOnMobile>
        {mode === Mode.USER ? (
          <Box display="flex">
            <HideOnMobile>
              <Box mr={'16px'}>
                <ClaimButton
                  onClick={() => {
                    history.push(routes.claim)
                  }}
                >
                  Claim List
                </ClaimButton>
              </Box>
            </HideOnMobile>
            <Box mr={'8px'}>
              <Select defaultValue={chain.symbol} value={chain.symbol} size={'small'} onChange={onChangeChain}>
                {ChainList.map((option) => (
                  <MenuItem
                    className={classes.menuItem}
                    value={option.symbol}
                    key={option.symbol}
                    selected={chain.symbol === option.symbol}
                  >
                    <LogoText logo={option.logo} text={option.symbol} size={'small'} />
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <WalletInfo amount={amount} currency={currency} address={address} />
          </Box>
        ) : (
          <Button
            classname={classes.actionButton}
            fontSize={'14px'}
            width={'140px'}
            height={'32px'}
            onClick={() => showModal(<WalletModal onDismiss={hideModal} />)}
          >
            Connect Wallet
          </Button>
        )}
      </AppBar>

      {mode === Mode.USER && (
        <Box position={'absolute'} right={'60px'} top={'72px'}>
          <NotifyBox notifications={NotificationList} />
        </Box>
      )}

      {/* {showClaimModal && <ClaimModal isOpen={showClaimModal} onDismiss={() => setShowClaimModal(false)} />} */}
    </>
  )
}

function Accordion({ children, placeholder }: { children: React.ReactNode; placeholder: string }) {
  const classes = useMobileStyle()
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = useCallback(() => {
    setIsOpen((state) => !state)
  }, [])
  return (
    <>
      <Box className={classes.navLink} display="flex" alignItems="center" gridGap={12} onClick={handleClick}>
        {placeholder} <ChevronUp style={isOpen ? {} : { transform: 'rotate(180deg)' }} />
      </Box>
      <Box padding="0 15px"> {isOpen && children}</Box>
    </>
  )
}

function MobileHeader() {
  const classes = useMobileStyle()
  const { showModal, hideModal, isOpen } = useModal()

  const MobileMenu = useCallback(
    () => (
      <Modal isCardOnMobile>
        <Box display="grid" gridGap="15px">
          {NavLinks.map((nav) => (
            <NavLink
              key={nav.name}
              id={`${nav.link}-nav-link`}
              to={nav.link}
              className={classes.navLink}
              onClick={hideModal}
            >
              {nav.name}
            </NavLink>
          ))}
          <Accordion placeholder="About">
            {AboutNavItems.map((item) => (
              <MenuItem key={item.name} onClick={hideModal}>
                {item.name}
              </MenuItem>
            ))}
          </Accordion>
        </Box>
      </Modal>
    ),
    [classes.navLink, hideModal]
  )
  const handleClick = useCallback(() => {
    showModal(<MobileMenu />)
  }, [MobileMenu, showModal])

  return (
    <ShowOnMobile>
      <AppBar className={classes.root}>
        <Box display="flex" alignItems="center">
          <NavLink id={'chainswap'} to={routes.swap} className={classes.mainLogo}>
            <Image src={ChainSwap} alt={'chainswap'} />
          </NavLink>
        </Box>
        <TextButton onClick={isOpen ? hideModal : handleClick}>{isOpen ? <X /> : <Menu />}</TextButton>
      </AppBar>
    </ShowOnMobile>
  )
}
