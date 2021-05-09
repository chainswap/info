import Modal from '../Modal/Modal'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useWalletModalToggle } from '../../state/application/hooks'
import OutlineButton from '../Button/OutlineButton'
import { styled } from '@material-ui/styles'
import DummyLogo from '../../assets/images/dummy_logo.png'
import { ColumnCenter } from '../Column/index'

const Wrapper = styled('div')({
  margin: 0,
  padding: 32,
})

const OptionGrid = styled('div')({
  display: 'grid',
  gridGap: 12,
})

export default function WalletModal() {
  const walletModalOpen = useModalOpen(ApplicationModal.WALLET)
  const toggleWalletModal = useWalletModalToggle()

  return (
    <Modal isOpen={walletModalOpen} onDismiss={toggleWalletModal} label={'Connect to a wallet'}>
      <Wrapper>
        <ColumnCenter>
          <OptionGrid>
            <OutlineButton size="large" width="280px">
              <img src={DummyLogo} alt="currency-icon" />
              Metamask
            </OutlineButton>
            <OutlineButton size="large" width="280px">
              <img src={DummyLogo} alt="currency-icon" />
              WalletConnect
            </OutlineButton>
          </OptionGrid>
        </ColumnCenter>
      </Wrapper>
    </Modal>
  )
}
