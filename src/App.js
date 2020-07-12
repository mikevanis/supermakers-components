/*
Showcase for all the components.
*/
import React from 'react';
import RootContainer from './ui/RootContainer';
import SmButton from './ui/SmButton';
import SmAppBar from './ui/SmAppBar';
import SmModeSelector from './ui/SmModeSelector';
import SmReadPanel from './ui/SmReadPanel';
import SmSliderButton from './ui/SmSliderButton';
import SmProgressBar from './ui/SmProgressBar';
import './App.css';

function App() {
  return (
    <RootContainer>
      <SmAppBar onMenuClick={() => {console.log("Menu");}}/>
      <SmModeSelector onModeClick={(mode) => {console.log(mode);}}/>
      <SmProgressBar progress={"30%"}/>
      <SmReadPanel index={1}>
        Hello there. This is an example of text.
        <br/>
        <br/>
        <SmButton
          color='orange'
          onClick={() => {console.log('orange');}}
        >
          Orange
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
        <SmSliderButton onSwiped={() => {console.log("Swiped!!");}}>
          Slider
        </SmSliderButton>
        <br/>
        <SmSliderButton
          clickable
          onSwiped={() => {console.log("Clicked!!");}}
        >
          Next
        </SmSliderButton>
      </SmReadPanel>
    </RootContainer>
  );
}

export default App;
