import React from 'react';
import RootContainer from './ui/RootContainer';
import SmButton from './ui/SmButton';
import SmAppBar from './ui/SmAppBar';
import SmModeSelector from './ui/SmModeSelector';
import SmReadPanel from './ui/SmReadPanel';
import './App.css';

function App() {
  return (
    <RootContainer>
      <SmAppBar onMenuClick={() => {console.log("Menu");}}/>
      <SmModeSelector/>
      <SmReadPanel index={1}>
        Hello there. This is an example of text.
        <br/>
        <br/>
        <SmButton
          color='primary'
          variant='contained'
        >
          Button
        </SmButton>
      </SmReadPanel>
    </RootContainer>
  );
}

export default App;
