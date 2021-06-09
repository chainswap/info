import React from 'react'
import { Box } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import OutlineButton from '../../components/Button/OutlineButton'
import { Text } from 'rebass'

interface Props {
  onClickExistingToken: () => void
  onClickNewToken: () => void
}

const Hint = styled('div')({
  fontSize: 12,
  height: 18,
  fontWeight: 400,
  color: 'white',
  opacity: 0.8,
  margin: 0,
  marginTop: 3,
})

export default function Landing(props: Props) {
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
            <Hint>You already deployed a token on Ethereum or EMV supportive chians</Hint>
          </Box>
        </OutlineButton>
        <OutlineButton onClick={onClickNewToken} height={72} primary>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            New Token
            <Hint>You already deployed a token on Ethereum or EMV supportive chians</Hint>
          </Box>
        </OutlineButton>
      </Box>
    </Box>
  )
}
