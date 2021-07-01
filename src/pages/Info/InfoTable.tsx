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
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import Currency from 'models/currency'

interface RowProps {
  main: (JSX.Element | string | number)[]
  sub: (JSX.Element | string | number)[][]
}

interface Props {
  headers: string[]
  subHeaders: string[]
  rows: RowProps[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'transparent',
      '& .MuiTable-root': {
        borderCollapse: 'separate',
        borderSpacing: '0 3px',
      },
      '& .MuiTableCell-root': {
        border: 'none',
        padding: 12,
      },
    },
    head: {
      '& .MuiTableCell-head': {
        fontSize: 12,
        color: theme.textColor.text3,
      },
    },
  })
)

const useRowStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.bgColor.bg2,
      '&:hover': { backgroundColor: theme.bgColor.bg3 },
      '& td:first-child': {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderBottomLeftRadius: theme.shape.borderRadius,
      },
      '& td:last-child': {
        borderTopRightRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
      },
    },
    icon: {
      color: theme.textColor.text3,
      fontSize: 13,
      '&:hover': {
        color: theme.textColor.text1,
      },
    },
    collapsible: {
      backgroundColor: theme.bgColor.bg2,
      width: '800px',
      '& .MuiTableCell-head': {
        fontSize: 12,
        color: theme.textColor.text3,
      },
      '& .MuiTableRow-root': {
        width: '100%',
      },
      '& .MuiTableCell-root': {
        width: '100%',
        borderRadius: theme.shape.borderRadius,
        padding: 6,
      },
      '& .MuiCollapse-container': {
        width: '100%',
      },
      '& .MuiCollapse-wrapper': {
        width: '100%',
      },
      '& .MuiCollapse-wrapperInner': {
        width: '100%',
      },
      '& .MuiCollapse-wrapperInner table': {},
    },
  })
)

function Row(props: { row: RowProps; headers: string[] }) {
  const { row, headers } = props
  const [open, setOpen] = React.useState(false)
  const classes = useRowStyles()

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        {row.main.map((cell) => (
          <TableCell align="left">{cell}</TableCell>
        ))}
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            <ArrowForwardIosIcon className={classes.icon} />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow className={classes.collapsible}>
        <TableCell style={{ padding: open ? 6 : 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableCell>{header}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {row.sub.map((row, idx) => (
                  <TableRow key={row[0].toString() + idx}>
                    {row.map((data, idx) => (
                      <TableCell colSpan={1} key={idx}>
                        {data}
                      </TableCell>
                    ))}
                    <TableCell>
                      <Box width="120px" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default function CollapsibleTable(props: Props) {
  const classes = useStyles(props)
  const { rows, headers, subHeaders } = props

  return (
    <TableContainer classes={{ ...classes }} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead className={classes.head}>
          <TableRow>
            {headers.map((header) => (
              <TableCell>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <Row key={i} row={row} headers={subHeaders} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
