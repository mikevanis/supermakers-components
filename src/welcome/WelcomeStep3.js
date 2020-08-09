import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import WelcomeStep3Diagram from '../animations/WelcomeStep3Diagram';
import SmSliderButton from '../ui/SmSliderButton';

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
          We will build electric circuits, design a lamp, make our very own
          wind energy station, check how much energy it is creating, and test
          if it is powering our lamp!
        </Typography>
      </Box>
      <Box>
        <WelcomeStep3Diagram/>
      </Box>
      <Box>
        <SmSliderButton clickable fullWidth onSwiped={props.onNext}>
          Awesome! How does it work?
        </SmSliderButton>
      </Box>
    </Box>
  )
};
