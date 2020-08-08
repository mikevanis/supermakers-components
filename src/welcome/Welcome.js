import React from 'react';
import Intro from './Intro';
import WelcomeStep1 from './WelcomeStep1';
import WelcomeStep2 from './WelcomeStep2';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);

    this.state = {
      index: 0,
    };
  }

  handleNext() {
    this.setState({index: this.state.index + 1});
  }

  renderStep() {
    switch(this.state.index) {
      case 0:
        return(<Intro onNext={this.handleNext}/>);
        break;
      case 1:
        return(<WelcomeStep1 onNext={this.handleNext}/>);
        break;
      case 2:
        return(<WelcomeStep2 onNext={this.handleNext}/>);
        break;
    }
  }

  render() {
    return(
      <React.Fragment>
        {this.renderStep()}
      </React.Fragment>
    );
  }
}

export default Welcome;
