import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import SmProgressBar from '../ui/SmProgressBar';
import SmReadPanel from '../ui/SmReadPanel';
import SmButton from '../ui/SmButton';
import SmSliderButton from '../ui/SmSliderButton';

class ReadController extends React.Component {
  constructor(props) {
    super(props);

    this.handleNextButton = this.handleNextButton.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);

    this.state = {
      index: 0,
    };
  }

  handleNextButton() {
    console.log("Next");
    if (this.state.index === this.props.steps.length-1) {
      this.props.onComplete();
    }
    else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  }

  handleBackButton() {
    if (this.state.index === 0) {
      this.props.onBack();
    }
    else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  }

  renderButtonBox() {
    if (this.state.index === 0) {
      return(
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="row-reverse"
          p="38px"
        >
          <Box justify="flex-end">
            <SmSliderButton
              clickable
              onSwiped={this.handleNextButton}
            >
              Next
            </SmSliderButton>
          </Box>
        </Box>
      );
    } else {
      return(
        <Box
          display="flex"
          justifyContent="space-between"
          p="38px"
        >
          <SmButton
            color='blue'
            onClick={this.handleBackButton}
          >
            Back
          </SmButton>
          <Box justify="flex-end">
            <SmSliderButton
              clickable
              onSwiped={this.handleNextButton}
            >
              Next
            </SmSliderButton>
          </Box>
        </Box>
      );
    }
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
            ((this.state.index + 1) / this.props.steps.length * 100) + '%'
          }
        />
        <SmReadPanel index={this.state.index} title={this.props.title}>
          {this.props.steps[this.state.index].text}
          <img src={this.props.steps[this.state.index].svg}/>
        </SmReadPanel>
        <Box
          display="flex"
          p="38px"
          height="45px"
        >
          {this.state.index !== 0 &&
            <SmButton
              color='blue'
              onClick={this.handleBackButton}
            >
              Back
            </SmButton>
          }
          <Box flexGrow={1}></Box>
          <Box>
            <SmSliderButton
              clickable
              onSwiped={this.handleNextButton}
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
