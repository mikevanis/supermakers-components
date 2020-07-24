import React from 'react';
import SmModeSelector from '../ui/SmModeSelector';
import SmWireSketch from '../ui/SmWireSketch';
import ReadController from '../read/ReadController';

const steps = [
  {
    text: "Bla bla this is some text",
  },
  {
    text: "Bla bla this is some more text",
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
            steps={steps}
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
