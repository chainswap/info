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
      maxHeight: 380,
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
        backgroundColor: theme.bgColor.bg1,
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

function Row(props: { row: RowProps; subHeaders?: string[]; collapsible?: boolean; colSpan: number }) {
  const { row, subHeaders, collapsible, colSpan } = props
  const [open, setOpen] = React.useState(false)
  const classes = useRowStyles()

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        {row.main.map((cell, idx) => (
          <TableCell key={idx} align="left">
            {cell}
          </TableCell>
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
          <TableCell style={{ padding: open ? 6 : 0 }} colSpan={colSpan + 1}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table>
                <TableHead>
                  <TableRow>
                    {subHeaders.map((header, idx) => (
                      <TableCell key={idx}>{header}</TableCell>
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
    <TableContainer className={classes.root} component={Paper}>
      <Table stickyHeader>
        <TableHead className={classes.head}>
          <TableRow>
            {headers.map((header, idx) => (
              <TableCell key={idx}>{header}</TableCell>
            ))}
            {collapsible && <TableCell />}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <Row key={idx} row={row} subHeaders={subHeaders} collapsible={collapsible} colSpan={headers.length} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
