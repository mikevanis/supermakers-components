import React from 'react';
import RootContainer from './ui/RootContainer';
import SmButton from './ui/SmButton';

function App() {
  return (
    <RootContainer>
      <h1>Hello there.</h1>
      <SmButton
        color='primary'
        variant='contained'
      >
      Button</SmButton>
    </RootContainer>
  );
}

export default App;
