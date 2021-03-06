import React from 'react'
import { Card, CardHeader, CardContent, CardActions, IconButton, Theme, Box, Collapse } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles, createStyles } from '@material-ui/styles'
import { TYPE } from 'theme/index'
import TextButton from 'components/Button/TextButton'
import OutlineButton from 'components/Button/OutlineButton'
import clsx from 'clsx'
import Divider from 'components/Divider/Divider'
import { ReactComponent as BscIcon } from 'assets/images/bsc.svg'

interface Props {
  data: Object
}

// dummyData

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 420,
      backgroundColor: theme.bgColor.bg1,
      borderRadius: 32,
      border: `1px solid ${theme.bgColor.bg3}`,
    },
    expand: {
      color: theme.textColor.text1,
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      // backgroundColor: red[500],
    },
  })
)

export default function FarmCard(props: Props) {
  const classes = useStyles()
  const { data } = props
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardHeader avatar={<BscIcon />} title="Matter Token Pool" />
      <CardContent>
        <Box display="flex" alignItems="flex-end" justifyContent="space-between">
          <TYPE.extremeLarge>0.000</TYPE.extremeLarge>
          <TYPE.body>Token earned</TYPE.body>
          <TextButton primary>Claim Reward</TextButton>
        </Box>
        <Box display="flex" mt="15px">
          <OutlineButton>Stake</OutlineButton>
          <OutlineButton>UnStake</OutlineButton>
        </Box>
      </CardContent>
      <Divider />
      <CardActions disableSpacing>
        <TYPE.small>Statistics</TYPE.small>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Box display="grid" gridGap="16px" width="100%" padding="16px 24px">
            {['apy', 'staked', 'pooled'].map((key, i) => (
              <Box key={i} display="flex" justifyContent="space-between">
                <TYPE.smallGray>{key}:</TYPE.smallGray>
                <Box display="flex">
                  <TYPE.small>{data[key as keyof typeof data]}</TYPE.small>
                </Box>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  )
}
