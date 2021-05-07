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

const UpperSection = styled('div')({
  display: 'relative',
})

const HeaderRow = styled('div')({
  color: '#FFFFFF',
  fontFamily: 'Roboto',
  fontWeight: 400,
  fontSize: 18,
  lineHeight: '26.76px',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 48,
})

const CloseIcon = styled('div')({
  position: 'absolute',
  right: 24,
  top: 24,
  '&:hover': {
    cursor: 'pointer',
    opacity: 0.6,
  },
})

const OptionGrid = styled('div')({
  display: 'grid',
  gridGap: 12,
})

export default function WalletModal() {
  const walletModalOpen = useModalOpen(ApplicationModal.WALLET)
  const toggleWalletModal = useWalletModalToggle()

  return (
    <Modal isOpen={walletModalOpen}>
      <Wrapper>
        <UpperSection>
          <HeaderRow>Connect to a wallet</HeaderRow>
          <CloseIcon onClick={toggleWalletModal}>
            <img src={DummyLogo} alt="close-icon" />
          </CloseIcon>
        </UpperSection>
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
