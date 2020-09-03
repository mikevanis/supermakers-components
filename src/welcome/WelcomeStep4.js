import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import WelcomeStep4Button from '../animations/WelcomeStep4Button';

export default function WelcomeStep3(props) {
  return(
    <Box
      bgcolor="#FFDC20"
      flexGrow={1}
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      p="24px 62px 62px 62px"
    >
      <Box m="40px 0 0 0">
        <Typography variant="h4" style={{color: "#182a74", fontSize: 30}}>
          Most games will need nothing more or less than your brain and
          creativity! However, we did promise to break the boundaries of your
          screen! In some games you will need things like paper, pens and
          scissors. At the start of each game, we’ll tell you what you need!
        </Typography>
      </Box>
      <Box>
        <WelcomeStep4Button next={props.onNext}/>
      </Box>
    </Box>
  )
};
