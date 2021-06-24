import React, { useCallback } from 'react'
import { Box } from '@material-ui/core'
import theme, { TYPE } from '../../theme/index'
import Divider from '../Divider/Divider'
import Checkbox from '../Checkbox/Checkbox'
import { Text } from 'rebass'
import TextButton from '../Button/TextButton'
import LogoText from '../LogoText/LogoText'
import Copy from 'components/Copy/Copy'

interface Props {
  toggleConfirm?: () => void
  confirmText?: string
  confirmed?: boolean
  data: Object
  header?: string
  logo?: string
  editable?: boolean
  onEdit?: () => void
  copyable?: boolean
}

export default function InfoCard(props: Props) {
  const { data, confirmed, toggleConfirm, confirmText, header, editable, logo, copyable, onEdit } = props

  const getHeader = useCallback(() => {
    if (logo && header) {
      return <LogoText size="small" logo={logo} text={header} />
    }

    if (header) {
      return <Text>{header} </Text>
    }
  }, [logo, header])

  return (
    <>
      <Box border={'1px solid' + theme.bgColor.bg4} borderRadius={22}>
        {(header || editable) && (
          <Box display="flex" justifyContent="space-between" alignItems="center" padding="12px 24px 0 24px">
            {getHeader()}
            {editable && (
              <TextButton fontSize="14px" onClick={onEdit} primary>
                Edit
              </TextButton>
            )}
          </Box>
        )}

        <Box display="grid" gridGap="16px" width="100%" padding="16px 24px">
          {Object.keys(data).map((key, i) => (
            <Box key={i} display="flex" justifyContent="space-between">
              <TYPE.smallGray>{key}:</TYPE.smallGray>
              <Box display="flex">
                <TYPE.small marginRight={copyable ? '8px' : '0px'}>{data[key as keyof typeof data]}</TYPE.small>
                {copyable && <Copy toCopy={`${data[key as keyof typeof data]}`} />}
              </Box>
            </Box>
          ))}
        </Box>

        {confirmText && (
          <>
            <Divider />
            <Box display="flex" padding="13px 24px 16px 24px">
              <Checkbox checked={!!confirmed} onChange={toggleConfirm} />
              <TYPE.mediumGray>{confirmText}</TYPE.mediumGray>
            </Box>
          </>
        )}
      </Box>
    </>
  )
}
