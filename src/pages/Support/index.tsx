import React from 'react'
import { Box } from '@material-ui/core'
import AppBody from 'pages/AppBody'
import { ReactComponent as SupportIcon } from 'assets/images/support_icon.svg'
import { TYPE } from 'theme/index'
import { ExternalLink } from 'components/Link/index'

export default function Support() {
  return (
    <AppBody width={620} height={280}>
      <Box display="flex" justifyContent="center" mt="72px" mb="20px">
        <SupportIcon />
      </Box>
      <TYPE.body textAlign="center" width="300px" margin="0 auto">
        You can email to
        <ExternalLink href="mailto:name@email.com:contact@chainswap.co">
          <TYPE.primary>contact@chainswap.co</TYPE.primary>
        </ExternalLink>
        for technical issues and we will get back to you as soon as we can
      </TYPE.body>
    </AppBody>
  )
}
