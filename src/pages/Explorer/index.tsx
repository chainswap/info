import React, { useMemo, useState } from 'react'
import { Box } from '@material-ui/core'
import AppBody from 'pages/AppBody'
import Pager from 'components/Pager/Pager'
import InfoTable from 'components/info/InfoTable'
import { CurrencyList, ChainList } from 'data/dummyData'
import Image from 'components/Image/Image'
import { TYPE } from 'theme/index'

enum Status {
  SUCCESS = 'success',
  PENDING = 'pending',
}

export default function Explorer() {
  const [totalPage] = useState(100)
  const [page] = useState(1)

  const rowData = useMemo(() => {
    return dummyData.map(({ currency, send, receive, from, to, time, status }) => {
      return {
        main: [
          <Box display="flex">
            <Image src={currency.logo} alt={`${currency.logo} logo`} />
            <Box ml="5px">
              <TYPE.small>send: {`${send} ${currency.symbol}`}</TYPE.small>
              <TYPE.small>receive: {`${receive} ${currency.symbol}`}</TYPE.small>
            </Box>
          </Box>,
          <Box display="flex">
            <Image src={from.logo} alt={`${from.logo} logo`} />
            <Box ml="5px">
              <TYPE.small> {from.symbol}</TYPE.small>
              <TYPE.small>{from.address}</TYPE.small>
            </Box>
          </Box>,
          <Box display="flex">
            <Image src={to.logo} alt={`${to.logo} logo`} />
            <Box ml="5px">
              <TYPE.small>{to.symbol}</TYPE.small>
              <TYPE.small>{to.address}</TYPE.small>
            </Box>
          </Box>,
          <TYPE.small>{time}</TYPE.small>,
          <>
            {status === Status.SUCCESS ? (
              <TYPE.highlight>success</TYPE.highlight>
            ) : (
              <TYPE.smallGray>pending</TYPE.smallGray>
            )}
          </>,
        ],
      }
    })
  }, [])

  return (
    <>
      <AppBody title="Explorer" titleCenter width={880} height={492}>
        <Box padding="0 20px 40px">
          <InfoTable headers={['Send', 'From', 'to', 'Time', 'Status']} rows={rowData} />
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

const dummyData = [
  {
    currency: CurrencyList[0],
    send: 0.04,
    receive: 0.04,
    from: ChainList[0],
    to: ChainList[1],
    time: '4 minutes ago',
    status: Status.PENDING,
  },
  {
    currency: CurrencyList[1],
    send: 0.08,
    receive: 0.08,
    from: ChainList[2],
    to: ChainList[3],
    time: '9 minutes ago',
    status: Status.SUCCESS,
  },
  {
    currency: CurrencyList[0],
    send: 0.04,
    receive: 0.04,
    from: ChainList[0],
    to: ChainList[1],
    time: '4 minutes ago',
    status: Status.PENDING,
  },
  {
    currency: CurrencyList[1],
    send: 0.08,
    receive: 0.08,
    from: ChainList[2],
    to: ChainList[3],
    time: '9 minutes ago',
    status: Status.SUCCESS,
  },
  {
    currency: CurrencyList[0],
    send: 0.04,
    receive: 0.04,
    from: ChainList[0],
    to: ChainList[1],
    time: '4 minutes ago',
    status: Status.PENDING,
  },
  {
    currency: CurrencyList[1],
    send: 0.08,
    receive: 0.08,
    from: ChainList[2],
    to: ChainList[3],
    time: '9 minutes ago',
    status: Status.SUCCESS,
  },
  {
    currency: CurrencyList[0],
    send: 0.04,
    receive: 0.04,
    from: ChainList[0],
    to: ChainList[1],
    time: '4 minutes ago',
    status: Status.PENDING,
  },
  {
    currency: CurrencyList[1],
    send: 0.08,
    receive: 0.08,
    from: ChainList[2],
    to: ChainList[3],
    time: '9 minutes ago',
    status: Status.SUCCESS,
  },
  {
    currency: CurrencyList[0],
    send: 0.04,
    receive: 0.04,
    from: ChainList[0],
    to: ChainList[1],
    time: '4 minutes ago',
    status: Status.PENDING,
  },
  {
    currency: CurrencyList[1],
    send: 0.08,
    receive: 0.08,
    from: ChainList[2],
    to: ChainList[3],
    time: '9 minutes ago',
    status: Status.SUCCESS,
  },
]
