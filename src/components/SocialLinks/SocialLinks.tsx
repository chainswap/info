import React from 'react'
import { Box } from '@material-ui/core'
import { ReactComponent as MediumIcon } from 'assets/images/medium.svg'
import { ReactComponent as TwitterIcon } from 'assets/images/twitter.svg'
import { ReactComponent as TelagramIcon } from 'assets/images/telagram.svg'
import { ExternalLink } from '../Link'
import Social from 'constants/social'

export default function SocialLinks() {
  return (
    <Box position="absolute" display="flex" gridColumnGap="40px" bottom="28px" right="60px">
      <ExternalLink href={Social.medium}>
        <MediumIcon />
      </ExternalLink>
      <ExternalLink href={Social.twitter}>
        <TwitterIcon />
      </ExternalLink>
      <ExternalLink href={Social.telegram}>
        <TelagramIcon />
      </ExternalLink>
    </Box>
  )
}
