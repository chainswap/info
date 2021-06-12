import React from 'react'
import DetailedMessagebox from '../MessageBox/DetailedMessageBox'
import { Box } from '@material-ui/core'
import theme, { TYPE } from '../../theme/index'
import TextButton from '../Button/TextButton'
import Copy from '../Copy/Copy'

interface Props {
  data: {
    'Token contract address': string
    'Mappable contract address': string
    'Mainchain ID': string
  }
  action: () => void
}

export default function DeploySuccessModal(props: Props) {
  const { data, action } = props

  return (
    <DetailedMessagebox
      type={'success'}
      header={'Success!'}
      message={
        'You have successfully deployed your mappable contract on mainchain. Please save the following information and continue to next step:'
      }
      actionText={'Go to Next Step'}
      action={action}
    >
      <Box padding={'0 32px'} display={'grid'} gridGap={12}>
        {Object.keys(data).map((key) => {
          return (
            <Box
              key={key}
              display={'flex'}
              alignItems={'center'}
              borderRadius={14}
              justifyContent={'space-between'}
              width={'488px'}
              bgcolor={theme.bgColor.bg3}
              height={'48px'}
              padding={'0 20px'}
            >
              <Box display={'flex'}>
                <Box marginRight={'8px'}>
                  <TYPE.gray>{key}:</TYPE.gray>
                </Box>
                <TYPE.smallHeader>{data[key as keyof typeof data]}</TYPE.smallHeader>
              </Box>
              <Copy toCopy={data[key as keyof typeof data]} />
            </Box>
          )
        })}
      </Box>
      <Box margin="16px 0">
        <TextButton fontSize={13} fontWeight={400} primary>
          View on Etherscan
        </TextButton>
      </Box>
    </DetailedMessagebox>
  )
}
