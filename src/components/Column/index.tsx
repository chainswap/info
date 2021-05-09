import { styled, makeStyles } from '@material-ui/styles'
interface Props {
  gap?: string
  justify?: 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'space-between'
  children?: React.ReactNode
}

const useStyles = makeStyles({
  autoColumn: {
    display: 'grid',
    gridAutoRows: 'auto',
    gridRowGap: (props: Props) => props.gap,
    justifyItems: (props: Props) => props.justify,
  },
})

const Column = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
})

export const ColumnCenter = styled(Column)({
  width: '100%',
  alignItems: 'center',
})

export function AutoColumn(props: Props) {
  const classes = useStyles(props)

  return <div className={classes.autoColumn}>{props.children}</div>
}

export default Column
