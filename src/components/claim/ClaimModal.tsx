import React from 'react'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useClaimModalToggle } from '../../state/application/hooks'
// import Modal from '../Modal/Modal'
import { makeStyles, Modal } from '@material-ui/core'
import { Box, Divider, MenuItem } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { Text } from 'rebass'
import OutlineSelect from '../Select/OutlineSelect'
import CloseIcon from '@material-ui/icons/Close'
import ButtonText from '../Button/ButtonText'
import DummuLogo from '../../assets/images/bsc.svg'
import Image from '../Image/Image'
import OutlineButton from '../Button/OutlineButton'
import ArrowForward from '../../assets/images/arrow_forward.svg'
import abbreviateString from '../../utils/abbreviateString'

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
  // position: 'absolute',
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

const Label = styled(Box)({
  opacity: 0.6,
  fontSize: 12,
  fontWeight: 400,
  height: '18px',
})

const KV = ({
  k,
  v,
  logo,
  smallText,
  marginRight,
}: {
  k: string
  v: string
  logo?: string
  smallText?: boolean
  marginRight?: string
}) => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} height={'50px'} marginRight={marginRight}>
      <Label>{k}</Label>
      <Box display={'flex'} marginTop={'5px'} height={'20px'} alignItems={'center'}>
        {logo && (
          <Box marginRight={'6px'}>
            <Image src={logo} alt={'currency logo'} />
          </Box>
        )}

        <Box>
          <Text fontSize={smallText ? 12 : 14}>{v}</Text>
        </Box>
      </Box>
    </Box>
  )
}

const ClaimListItem = ({
  from,
  to,
  currency,
  address,
  amount,
}: {
  from: string
  to: string
  currency: string
  address: string
  amount: number
}) => {
  const amountText = `${amount} ${currency}`

  return (
    <Box
      height={64}
      bgcolor={'rgba(255, 255, 255, 0.08)'}
      borderRadius={10}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      padding={'0 16px'}
      marginBottom={'12px'}
    >
      <Box display={'flex'} alignItems={'center'}>
        <KV k={'From:'} v={from} logo={DummuLogo} marginRight={'12px'} />
        <KV k={''} v={''} logo={ArrowForward} marginRight={'12px'} />
        <KV k={'To:'} v={to} logo={DummuLogo} marginRight={'24px'} />
        <KV k={'Token:'} v={currency} logo={DummuLogo} marginRight={'20px'} />
        <KV k={'Destination:'} v={address} smallText marginRight={'18px'} />
        <KV k={'Amount:'} v={abbreviateString(amountText, 9, 0)} />
      </Box>
      <Box>
        <OutlineButton width={'62px'} height={'36px'} primary>
          Claim
        </OutlineButton>
      </Box>
    </Box>
  )
}

const ClaimList = () => {
  return (
    <>
      <ClaimListItem from={'ETH'} to={'BSC'} currency={'MATTER'} address={'0x72ef...7123'} amount={10500} />
      <ClaimListItem from={'ETH'} to={'BSC'} currency={'MATTER'} address={'0x72ef...7123'} amount={10500} />
      <ClaimListItem from={'ETH'} to={'BSC'} currency={'MATTER'} address={'0x72ef...7123'} amount={10500} />
      <ClaimListItem from={'ETH'} to={'BSC'} currency={'MATTER'} address={'0x72ef...7123'} amount={10500} />
      <ClaimListItem from={'ETH'} to={'BSC'} currency={'MATTER'} address={'0x72ef...7123'} amount={10500} />
    </>
  )
}

export default function ClaimModal() {
  const classes = useStyles()

  const claimModalOpen = useModalOpen(ApplicationModal.CLAIM)
  const toggleClaimModal = useClaimModalToggle()

  return (
    <Modal
      className={classes.root}
      open={claimModalOpen}
      onClose={() => {
        console.log(11)
      }}
    >
      <Box padding={'18px 32px 16px 32px'}>
        <ClaimHeader />
        <ClaimList />
        <Divider />
        <Box textAlign={'center'}>
          <ButtonText>Clear All</ButtonText>
        </Box>
      </Box>
    </Modal>
  )
}
