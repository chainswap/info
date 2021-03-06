import React from 'react'
import { Box } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import Chain from '../../models/chain'
import Currency from '../../models/currency'
import ArrowForward from '../../assets/images/arrow_forward.svg'
import Image from '../Image/Image'
import { Text } from 'rebass'
import SuccessIcon from '../../assets/images/claim_list_success.svg'
import FailureIcon from '../../assets/images/claim_list_failure.svg'
import ClaimPopupModal from './ClaimPopupModal'
import useModal from '../../hooks/useModal'
import { claimModalData } from 'data/dummyData'
import ClaimButton from 'components/Button/ClaimButton'

enum Status {
  READY = 'ready',
  SUCCESS = 'success',
  FAILURE = 'failure',
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

export function ClaimListItem({
  from,
  to,
  currency,
  address,
  amount,
  status,
}: {
  from: Chain
  to: Chain
  currency: Currency
  address: string
  amount: number
  status: string
}) {
  const amountText = `${amount} ${currency.symbol}`
  const amountTextAbbreviated = amountText.substr(0, 9) + '...'
  const { showModal } = useModal()

  return (
    <>
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
          <KV k={'From:'} v={from.symbol} logo={from.logo} marginRight={'12px'} />
          <KV k={''} v={''} logo={ArrowForward} marginRight={'12px'} />
          <KV k={'To:'} v={to.symbol} logo={to.logo} marginRight={'24px'} />
          <KV k={'Token:'} v={currency.symbol} logo={currency.logo} marginRight={'20px'} />
          <KV k={'Destination:'} v={address} smallText marginRight={'18px'} />
          <KV k={'Amount:'} v={status === Status.READY ? amountTextAbbreviated : amountText} />
        </Box>
        <Box>
          {status === Status.READY ? (
            <ClaimButton onClick={() => showModal(<ClaimPopupModal />)}>Claim</ClaimButton>
          ) : status === Status.SUCCESS ? (
            <Image src={SuccessIcon} alt={'success icon'} />
          ) : (
            <Image src={FailureIcon} alt={'failure icon'} />
          )}
        </Box>
      </Box>
    </>
  )
}

export default function ClaimList() {
  return (
    <>
      {claimModalData.map((item, i) => (
        <ClaimListItem key={i} {...item} />
      ))}
    </>
  )
}
