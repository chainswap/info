import Reeact from 'react'
import MessageBox from './MessageBox'
import { Box } from '@material-ui/core'
import { TYPE } from '../../theme/index'
import Button from '../Button/Button'

interface Props {
  type: 'success' | 'failure'
  children: React.ReactNode
  header: string
  action: string
  message: string
}

export default function DetailedMessagebox(props: Props) {
  const { children, type, header, action, message } = props

  return (
    <MessageBox type={type} header={header} width={'552px'}>
      <Box marginBottom={'28px'} textAlign={'center'} padding={'0 32px'} width={'420px'}>
        <TYPE.large>{header}</TYPE.large>
        <TYPE.gray>{message}</TYPE.gray>
      </Box>
      {children}
      <Box width={'100%'} padding={'0 32px 32px 32px'}>
        <Button>{action}</Button>
      </Box>
    </MessageBox>
  )
}
