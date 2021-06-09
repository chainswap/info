import { TableContainer, TableHead, TableCell, TableRow, TableBody, makeStyles } from '@material-ui/core'
import { TYPE } from '../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'table',
    background: theme.gradient.gradient1,
    border: '1px solid ' + theme.textColor.text5,
    borderRadius: '14px',
    '& .MuiTableCell-root': {
      fontSize: '12px',
      borderBottom: 'none',
      padding: '14px',
    },
  },
  tableHeader: {
    '& .MuiTableCell-root': {
      padding: '8px 12px',
      borderBottom: '1px solid ' + theme.textColor.text5,
    },
  },
}))

export default function Table({ header, rows }: { header: string[]; rows: (string | number | JSX.Element)[][] }) {
  const classes = useStyles()
  return (
    <TableContainer className={classes.root}>
      <TableHead className={classes.tableHeader}>
        <TableRow>
          {header.map((string) => (
            <TableCell>
              <TYPE.smallGray>{string}</TYPE.smallGray>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, idx) => (
          <TableRow key={row[0].toString() + idx}>
            {row.map((data) => (
              <TableCell>{data}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  )
}
