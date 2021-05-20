import React from 'react'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useClaimModalToggle } from '../../state/application/hooks'
import { makeStyles, Modal } from '@material-ui/core'
import { Box, Divider, MenuItem } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { Text } from 'rebass'
import OutlineSelect from '../Select/OutlineSelect'
import CloseIcon from '@material-ui/icons/Close'
import ButtonText from '../Button/ButtonText'
import ClaimList from './ClaimList'
import { claimModalData } from '../../data/dummyData'

const useStyles = makeStyles({
  root: {
    width: 620,
    height: 504,
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%), #000000',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: 32,
  },
})

const CloseButton = styled('div')({
  right: 30,
  top: 24,
  color: '#FFFFFF',
  opacity: 0.6,
  '&:hover': {
    cursor: 'pointer',
  },
  marginLeft: 24,
})

const ClaimHeader = () => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} height={'62px'} alignItems={'center'}>
      <Text fontFamily={'Futura PT'} fontSize={20} fontWeight={500}>
        Claim List
      </Text>
      <Box display={'flex'}>
        <OutlineSelect defaultValue={''}>
          <MenuItem value="ETH">ETH</MenuItem>
        </OutlineSelect>
        <CloseButton>
          <CloseIcon />
        </CloseButton>
      </Box>
    </Box>
  )
}

export default function ClaimModal() {
  const classes = useStyles()

  const claimModalOpen = useModalOpen(ApplicationModal.CLAIM)
  const toggleClaimModal = useClaimModalToggle()

  return (
    <Modal className={classes.root} open={claimModalOpen} onClose={toggleClaimModal}>
      <Box padding={'18px 32px 16px 32px'}>
        <ClaimHeader />
        <ClaimList dataItems={claimModalData} />
        <Divider />
        <Box textAlign={'center'}>
          <ButtonText>Clear All</ButtonText>
        </Box>
      </Box>
    </Modal>
  )
}
