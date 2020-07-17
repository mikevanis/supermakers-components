import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
 root: {
   padding: 20,
 },
 indexNumber: {
   marginBottom: 30,
   color: '#182a74',
 },
 content: {
   color: '#182a74',
   fontSize: 26,
 }
});

export default function SmReadPanel(props) {
  const classes = useStyles();
  return(
    <Box
      bgcolor="#ffafa6"
      className={classes.root}
      flexGrow={1}
    >
      <Typography
        variant="h3"
        className={classes.indexNumber}
      >
        {props.index}
      </Typography>
      <div className={classes.content}>
        {props.children}
      </div>
    </Box>
  )
}
