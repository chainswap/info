import React from 'react'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useClaimModalToggle } from '../../state/application/hooks'
import { makeStyles } from '@material-ui/core'
import { Box, Divider, MenuItem, Dialog } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { Text } from 'rebass'
import OutlineSelect from '../Select/OutlineSelect'
import ButtonText from '../Button/ButtonText'
import ClaimList from './ClaimList'
import { claimModalData } from '../../data/dummyData'
import CloseIcon from '../../assets/images/close_icon.svg'
import Image from '../Image/Image'
import Pager from '../Pager/Pager'

const useStyles = makeStyles({
  paper: {
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%), #000000',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxSizing: 'border-box',
    borderRadius: 32,
    width: '620px',
    overflow: 'visible',
    '&.MuiDialog-paperWidthSm': {
      maxWidth: '620px',
    },
  },
  backdrop: {
    backgroundColor: 'rgba(0,0,0,.8)',
  },
  divider: {
    border: 'none',
    height: '1px',
    backgroundColor: '#FFFFFF',
    opacity: 0.2,
    margin: '8px 0 20px 0',
  },
  footer: {
    position: 'absolute',
    width: '620px',
    height: '63px',
    display: 'flex',
    alignItems: 'center',
  },
})

const CloseBox = styled('div')({
  position: 'absolute',
  right: 32,
  top: 26,
  '&:hover': {
    cursor: 'pointer',
  },
})

const ClaimHeader = () => {
  const toggleClaimModal = useClaimModalToggle()

  return (
    <Box display={'flex'} justifyContent={'space-between'} height={'62px'} alignItems={'center'}>
      <Text fontFamily={'Futura PT'} fontSize={20} fontWeight={500} marginLeft={'32px'}>
        Claim List
      </Text>
      <Box marginRight={'70px'}>
        <OutlineSelect
          defaultValue={'Token: All'}
          onChange={() => {
            alert('setToken')
          }}
        >
          <MenuItem key={'ETH'} value={'ETH'}>
            ETH
          </MenuItem>
          <MenuItem key={'BSC'} value={'BSC'}>
            BSC
          </MenuItem>
        </OutlineSelect>
      </Box>
      <CloseBox onClick={toggleClaimModal}>
        <Image src={CloseIcon} alt={'close icon'} />
      </CloseBox>
    </Box>
  )
}

const ClaimFooter = () => {
  const classes = useStyles()
  return (
    <Box className={classes.footer} display={'flex'} justifyContent={'space-between'} alignContent={'center'}>
      <Text fontSize={'14px'} fontWeight={400} color={'#FFFFFF'}>
        Don't see your claim request?
        <a href="#" style={{ color: '#FFFFFF' }}>
          Import now
        </a>
      </Text>
      <Pager />
    </Box>
  )
}

export default function ClaimModal() {
  const classes = useStyles()
  const claimModalOpen = useModalOpen(ApplicationModal.CLAIM)
  const dataReady = claimModalData.filter((item) => item.status === 'ready')
  const dataCompleted = claimModalData.filter((item) => item.status !== 'ready')

  return (
    <>
      <Dialog
        open={claimModalOpen}
        PaperProps={{ className: classes.paper }}
        BackdropProps={{ className: classes.backdrop }}
      >
        <ClaimHeader />
        <Box padding={'0 32px'}>
          <ClaimList dataItems={dataReady} />
        </Box>
        <Divider className={classes.divider} />
        <Box padding={'0 32px'}>
          <ClaimList dataItems={dataCompleted} />
        </Box>
        <Box textAlign={'center'} margin={'1px auto 16px'}>
          <ButtonText fontSize={'12px'} fontWeight={400} underline>
            Clear All
          </ButtonText>
        </Box>
        <Box position={'relative'}>
          <ClaimFooter />
        </Box>
      </Dialog>
    </>
  )
}
