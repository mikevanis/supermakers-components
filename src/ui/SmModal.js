import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

export default function SmModal(props) {

  return(
    <Box>
      <Box
        bgcolor={props.bgcolor}
        position="absolute"
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        zIndex="100"
      >
        {props.children}
      </Box>
    </Box>
  );
}
