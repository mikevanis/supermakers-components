/*
Generic button covering orange / blue / white styles.
*/

import React from 'react';
import Button from '@material-ui/core/button';
import { makeStyles } from '@material-ui/core/styles';

const orangeStyles = makeStyles({
  root: {
    borderRadius: 100,
    padding: '0 30px',
    backgroundColor: '#ff6d00',
    color: '#fff',
  },
  label: {
    fontSize: 26,
    textTransform: 'capitalize',
  },
});

const blueStyles = makeStyles({
  root: {
    borderRadius: 100,
    padding: '0 30px',
    border: '1px solid #182a74',
    background: 'none',
    color: '#182a74',
    '&:hover': {
      background: 'none',
    }
  },
  label: {
    fontSize: 26,
    textTransform: 'capitalize',
  },
});

const whiteStyles = makeStyles({
  root: {
    borderRadius: 100,
    padding: '0 30px',
    border: '1px solid #fff',
    background: 'none',
    color: '#fff',
    '&:hover': {
      background: 'none',
    }
  },
  label: {
    fontSize: 26,
    textTransform: 'capitalize',
  }
});

const SmButton = React.forwardRef((props, ref) => {
  let outputClass = null;
  switch(props.color) {
    case 'orange':
      outputClass = orangeStyles();
      break;
    case 'blue':
      outputClass = blueStyles();
      break;
    case 'white':
      outputClass = whiteStyles();
      break;
    default:
      outputClass = orangeStyles();
      break;
  }
  return(
    <Button
      variant="contained"
      color="primary"
      classes={{...outputClass}}
      className={props.className}
      onClick={props.onClick}
      ref={ref}
    >
      {props.children}
    </Button>
  );
});

export default SmButton;
