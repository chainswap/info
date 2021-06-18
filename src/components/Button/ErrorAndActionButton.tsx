import Button from './Button'
import OutlineButton from './OutlineButton'

export default function ErrorAndActionButton({
  error,
  pending,
  onAction,
  actionText,
}: {
  error: string | undefined
  pending: boolean
  onAction: () => void
  actionText: string
}) {
  return (
    <>
      {error || pending ? (
        <OutlineButton primary disabled loading={pending}>
          {pending ? <>Waiting Confirmation</> : error}
        </OutlineButton>
      ) : (
        <Button onClick={onAction}>{actionText}</Button>
      )}
    </>
  )
}
