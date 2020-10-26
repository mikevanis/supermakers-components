import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SmSliderButton from '../ui/SmSliderButton';
import SmButton from '../ui/SmButton';
import woopCharacter from '../assets/svgs/woop-character.svg';

const modalStyles = {
  margin: 'auto',
  alignSelf: "center",
};

export default function WoopModal(props) {
  if (props.isOpen) {
    return(
      <Box
        bgcolor="rgba(4, 191, 138, 0.9)"
        position="absolute"
        zIndex="100"
        width="100%"
        height="100%"
        style={modalStyles}
      >
        <Box
          zIndex="100"
          p="50px"
          display="flex"
          flexDirection="column"
          alignContent="space-between"
        >
          <Box flexGrow={1} alignSelf="center">
            <img src={woopCharacter} width="100%" alt="" style={{margin: "auto"}}/>
          </Box>
          <Box m="20px 0">
            <SmSliderButton
              clickable
              fullWidth
              onSwiped={props.onNextLevel}
            >
              Next Level
            </SmSliderButton>
          </Box>
          <Box m="20px 0">
            <SmButton
              onClick={props.onBack}
              color="blue"
            >
              I want to keep exploring this
            </SmButton>
          </Box>
        </Box>
      </Box>
    );
  } else {
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}
