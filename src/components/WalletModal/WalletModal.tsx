import { useState } from 'react'
import Modal from '../Modal/Modal'
import { Box, useTheme, useMediaQuery } from '@material-ui/core'
import { SUPPORTED_WALLETS } from '../../constants'
import Option from './Option'
import { useSetUser } from '../../state/user/hooks'

const WALLET_VIEWS = {
  OPTIONS: 'options',
  ACCOUNT: 'account',
}

export default function WalletModal({ onDismiss }: { onDismiss: () => void }) {
  const [walletView] = useState(WALLET_VIEWS.OPTIONS)
  const setUser = useSetUser()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const getOptions = () => {
    return Object.keys(SUPPORTED_WALLETS).map((key) => {
      const option = SUPPORTED_WALLETS[key]

      return (
        <Option
          id={`connect-${key}`}
          onClick={onClickOption}
          key={key}
          color={option.color}
          link={option.href}
          header={option.name}
          subheader={null}
          icon={option.iconURL}
        />
      )
    })
  }

  const onClickOption = () => {
    setUser({ address: 'address' })
    onDismiss && onDismiss()
  }

  return (
    <Modal closeIcon={walletView === WALLET_VIEWS.OPTIONS} title="Connect to a wallet">
      <Box width={matches ? '100%' : 480} padding="32px" display="flex" flexDirection="column" alignItems="center">
        <Box display="grid" gridGap="12px">
          {getOptions()}
        </Box>
      </Box>
    </Modal>
  )
}
