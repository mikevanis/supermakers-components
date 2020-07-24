/*
Showcase for all the components.
*/
import React from 'react';
import Box from '@material-ui/core/Box';
import RootContainer from './ui/RootContainer';
import SmAppBar from './ui/SmAppBar';
import LightLevel from './levels/LightLevel';
import './App.css';

function App() {
  return (
    <RootContainer>
      <SmAppBar onMenuClick={() => {console.log("Menu");}}/>
      <Box id="content" flexGrow={1} display="flex" flexDirection="column">
        <LightLevel/>
      </Box>
    </RootContainer>
  );
}

export default App;
