import React from 'react'
import { styled } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import Image from '../Image/Image'
import StatusIcon from '../../assets/images/status_icon.svg'
import { Text } from 'rebass'
import { shortenAddress } from '../../utils/utils'
import Copy from '../Copy/Copy'
import OutlineButton from '../Button/OutlineButton'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import WalletModal from '../WalletModal/WalletModal'
import Transaction from '../../models/transaction'
import { ReactComponent as PendingIcon } from '../../assets/images/pending_icon.svg'
import { ReactComponent as TxnSuccessIcon } from '../../assets/images/txn_success_icon.svg'
import useModal from '../../hooks/useModal'

interface Props {
  pendingTransactions: Transaction[]
  confirmedTransactions: Transaction[]
  ENSName?: string
}

const Header = styled(Box)({
  margin: '24px auto',
  fontSize: 14,
  fontWeight: 400,
  opacity: 0.8,
})

const TransactionListWrapper = styled(Box)({
  width: 376,
  backgroundColor: '#000000',
  borderRadius: 22,
  border: '1px solid rgba(255, 255, 255, 0.2)',
  padding: '16px 24px',
  margin: '36px auto 31px',
})

const TransactionListHeader = styled(Box)({
  fontSize: 16,
  marginBottom: 16,
})

const TransactionListItemsWrapper = styled(Box)({
  display: 'grid',
  gridGap: '8px',
})

export default function AccountMoal(props: Props) {
  const { pendingTransactions, confirmedTransactions } = props
  const name = 'MetaMask'
  const account = '0x72ef586A2c515B605A873ad9a8FBdFD43Df77123'
  const { hideModal, showModal } = useModal()

  function renderTransactions(transactions: Transaction[]) {
    function getStatusIcon(transaction: Transaction) {
      return <>{transaction.status === 'success' ? <TxnSuccessIcon /> : <PendingIcon />}</>
    }
    return (
      <>
        {transactions.map((transaction, i) => {
          return (
            <Box key={i} display={'flex'} justifyContent={'space-between'}>
              <Text fontSize={'14px'}>{transaction.summary}</Text>
              {getStatusIcon(transaction)}
            </Box>
          )
        })}
      </>
    )
  }

  return (
    <Modal showIcon={false}>
      <Header>Connected with {name}</Header>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mx={'141px'}>
        <Image src={StatusIcon} alt={'status icon'} style={{ width: 28, height: 28 }} />
        <Text fontSize={24} fontWeight={400}>
          {account && shortenAddress(account)}
        </Text>
      </Box>
      <Box margin={'8px auto 36px'}>
        <Copy toCopy={account}>
          <Text fontWeight={400} fontSize={'12px'} marginLeft={'6.26px'} opacity={0.6}>
            Copy Address
          </Text>
        </Copy>
      </Box>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mx={'52px'}>
        <OutlineButton width={'180px'} onClick={hideModal} primary>
          Close
        </OutlineButton>
        <Button width={'180px'} onClick={() => showModal(<WalletModal />)}>
          Change
        </Button>
      </Box>
      <TransactionListWrapper>
        <TransactionListHeader>Recent Transactions</TransactionListHeader>
        <TransactionListItemsWrapper>
          {renderTransactions(pendingTransactions)}
          {renderTransactions(confirmedTransactions)}
        </TransactionListItemsWrapper>
      </TransactionListWrapper>
    </Modal>
  )
}
