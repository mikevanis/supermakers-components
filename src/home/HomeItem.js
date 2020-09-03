import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import SmSliderButton from '../ui/SmSliderButton';
import ladder from '../assets/svgs/menu/ladder.svg';
import arrowUp from '../assets/svgs/menu/arrow-up.svg';
import arrowDown from '../assets/svgs/menu/arrow-down.svg';
import arrowBack from '../assets/svgs/menu/arrow-back.svg';

class HomeItem extends React.Component {

  renderLocked() {
    return(
      <Box>

      </Box>
    );
  }

  renderUnlocked() {
    return(
      <Box
        bgcolor={this.props.bgcolor}
        display="flex"
        flexDirection="column"
        p="20px"
      >
        <Box display="flex" alignItems="flex-start">
          <Box m="5px 10px 0 0">
            <img src={ladder} alt=""/>
          </Box>
          <Box>
            <Typography style={{color: "#182a74", fontSize: 16}}>
              Level: {this.props.levelIndex}
            </Typography>
          </Box>
        </Box>

        <Box height="180px" style={{position: "relative"}}>
          <Box style={{
              margin: "0",
              position: "absolute",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)"
            }}>
            <img src={this.props.svg} alt=""/>
          </Box>
        </Box>

        <SmSliderButton
          clickable
          small
          onSlide={this.props.onClick}
        >
          Go!
        </SmSliderButton>
        <Accordion>
          <AccordionSummary expandIcon={<img src={arrowUp} alt=""/>}>
            <Typography style={{color: "#182a74", fontSize: 26}}>
              {this.props.title}
            </Typography>
            <Typography align="right" style={{color: "#182a74", fontSize: 26}}>
              . . .
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{color: "#182a74", fontSize: 16}}>
              {this.props.body}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    );
  }

  render() {
    if (this.props.state === "unlocked") {
      return this.renderUnlocked();
    } else {
      return this.renderLocked();
    }
  }
}

export default HomeItem;
