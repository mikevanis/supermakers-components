import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import WelcomeStep1Character from '../animations/WelcomeStep1Character';
import SmSliderButton from '../ui/SmSliderButton';

export default function WelcomeStep1() {
  return(
    <Box bgcolor="#FFDC20" flexGrow={1} display="flex" flexDirection="column" p="24px 62px 62px 62px">
        <WelcomeStep1Character/>
        <Box display="flex">
          <Box p="0px 54px 0px 0px">
            <Typography variant="h1">Super Makers</Typography>
          </Box>
          <Box>
            <Typography variant="h4">
              Super Makers is a series of projects and games.<br/><br/>
              We cross between virtual and physical sustainable worlds.
            </Typography>
          </Box>
        </Box>
        <Box display="flex">
          <Typography>All you need is your brain...</Typography>
          <SmSliderButton clickable>Start Building!</SmSliderButton>
        </Box>
    </Box>
  )
};
