import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typist from 'react-typist';
import SmProgressBar from '../ui/SmProgressBar';
import SmReadPanel from '../ui/SmReadPanel';
import SmButton from '../ui/SmButton';
import SmSliderButton from '../ui/SmSliderButton';

class ReadController extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <Box
        id="read-controller"
        flexGrow={1}
        display="flex"
        flexDirection="column"
        bgcolor="#ffafa6"
      >
        <SmProgressBar
          progress={
            ((this.props.index + 1) / this.props.steps.length * 100) + '%'
          }
        />
        <SmReadPanel index={this.props.index} title={this.props.title}>
          <Box
            display="flex"
            flexDirection="column"
            alignContent="space-between"
            height="100%"
          >
            <Box flex="1" maxWidth="578px">
              {this.props.steps[this.props.index].text}
            </Box>
            <Box display="flex" justifyContent="center">
              {this.props.steps[this.props.index].svg()}
            </Box>
          </Box>
        </SmReadPanel>
        <Box
          display="flex"
          p="38px"
          height="45px"
        >
          {this.props.index !== 0 &&
            <SmButton
              color='blue'
              onClick={this.props.onBack}
            >
              Back
            </SmButton>
          }
          <Box flexGrow={1}></Box>
          <Box>
            <SmSliderButton
              clickable
              onSwiped={this.props.onNext}
            >
              Next
            </SmSliderButton>
          </Box>
        </Box>
      </Box>
    );
  }
}

ReadController.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object).isRequired,
  onBack: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default ReadController;
