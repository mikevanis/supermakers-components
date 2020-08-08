import React from 'react';
import Intro from './Intro';
import WelcomeStep1 from './WelcomeStep1';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };
  }

  render() {
    return(
      <WelcomeStep1/>
    );
  }
}

export default Welcome;
