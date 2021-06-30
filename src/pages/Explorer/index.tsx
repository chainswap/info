import React, { useMemo, useState } from 'react'
import { Box } from '@material-ui/core'
import Table from 'components/Table/Table'
import AppBody from 'pages/AppBody'
import Pager from 'components/Pager/Pager'

const dummyTableData = [
  {
    send: 'ETH',
    from: 'ETH',
    to: 'BSC',
    time: '2021-11-11',
    status: 'success',
  },
  {
    send: 'ETH',
    from: 'ETH',
    to: 'BSC',
    time: '2021-11-11',
    status: 'success',
  },
]

export default function Explorer() {
  const [totalPage] = useState(100)
  const [page] = useState(1)

  const tableRows = useMemo(() => {
    return dummyTableData.map(({ send, from, to, time, status }) => [send, from, to, time, status])
  }, [])

  return (
    <>
      <AppBody title="Explorer" titleCenter width={880} height={492}>
        <Box padding="0 20px 40px">
          <Table header={['Send', 'From', 'to', 'Time', 'Status']} rows={tableRows} />
        </Box>
      </AppBody>
      <Box position="relative" width="880px" mt="15px">
        <Box position="absolute" right="10px">
          <Pager current={page} total={totalPage} />
        </Box>
      </Box>
    </>
  )
}
