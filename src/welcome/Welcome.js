import React from 'react';
import { withRouter } from 'react-router-dom';
import Intro from './Intro';
import WelcomeStep1 from './WelcomeStep1';
import WelcomeStep2 from './WelcomeStep2';
import WelcomeStep3 from './WelcomeStep3';
import WelcomeStep4 from './WelcomeStep4';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);

    this.state = {
      index: 0,
    };
  }

  handleNext() {
    if (this.state.index === 4) {
      this.props.history.push("/home");
    }
    else {
      this.setState({index: this.state.index + 1});
    }
  }

  renderStep() {
    switch(this.state.index) {
      case 0:
        return(<Intro onNext={this.handleNext}/>);
      case 1:
        return(<WelcomeStep1 onNext={this.handleNext}/>);
      case 2:
        return(<WelcomeStep2 onNext={this.handleNext}/>);
      case 3:
        return(<WelcomeStep3 onNext={this.handleNext}/>);
      case 4:
        return(<WelcomeStep4 onNext={this.handleNext}/>);
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

export default withRouter(Welcome);
