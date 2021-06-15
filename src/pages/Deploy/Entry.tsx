import React from 'react'
import { Box } from '@material-ui/core'
import OutlineButton from '../../components/Button/OutlineButton'
import { Text } from 'rebass'
import theme from '../../theme/index'

interface Props {
  onClickExistingToken: () => void
  onClickNewToken: () => void
}

export default function Entry(props: Props) {
  const { onClickExistingToken, onClickNewToken } = props

  return (
    <Box padding={'52px 32px 41px 32px'}>
      <Text fontSize={18} fontWeight={400} marginBottom={26} textAlign={'center'}>
        Please select the following options for deployment
      </Text>
      <Box height={164} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
        <OutlineButton onClick={onClickExistingToken} height={72} primary>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            Existing Token
            <Text fontWeight={400} fontSize={12} opacity={0.8} color={theme.textColor.text1}>
              You already deployed a token on Ethereum or EMV supportive chians
            </Text>
          </Box>
        </OutlineButton>
        <OutlineButton onClick={onClickNewToken} height={72} primary>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            New Token
            <Text fontWeight={400} fontSize={12} opacity={0.8} color={theme.textColor.text1}>
              You already deployed a token on Ethereum or EMV supportive chians
            </Text>
          </Box>
        </OutlineButton>
      </Box>
    </Box>
  )
}
