import React, { useState, useContext } from 'react'
import Modal from '../Modal/Modal'
import { Box } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { SUPPORTED_WALLETS } from '../../constants'
import Option from './Option'
import AccountModal from '../AccountModal/AccountModal'
import { ModalContext } from '../../context/ModalContext'
import { ConfirmedTransactionList, PendingTransactionList } from '../../data/dummyData'
import { useSetUser } from '../../state/user/hooks'

const WALLET_VIEWS = {
  OPTIONS: 'options',
  ACCOUNT: 'account',
}

const Header = styled(Box)({
  marginBottom: '32px',
  fontWeight: 400,
  fontSize: '18px',
})

export default function WalletModal() {
  const [walletView] = useState(WALLET_VIEWS.OPTIONS)
  const { isOpen, showModal, hideModal } = useContext(ModalContext)
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
    <Modal isOpen={isOpen} onDismiss={hideModal} showIcon={walletView === WALLET_VIEWS.OPTIONS}>
      <Box width={480} padding="32px" display="flex" flexDirection="column" alignItems="center">
        <Header>Connect to a wallet</Header>

        <Box display="grid" gridGap="12px">
          {getOptions()}
        </Box>
      </Box>
    </Modal>
  )
}
