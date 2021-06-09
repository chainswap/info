import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Box, MenuItem, Dialog } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { Text } from 'rebass'
import OutlineSelect from '../Select/OutlineSelect'
import TextButton from '../Button/TextButton'
import ClaimList from './ClaimList'
import { claimModalData } from '../../data/dummyData'
import CloseIcon from '../../assets/images/close_icon.svg'
import Image from '../Image/Image'
import Pager from '../Pager/Pager'
import Divider from '../Divider/Divider'
import Chain from '../../models/chain'
import Currency from '../../models/currency'

interface Props {
  isOpen: boolean
  onDismiss: () => void
}

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

const ClaimHeader = ({ onDismiss }: { onDismiss: () => void }) => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} height={'62px'} alignItems={'center'}>
      <Text fontFamily={'Futura PT'} fontSize={20} fontWeight={500} marginLeft={'32px'}>
        Claim List
      </Text>
      <Box marginRight={'70px'}>
        <OutlineSelect
          defaultValue={''}
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
      <CloseBox onClick={onDismiss}>
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
        <TextButton fontSize={14} underline>
          Import now
        </TextButton>
      </Text>
      <Pager />
    </Box>
  )
}

type DataItem = {
  from: Chain
  to: Chain
  currency: Currency
  address: string
  amount: number
  status: string
}

export default function ClaimModal(props: Props) {
  const classes = useStyles()
  const data: DataItem[] = claimModalData
  const dataReady = data.filter((item) => item.status === 'ready')
  const dataCompleted = data.filter((item) => item.status !== 'ready')
  const { isOpen, onDismiss } = props

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onDismiss}
        PaperProps={{ className: classes.paper }}
        BackdropProps={{ className: classes.backdrop }}
      >
        <ClaimHeader onDismiss={onDismiss} />

        {dataReady.length > 0 && (
          <Box padding={'0 32px'}>
            <ClaimList dataItems={dataReady} />
          </Box>
        )}

        {dataCompleted.length > 0 && (
          <>
            <Divider orientation={'horizontal'} margin={'8px 0 20px 0'} />
            <Box padding={'0 32px'}>
              <ClaimList dataItems={dataCompleted} />
            </Box>
          </>
        )}

        {data.length > 0 ? (
          <Box textAlign={'center'} margin={'1px auto 16px'}>
            <TextButton fontSize={12} fontWeight={400} underline>
              Clear All
            </TextButton>
          </Box>
        ) : (
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            margin={'114px auto 180px'}
            width={'266px'}
            textAlign={'center'}
          >
            <Text fontSize={'16px'} fontWeight={400}>
              You currently don't have transactions in the Claim List
            </Text>
          </Box>
        )}

        <Box position={'relative'}>
          <ClaimFooter />
        </Box>
      </Dialog>
    </>
  )
}
