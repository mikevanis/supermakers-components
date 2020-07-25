import React from 'react';
import SmModeSelector from '../ui/SmModeSelector';
import SmWireSketch from '../ui/SmWireSketch';
import ReadController from '../read/ReadController';
import LightReadStep1Led from '../animations/LightReadStep1Led';

const readSteps = [
  {
    text: "So what are we making here? We will build an electronic circuit to light this LED!",
    svg: LightReadStep1Led,
  },
  {
    text: "Let’s start with a battery. A battery can store energy. Like a pump it can push energy through a circuit. If you have a close look at the battery you will find a little plus on one end and a minus on the other end. The plus stands for positive charge. The minus stands for negative charge.",
  },
  {
    text: "Bla bla this is another bit of text",
  },
  {
    text: "You guessed it. Some more text",
  },
  {
    text: "Bla bla this is some text",
  },
];

const playSteps = [
  {
    text: "Use the pen tool to connect the battery with the LED. Push the test button when you are ready.",
  },
];

class LightLevel extends React.Component {
  constructor(props) {
    super(props);

    this.onModeClick = this.onModeClick.bind(this);

    this.state = {
      mode: 'read',
    };
  }

  onModeClick(mode) {
    this.setState({mode: mode});
  }

  render() {
    return(
      <React.Fragment>
        <SmModeSelector onModeClick={this.onModeClick}/>
        {this.state.mode === 'read' &&
          <ReadController
            steps={readSteps}
            title={"Hello Level 2"}
            onBack={() => {console.log("BACK!")}}
            onComplete={() => {console.log("Complete!")}}
          />
        }
        {this.state.mode === 'play' &&
          <SmWireSketch/>
        }
      </React.Fragment>
    );
  }
}

export default LightLevel;
