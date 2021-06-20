import React from 'react'
import { Box, styled } from '@material-ui/core'
import { TYPE } from '../../theme/index'

interface Props {
  onClickExistingToken: () => void
  onClickNewToken: () => void
}

const OptionCard = styled('div')({
  width: 480,
  padding: '16px 20px',
  backgroundColor: '#211735',
  borderRadius: 10,
  cursor: 'pointer',
})

export default function DeployOptions(props: Props) {
  const { onClickExistingToken, onClickNewToken } = props

  return (
    <Box padding={'20px 40px 35px'}>
      <TYPE.mediumHeader marginBottom="32px">Please select the following options for deployment</TYPE.mediumHeader>
      <Box display="grid" gridGap="16px">
        {[
          {
            title: 'Existing Token',
            brief: 'You already deployed a token on Ethereum or EMV supportive chains',
            onClick: onClickExistingToken,
          },
          {
            title: 'New Token',
            brief: "You haven't deployed any token contract yet",
            onClick: onClickNewToken,
          },
        ].map(({ title, brief, onClick }) => (
          <OptionCard key={title} onClick={onClick}>
            <TYPE.primary marginBottom="6px">{title}</TYPE.primary>
            <TYPE.medium>{brief}</TYPE.medium>
          </OptionCard>
        ))}
      </Box>
    </Box>
  )
}
