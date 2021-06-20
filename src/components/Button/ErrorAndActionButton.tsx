import Button from './Button'
import OutlineButton from './OutlineButton'
import { ReactComponent as SuccessIcon } from '../../assets/images/deploy_success.svg'
import Spinner from 'components/Spinner'
import { Text } from 'rebass'

export default function ErrorAndActionButton({
  error,
  pending,
  success,
  onAction,
  actionText,
  pendingText,
  height,
  width,
  disableAction,
}: {
  error?: string | undefined
  pending?: boolean
  success?: boolean
  onAction: () => void
  actionText: string
  pendingText?: string
  height?: string
  width?: string
  disableAction?: boolean
}) {
  return (
    <>
      {error || pending ? (
        <OutlineButton primary disabled height={height} width={width}>
          {pending ? (
            <>
              <Spinner marginRight={16} />
              {pendingText || 'Waiting Confirmation'}
            </>
          ) : (
            error
          )}
        </OutlineButton>
      ) : success ? (
        <OutlineButton disabled height={height} width={width}>
          <Text mr="55px">Success</Text>
          <SuccessIcon />
        </OutlineButton>
      ) : (
        <Button height={height} width={width} onClick={onAction} disabled={disableAction}>
          {actionText}
        </Button>
      )}
    </>
  )
}
