import { Paper, styled } from '@material-ui/core'
import { Divider } from '../../components/Divider/Divider'

const Container = styled(Paper)(({ theme }) => ({
  borderColor: theme.bgColor.bg4,
  background: 'transparent',
  borderRadius: '10px',
}))

export default function DividedCard({
  top,
  mid,
  bottom,
}: {
  top?: JSX.Element
  mid?: JSX.Element
  bottom?: JSX.Element
}) {
  return (
    <Container variant="outlined" square={false}>
      {top}
      {mid && (
        <>
          <Divider />
          {mid}
        </>
      )}
      {bottom && (
        <>
          <Divider />
          {bottom}
        </>
      )}
    </Container>
  )
}
