import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SmSliderButton from '../ui/SmSliderButton';

const modalStyles = {
  margin: 'auto',
  alignSelf: "center",
};

export default function IntermediateModal(props) {
  if (props.isOpen) {
    return(
      <Box
        bgcolor="rgba(0, 0, 0, 0.5)"
        position="absolute"
        zIndex="100"
        width="100%"
        height="100%"
        style={modalStyles}
      >
        <Box
          bgcolor={props.bgcolor}
          zIndex="100"
          p="50px"
          display="flex"
          flexDirection="column"
          m="100px"
        >
          <img src={props.image} alt="" style={{margin: "auto"}}/>
          <Typography style={{fontSize: "40px", color: props.textColor, textAlign: "center", margin: "30px"}}>
            {props.children}
          </Typography>
          <SmSliderButton
            clickable
            fullWidth
            onSwiped={props.onButtonClick}
          >
            {props.buttonText}
          </SmSliderButton>
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
