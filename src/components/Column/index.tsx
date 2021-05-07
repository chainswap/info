import { styled } from '@material-ui/styles'

const Column = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
})

export const ColumnCenter = styled(Column)({
  width: '100%',
  alignItems: 'center',
})

export default Column
