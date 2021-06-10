import Reeact from 'react'
import MessageBox from './MessageBox'
import { Box } from '@material-ui/core'
import { TYPE } from '../../theme/index'
import Button from '../Button/Button'
import OutlineButton from '../Button/OutlineButton'
import useModal from '../../hooks/useModal'

interface Props {
  children?: React.ReactNode
  type: 'success' | 'failure' | 'support' | 'network'
  header: string
  action?: string
  message?: string
}
export default function SimpleMessageBox(props: Props) {
  const { header, action, type, children } = props
  const { hideModal } = useModal()

  return (
    <MessageBox type={'success'} header={header}>
      <Box marginBottom={'28px'} textAlign={'center'} padding={'0 32px'} width={'420px'}>
        <TYPE.large>{header}</TYPE.large>
      </Box>
      {children}
      <Box padding="0 auto 28px" display={'flex'} justifyContent={'space-around'} width={384}>
        <OutlineButton width="180px" primary onClick={hideModal}>
          Close
        </OutlineButton>
        {type === 'failure' && action && <Button width="180px">{action}</Button>}
      </Box>
    </MessageBox>
  )
}
