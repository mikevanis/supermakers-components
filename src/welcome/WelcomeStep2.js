import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import WelcomeStep2Wind from '../animations/WelcomeStep2Wind';
import SmSliderButton from '../ui/SmSliderButton';

export default function WelcomeStep2(props) {
  return(
    <Box
      bgcolor="#FFDC20"
      flexGrow={1}
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      p="24px 62px 62px 62px"
    >
      <Box m="60px 0 0 0">
        <Typography variant="h4" style={{color: "#182a74", fontSize: 30}}>
          Our first series of games is dedicated to renewable energies.
          We will explore different types of renewable energies used all over
          the world and focus on this particular one:
        </Typography>
      </Box>
      <Box>
        <Typography variant="h1" style={{color: "#182a74", fontSize: 80}}>Wind!</Typography>
      </Box>
      <Box>
        <WelcomeStep2Wind/>
      </Box>
      <Box>
        <SmSliderButton clickable fullWidth onSwiped={props.onNext}>
          Wind? What are we going to do with wind?
        </SmSliderButton>
      </Box>
    </Box>
  )
};
