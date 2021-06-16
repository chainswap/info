import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import { Box } from '@material-ui/core'
import { SUPPORTED_WALLETS } from '../../constants'
import Option from './Option'
import AccountModal from '../AccountModal/AccountModal'
import { ConfirmedTransactionList, PendingTransactionList } from '../../data/dummyData'
import { useSetUser } from '../../state/user/hooks'
import useModal from '../../hooks/useModal'

const WALLET_VIEWS = {
  OPTIONS: 'options',
  ACCOUNT: 'account',
}

export default function WalletModal() {
  const [walletView] = useState(WALLET_VIEWS.OPTIONS)
  const { showModal } = useModal()
  const setUser = useSetUser()

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
    showModal(
      <AccountModal
        ENSName={'0xe60b...e6d3'}
        pendingTransactions={PendingTransactionList}
        confirmedTransactions={ConfirmedTransactionList}
      />
    )
  }

  return (
    <Modal showIcon={walletView === WALLET_VIEWS.OPTIONS} label="Connect to a wallet">
      <Box width={480} padding="32px" display="flex" flexDirection="column" alignItems="center">
        <Box display="grid" gridGap="12px">
          {getOptions()}
        </Box>
      </Box>
    </Modal>
  )
}
