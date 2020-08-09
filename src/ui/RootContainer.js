import React from 'react';
import { disableBodyScroll } from 'body-scroll-lock';
import { ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
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
        <Box height="100%" display="flex" flexDirection="column">
          {this.props.children}
        </Box>
      </ThemeProvider>
    );
  }
}

export default RootContainer;
