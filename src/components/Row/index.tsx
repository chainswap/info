import { styled } from '@material-ui/styles'
import { Box } from '@material-ui/core'

interface Props {
  width?: string
  align?: string
  justify?: string
  padding?: string
  border?: string
  borderRadius?: string
}

const Row = styled(Box)({
  width: (props: Props) => props.width || '100%',
  display: 'flex',
  alignItems: (props: Props) => props.align || 'center',
  justifyContent: (props: Props) => props.justify || 'flex-start',
  padding: (props: Props) => props.padding || 0,
  border: (props: Props) => props.border,
  borderRadius: (props: Props) => props.borderRadius,
})

export const RowBetween = styled(Row)({
  justifyContent: 'space-between',
})

export const RowFixed = styled(Row)({
  width: 'fit-content',
})

export default Row
