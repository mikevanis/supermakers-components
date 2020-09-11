import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SmSliderButton from '../ui/SmSliderButton';
import MenuItemAccordion from './MenuItemAccordion';
import ladder from '../assets/svgs/menu/ladder.svg';
import badge from '../assets/svgs/menu/badge.svg';

class HomeItem extends React.Component {

  renderItem() {
    return(
      <Box
        bgcolor={this.props.state === "done" ? "none" : this.props.bgcolor}
        border={this.props.state === "done" ? "1px solid #182a74" : ""}
        display="flex"
        flexDirection="column"
        p="20px 20px 0 20px"
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
            <img src={this.props.state === "done" ? badge : this.props.svg} alt=""/>
          </Box>
        </Box>

        {(this.props.state === "locked" || this.props.state === "unlocked") &&
          <SmSliderButton
            clickable
            small
            onSlide={this.props.onClick}
            disabled={this.props.state === "locked" ? true : false}
          >
            Go!
          </SmSliderButton>
        }
        {this.props.state === "done" &&
          <Typography style={{color: "#182a74", fontSize: 26, textAlign: "center", marginBottom: "-6px"}}>
            Done!
          </Typography>
        }
        <MenuItemAccordion
          title={this.props.title}
          body={this.props.body}
        />
      </Box>
    );
  }

  render() {
    return this.renderItem();
  }
}

export default HomeItem;
