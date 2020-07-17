/*
Showcase for all the components.
*/
import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import RootContainer from './ui/RootContainer';
import SmButton from './ui/SmButton';
import SmAppBar from './ui/SmAppBar';
import SmModeSelector from './ui/SmModeSelector';
import SmReadPanel from './ui/SmReadPanel';
import SmSliderButton from './ui/SmSliderButton';
import SmProgressBar from './ui/SmProgressBar';
import SmWireSketch from './ui/SmWireSketch';
import './App.css';

function App() {
  const [mode, setMode] = useState('read');
  return (
    <RootContainer>
      <SmAppBar onMenuClick={() => {console.log("Menu");}}/>
      <Box flexGrow={1} display="flex" flexDirection="column">
        <SmModeSelector onModeClick={(mode) => {setMode(mode)}}/>
        {mode === 'read' &&
          <Box flexGrow={1} display="flex" flexDirection="column">
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
          </Box>
        }
        {mode === 'play' &&
          <SmWireSketch/>
        }
      </Box>
    </RootContainer>
  );
}

export default App;
