import React from 'react'
import { Card, CardHeader, CardContent } from '@material-ui/core'
import { TYPE } from 'theme/index'
import TextButton from 'components/Button/TextButton'
import OutlineButton from 'components/Button/OutlineButton'

// dummyData
import { ReactComponent as BscIcon } from 'assets/images/bsc.svg'

export default function FarmCard() {
  return (
    <Card>
      <CardHeader avatar={<BscIcon />}></CardHeader>
      <CardContent>
        <TYPE.extremeLarge>0.000</TYPE.extremeLarge>
        <TYPE.body>Token earned</TYPE.body>
        <TextButton primary>Claim Reward</TextButton>
        <OutlineButton>Stake</OutlineButton>
        <OutlineButton>UnStake</OutlineButton>
      </CardContent>
      <CardActions disableSpacing>
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
    </Card>
  )
}
