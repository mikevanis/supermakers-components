import React from 'react';
import SmModeSelector from '../ui/SmModeSelector';
import SmWireSketch from '../ui/SmWireSketch';
import SmModal from '../ui/SmModal';
import ReadController from '../read/ReadController';
import LightReadStep1Led from '../animations/LightReadStep1Led';
import LightReadStep2Battery from '../animations/LightReadStep2Battery';
import LightReadStep3Led from '../animations/LightReadStep3Led';
import LightReadStep4Circuit from '../animations/LightReadStep4Circuit';
import LightReadStep5Circuit from '../animations/LightReadStep5Circuit';

import readmodal from '../assets/svgs/read-modal.svg';

const readSteps = [
  {
    text: "So what are we making here? We will build an electronic circuit to light this LED!",
    svg: LightReadStep1Led,
  },
  {
    text: "Let’s start with a battery. A battery can store energy. Like a pump it can push energy through a circuit. If you have a close look at the battery you will find a little plus on one end and a minus on the other end. The plus stands for positive charge. The minus stands for negative charge.",
    svg: LightReadStep2Battery,
  },
  {
    text: "This is an LED which is a tiny connected in ive sides by checking the length of its legs. The longer leg is always positive. The shorter leg is always negative.",
    svg: LightReadStep3Led,
  },
  {
    text: "You can connect the battery with the LED using electrical cables. Those special cables have a rubber coating on the outside and metal wire on the inside. Metal is a material that is conductive which means it allows the electricity to flow.",
    svg: LightReadStep4Circuit,
  },
  {
    text: "To turn the light off, we need to break the circuit and add a switch. It does not matter where the switch goes. The effect is the same.",
    svg: LightReadStep5Circuit,
  },
  {
    text: "The battery pushes the electricity along the wires from the positive terminal, through the LED and back to the negative terminal. This creates a circuit.",
    svg: () => {return null},
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
    this.onReadNext = this.onReadNext.bind(this);
    this.onReadBack = this.onReadBack.bind(this);

    this.state = {
      mode: 'read',
      isReadModalVisible: false,
      readIndex: 5,
    };
  }

  onModeClick(mode) {
    this.setState({
      mode: mode,
      isReadModalVisible: false,
    });
  }

  onReadComplete() {

  }

  onReadNext() {
    console.log("Next");
    if (this.state.readIndex === readSteps.length-1) {
      // Read complete! Show modal.
      console.log("Read complete!");
      this.setState({isReadModalVisible: true});
    }
    else {
      this.setState({
        readIndex: this.state.readIndex + 1,
      });
    }
  }

  onReadBack() {
    if (this.state.readIndex === 0) {
      // Back to menu??
    }
    else {
      this.setState({
        readIndex: this.state.readIndex - 1,
      });
    }
  }

  render() {
    return(
      <React.Fragment>
        <SmModeSelector onModeClick={this.onModeClick}/>
        {this.state.isReadModalVisible &&
          <SmModal bgcolor="rgba(24,42,116,0.8)">
            <img src={readmodal} alt="Now go make it yourself!" width="90%"/>
          </SmModal>
        }
        {this.state.mode === 'read' &&
          <ReadController
            steps={readSteps}
            title={"Hello Level 2"}
            onNext={this.onReadNext}
            onBack={this.onReadBack}
            index={this.state.readIndex}
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
