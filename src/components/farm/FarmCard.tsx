import React from 'react'
import { Card, CardHeader, CardContent, CardActions, IconButton, Theme, Box, Collapse } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles, createStyles } from '@material-ui/styles'
import { TYPE } from 'theme/index'
import TextButton from 'components/Button/TextButton'
import OutlineButton from 'components/Button/OutlineButton'
import clsx from 'clsx'
import Divider from 'components/Divider/Divider'

// dummyData
import { ReactComponent as BscIcon } from 'assets/images/bsc.svg'
import { Type } from 'react-feather'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 420,
      backgroundColor: theme.bgColor.bg1,
      borderRadius: 32,
      border: `1px solid ${theme.bgColor.bg3}`,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
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

export default function FarmCard() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardHeader avatar={<BscIcon />} title="Matter Token Pool" />
      <CardContent>
        <Box display="flex" alignItems="flex-end">
          <TYPE.extremeLarge>0.000</TYPE.extremeLarge>
          <TYPE.body>Token earned</TYPE.body>
          <TextButton primary>Claim Reward</TextButton>
        </Box>
        <Box display="flex">
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
        <CardContent>Card Content</CardContent>
      </Collapse>
    </Card>
  )
}
