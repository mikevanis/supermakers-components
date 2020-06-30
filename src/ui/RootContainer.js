import React from 'react';
import { disableBodyScroll } from 'body-scroll-lock';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

class RootContainer extends React.Component {
  targetElement = null;

  componentDidMount() {
    this.targetElement = document.querySelector('body');
    disableBodyScroll(this.targetElement);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}

export default RootContainer;
