import React from 'react'
import { Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Currency from 'models/currency'

interface RowProps {
  main: (JSX.Element | string)[]
  sub: (JSX.Element | string)[][]
}

interface Props {
  headers: string[]
  subHeaders: string[]
  rows: RowProps[]
}

const headers = ['Token', 'Symbol', 'Decimals', 'Main Chain', 'Token Address', 'Verify', 'Status']
const subHeaders = ['Support Chain', 'Token contract address', 'Mapping contract address']

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.bgColor.bg2,
    },
  })
)

const useRowStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.bgColor.bg2,
      '& > *': {
        borderBottom: 'unset',
      },
    },
  })
)

function Row(props: { row: RowProps }) {
  const { row } = props
  const [open, setOpen] = React.useState(false)
  const classes = useRowStyles()

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        {row.main.map((cell) => (
          <TableCell align="right">{cell}</TableCell>
        ))}
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    {subHeaders.map((header) => (
                      <TableCell>{header}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.sub.map((row, idx) => (
                    <TableRow key={row[0].toString() + idx}>
                      {row.map((data, idx) => (
                        <TableCell key={idx}>{data}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default function CollapsibleTable(props: Props) {
  const classes = useStyles()
  const { rows } = props

  return (
    <TableContainer classes={{ ...classes }} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <Row key={i} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
