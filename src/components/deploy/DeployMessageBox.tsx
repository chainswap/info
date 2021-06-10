import React from 'react'
import Messagebox from '../MessageBox/MessageBox'
import { Box } from '@material-ui/core'
import theme, { TYPE } from '../../theme/index'
import TextButton from '../Button/TextButton'
import Button from '../Button/Button'
import Copy from '../Copy/Copy'

interface Props {
  data: {
    'Token contract address': string
    'Mappable contract address': string
    'Mainchain ID': string
  }
}

export default function DeploySuccessModal(props: Props) {
  const { data } = props

  return (
    <Messagebox type={'success'} width={'552px'}>
      <Box marginBottom={'28px'} textAlign={'center'} padding={'0 32px'} width={'420px'}>
        <TYPE.large>Success!</TYPE.large>
        <TYPE.gray>
          You have successfully deployed your mappable contract on mainchain. Please save the following information and
          continue to next step:
        </TYPE.gray>
      </Box>

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
      <Box width={'100%'} padding={'0 32px 32px 32px'}>
        <Button>Go to Next Step</Button>
      </Box>
    </Messagebox>
  )
}
