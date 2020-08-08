import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import WelcomeStep1Character from '../animations/WelcomeStep1Character';
import SmSliderButton from '../ui/SmSliderButton';

export default function WelcomeStep1(props) {
  return(
    <Box
      bgcolor="#FFDC20"
      flexGrow={1}
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      p="24px 62px 62px 62px"
    >
        <Box>
          <WelcomeStep1Character/>
        </Box>
        <Box display="flex">
          <Box p="0px 54px 0px 0px" flex="1">
            <Typography variant="h1" style={{color: "#182a74", fontSize: 80}}>Super Makers</Typography>
          </Box>
          <Box flex="1">
            <Typography variant="h4" style={{color: "#182a74", fontSize: 30}}>
              Super Makers is a series of projects and games.<br/><br/>
              We cross between virtual and physical sustainable worlds.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box flex="1">
            <Typography style={{color: "#FF6D00", fontSize: 20}}>
              All you need is your brain...
            </Typography>
          </Box>
          <Box flex="1">
            <SmSliderButton clickable fullWidth onSwiped={props.onNext}>Start Building!</SmSliderButton>
          </Box>
        </Box>
    </Box>
  )
};
