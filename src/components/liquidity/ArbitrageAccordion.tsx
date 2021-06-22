import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Box, useTheme } from '@material-ui/core'
import { ChevronDown } from 'react-feather'
import Currency from 'models/currency'
import { TYPE } from '../../theme'
import Image from 'components/Image/Image'
import OutlineButton from 'components/Button/OutlineButton'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    borderRadius: '10px',
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    '&.Mui-expanded': {
      border: '1px solid ' + theme.bgColor.bg4,
      '& .chevron': {
        transform: 'rotate(180deg)',
      },
    },
  },
  summary: {
    backgroundColor: theme.bgColor.bg3,
    borderRadius: '10px',
    padding: '10px 16px',
    overflow: 'hidden',
    '& .MuiAccordionSummary-content': {
      margin: 0,
    },
    '&.Mui-expanded': {
      minHeight: '48px',
      margin: 0,
    },
  },
  details: {
    padding: 0,
  },
}))

export default function ArbitrageAccordion({
  asset,
  data,
  onArbirage,
}: {
  asset: Currency
  data: {
    Chain: string
    Size: string
    Reward: string
  }
  onArbirage: () => void
}) {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Accordion className={classes.root}>
      <AccordionSummary className={classes.summary}>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Box display="flex" alignItems="center" gridGap={5}>
            <Image src={asset.logo}></Image>
            <TYPE.bold>{asset.symbol}</TYPE.bold>
            <ChevronDown className="chevron" width={20} />
          </Box>
          <OutlineButton
            onClick={onArbirage}
            height={28}
            width={85}
            borderRadius="40px"
            color={theme.textColor.text1}
            fontSize="14px"
          >
            Arbitrage
          </OutlineButton>
        </Box>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        <Box display="grid" gridGap="16px" width="100%" padding="16px 0">
          <Box display="grid" gridGap="8px" padding="5px 16px">
            {Object.keys(data).map((key) => (
              <Box display="flex" justifyContent="space-between" key={key}>
                <TYPE.smallGray>{key}</TYPE.smallGray>
                <TYPE.small>{data[key as keyof typeof data]}</TYPE.small>
              </Box>
            ))}
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}
