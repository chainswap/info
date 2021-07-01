import React from 'react'
import {
  Theme,
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

interface RowProps {
  main: (JSX.Element | string | number)[]
  sub?: (JSX.Element | string | number)[][]
}

interface Props {
  headers: string[]
  subHeaders?: string[]
  rows: RowProps[]
  collapsible?: boolean
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

function Row(props: { row: RowProps; subHeaders?: string[]; collapsible?: boolean }) {
  const { row, subHeaders, collapsible } = props
  const [open, setOpen] = React.useState(false)
  const classes = useRowStyles()

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        {row.main.map((cell) => (
          <TableCell align="left">{cell}</TableCell>
        ))}
        {collapsible && (
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              <ArrowForwardIosIcon className={classes.icon} />
            </IconButton>
          </TableCell>
        )}
      </TableRow>
      {collapsible && subHeaders && (
        <TableRow className={classes.collapsible}>
          <TableCell style={{ padding: open ? 6 : 0 }} colSpan={8}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table>
                <TableHead>
                  <TableRow>
                    {subHeaders.map((header) => (
                      <TableCell>{header}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.sub?.map((row, idx) => (
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
      )}
    </React.Fragment>
  )
}

export default function InfoTable(props: Props) {
  const classes = useStyles(props)
  const { rows, headers, subHeaders, collapsible } = props

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
            <Row key={i} row={row} subHeaders={subHeaders} collapsible={collapsible} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
