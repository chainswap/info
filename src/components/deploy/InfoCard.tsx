import React from 'react'
import { DeployStatusType } from '../../pages/Deploy/index'
import { Box } from '@material-ui/core'
import theme, { TYPE } from '../../theme/index'
import Divider from '../Divider/Divider'
import Checkbox from '../Checkbox/Checkbox'

interface Props {
  toggleConfirm?: () => void
  confirmText?: string
  status?: DeployStatusType
  data: Object
}

export default function InfoCard(props: Props) {
  const { data, status, toggleConfirm, confirmText } = props
  return (
    <>
      <Box border={'1px solid' + theme.bgColor.bg4} borderRadius={22} margin={'0 32px'}>
        <Box display={'grid'} gridGap={'16px'} width={'100%'} padding={'16px 24px'}>
          <Box display={'grid'} gridGap={'8px'}>
            {Object.keys(data).map((key, i) => (
              <Box key={i} display={'flex'} justifyContent={'space-between'}>
                <TYPE.smallGray>{key}:</TYPE.smallGray>
                <TYPE.small>{data[key as keyof typeof data]}</TYPE.small>
              </Box>
            ))}
          </Box>
        </Box>

        {status && confirmText && toggleConfirm && (
          <>
            <Divider />
            <Box display="flex" padding={'13px 24px 16px 24px'}>
              <Checkbox checked={status.confirmed} onChange={toggleConfirm} />
              <TYPE.mediumGray>{confirmText}</TYPE.mediumGray>
            </Box>
          </>
        )}
      </Box>
    </>
  )
}
