import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
 root: {
   padding: 38,
 },
 indexNumber: {
   marginBottom: 30,
   color: '#182a74',
 },
 content: {
   color: '#182a74',
   fontSize: 26,
   lineHeight: 1.6,
   maxWidth: 574,
 }
});

export default function SmReadPanel(props) {
  const classes = useStyles();

  const renderTitle = () => {
    if (props.index === 0) {
      return props.title;
    } else {
      return props.index + '.';
    }
  }
  return(
    <Box
      className={classes.root}
      display="flex"
      flexDirection="column"
      flexGrow={1}
    >
      <Typography
        variant="h3"
        className={classes.indexNumber}
      >
        {renderTitle()}
      </Typography>
      <div className={classes.content}>
        {props.children}
      </div>
    </Box>
  )
}
