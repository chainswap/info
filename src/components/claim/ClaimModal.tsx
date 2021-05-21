import React from 'react'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useClaimModalToggle } from '../../state/application/hooks'
import { makeStyles, Modal } from '@material-ui/core'
import { Box, Divider, MenuItem, Dialog } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { Text } from 'rebass'
import OutlineSelect from '../Select/OutlineSelect'
// import CloseIcon from '@material-ui/icons/Close'
import ButtonText from '../Button/ButtonText'
import ClaimList from './ClaimList'
import { claimModalData } from '../../data/dummyData'
import CloseIcon from '../../assets/images/close_icon.svg'
import Image from '../Image/Image'

const useStyles = makeStyles({
  root: {},
  paper: {
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%), #000000',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxSizing: 'border-box',
    borderRadius: 32,
    width: 620,
    height: 504,
  },
  backdrop: {
    backgroundColor: 'rgba(0,0,0,.8)',
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

export default function ClaimModal() {
  const classes = useStyles()

  const claimModalOpen = useModalOpen(ApplicationModal.CLAIM)

  return (
    <>
      <Dialog
        open={claimModalOpen}
        className={classes.root}
        PaperProps={{ className: classes.paper }}
        BackdropProps={{ className: classes.backdrop }}
      >
        <ClaimHeader />
        <ClaimList dataItems={claimModalData} />
        <Divider />
        <Box textAlign={'center'}>
          <ButtonText>Clear All</ButtonText>
        </Box>
      </Dialog>
    </>
  )
}
