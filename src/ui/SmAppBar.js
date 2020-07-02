import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
 title: {
   flexGrow: 1,
 },
});

export default function SmAppBar(props) {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <AppBar
        position="static"
        className={classes.appBar}
        color="secondary"
      >
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Super Makers
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={props.onMenuClick}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
