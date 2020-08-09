/*
Showcase for all the components.
*/
import React from 'react';
import Box from '@material-ui/core/Box';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createBrowserHistory } from "history";
import RootContainer from './ui/RootContainer';
import SmAppBar from './ui/SmAppBar';
import Welcome from './welcome/Welcome';
import Home from './home/Home';
import './App.css';

function App() {
  return (
    <RootContainer>
      <Router>
        <SmAppBar onMenuClick={() => {console.log("Menu");}}/>
        <Box id="content" flexGrow={1} display="flex" flexDirection="column">
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
        </Switch>
        </Box>
      </Router>
    </RootContainer>
  );
}

export default App;
