import React from 'react';
import RootContainer from './ui/RootContainer';
import SmButton from './ui/SmButton';
import SmAppBar from './ui/SmAppBar';
import SmModeSelector from './ui/SmModeSelector';
import SmReadPanel from './ui/SmReadPanel';
import SmStartSlider from './ui/SmStartSlider';
import SmProgressBar from './ui/SmProgressBar';
import './App.css';

function App() {
  return (
    <RootContainer>
      <SmAppBar onMenuClick={() => {console.log("Menu");}}/>
      <SmModeSelector/>
      <SmProgressBar progress={"30%"}/>
      <SmReadPanel index={1}>
        Hello there. This is an example of text.
        <br/>
        <br/>
        <SmButton
          color='orange'
        >
          Primary
        </SmButton>
        <SmButton
          color='blue'
        >
          Blue
        </SmButton>
        <SmButton
          color='white'
        >
          White
        </SmButton>
        <br/>
        <br/>
        <br/>
        <SmStartSlider onSwiped={() => {console.log("Swiped!!");}}>
          Let's go!
        </SmStartSlider>
      </SmReadPanel>
    </RootContainer>
  );
}

export default App;
