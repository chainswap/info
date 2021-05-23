import DummyLogo from '../assets/images/bsc.svg'
import MetaMaskIcon from '../assets/images/meta_mask.svg'
import WalletConnect from '../assets/images/wallet_connect.svg'

export const ETH = {
  logo: DummyLogo,
  symbol: 'ETH',
}

export const BSC = {
  logo: DummyLogo,
  symbol: 'BSC',
}

export const MATTER = {
  logo: DummyLogo,
  symbol: 'MATTER',
  name: 'MATTER',
  balance: 0,
}

export const claimModalData = [
  {
    from: ETH,
    to: BSC,
    currency: MATTER,
    address: '0x72ef...7123',
    amount: 10500,
    status: 'ready',
  },
  {
    from: ETH,
    to: BSC,
    currency: MATTER,
    address: '0x72ef...7123',
    amount: 10500,
    status: 'ready',
  },
  {
    from: ETH,
    to: BSC,
    currency: MATTER,
    address: '0x72ef...7123',
    amount: 10500,
    status: 'success',
  },
  {
    from: ETH,
    to: BSC,
    currency: MATTER,
    address: '0x72ef...7123',
    amount: 10500,
    status: 'failure',
  },
]

export const CurrencyList = [
  {
    logo: DummyLogo,
    symbol: 'TOKEN',
    name: 'ChainSwap.com Governance Token',
    balance: 800,
  },
  {
    logo: DummyLogo,
    symbol: 'MATTER',
    name: 'Antimatter.Finance Governance Token',
    balance: 400,
  },
]

export const ChainList = [
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

export const WalletOptions = [
  {
    name: 'MetaMask',
    logo: MetaMaskIcon,
  },
  {
    name: 'WalletConnect',
    logo: WalletConnect,
  },
]
