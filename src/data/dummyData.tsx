import DummyLogo from '../assets/images/bsc.svg'
import Transaction from '../models/transaction'
import Notification from '../models/notification'
import AaveIcon from '../assets/images/currency/aave.svg'
import AmpIcon from '../assets/images/currency/amp.svg'
import AntIcon from '../assets/images/currency/ant.svg'
import BnbIcon from '../assets/images/currency/bnb.svg'
import EthIcon from '../assets/images/currency/eth.svg'

export const ETH = {
  logo: DummyLogo,
  symbol: 'ETH',
  name: 'ETH',
  balance: 0,
  id: 'XXX',
  address: 'XXXXXXXXXXXXXXX',
}

export const BSC = {
  logo: DummyLogo,
  symbol: 'BSC',
  id: 'XXX',
  address: 'XXXXXXXXXXXXXXX',
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
    logo: EthIcon,
    symbol: 'ETH',
    name: 'Ether',
    balance: 900,
  },
  {
    logo: AaveIcon,
    symbol: 'AAVE',
    name: 'Aave',
    balance: 800,
  },
  {
    logo: AmpIcon,
    symbol: 'AMP',
    name: 'Amp',
    balance: 700,
  },
  {
    logo: AntIcon,
    symbol: 'ANT',
    name: 'Aragon Network Token',
    balance: 600,
  },
  {
    logo: BnbIcon,
    symbol: 'BNB',
    name: 'Binance Coin',
    balance: 500,
  },
]

export const ChainList = [
  {
    logo: DummyLogo,
    symbol: 'ETH',
    id: 'XXX',
    address: 'XXXXXXXXXXXXXXXXXXXX',
  },
  {
    logo: DummyLogo,
    symbol: 'BSC',
    id: 'XXX',
    address: 'XXXXXXXXXXXXXXXXXXXX',
  },
  {
    logo: DummyLogo,
    symbol: 'OEC',
    id: 'XXX',
    address: 'XXXXXXXXXXXXXXXXXXXX',
  },
  {
    logo: DummyLogo,
    symbol: 'HECO',
    id: 'XXX',
    address: 'XXXXXXXXXXXXXXXXXXXX',
  },
  {
    logo: DummyLogo,
    symbol: 'Polygon',
    id: 'XXX',
    address: 'XXXXXXXXXXXXXXXXXXXX',
  },
]

export const ConfirmedTransactionList: Transaction[] = [
  {
    summary: 'Swap 1.0ETH for 0.000000001 BSC',
    status: 'success',
  },
  {
    summary: 'Swap 1.0ETH for 0.000000001 BSC',
    status: 'success',
  },
]

export const PendingTransactionList: Transaction[] = [
  {
    summary: 'Swap 1.0ETH for 0.000000001 BSC',
    status: 'pending',
  },
  {
    summary: 'Swap 1.0ETH for 0.000000001 BSC',
    status: 'pending',
  },
]

export const NotificationList: Notification[] = [
  {
    summary: 'Deposit 1.0ETH for 0.000000001 BSC',
    status: 'success',
  },
  {
    summary: 'Withdraw 1.0ETH for 0.000000001 BSC',
    status: 'success',
  },
]
