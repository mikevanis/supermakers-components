import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import WelcomeIntroAnimation from '../animations/WelcomeIntroAnimation';

class Intro extends React.Component {

  render() {
    return (
      <Box
        bgcolor="#04BF8A"
        display="flex"
        flexDirection="column"
        flexGrow={1}
      >
        <Box m="50px">
          <Typography
            variant="h4"
            align="center"
            style={{
              color: "#182a74",
              fontSize: 40,
            }}
          >
            Build sustainable worlds
          </Typography>
        </Box>
        <Box m="0px 60px 60px 60px" flexGrow={1} ref={this.boxRef}>
          <WelcomeIntroAnimation next={this.props.onNext}/>
        </Box>
      </Box>
    );
  }
}

export default Intro;
