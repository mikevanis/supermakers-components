/*
A button group for switching between "read" and "play" mode in gameplay.
*/

import React from 'react';
import ButtonBase from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

import hand from '../assets/icons/mode-selector-hand.png';
import eye from '../assets/icons/mode-selector-eye.png';

const eyeStyles = makeStyles({
  root: {
    backgroundColor: '#ffafa6',
    borderRadius: 0,
    border: 'none',
    width: '50%',
    height: 65,
    '&:hover': {
      background: '#ffafa6',
    },
  },
});

const handStyles = makeStyles({
  root: {
    backgroundColor: '#ffdc20',
    borderRadius: 0,
    border: 'none !important',
    width: '50%',
    height: 65,
    '&:hover': {
      background: '#ffdc20',
    },
  },
})

const buttonGroupStyles = makeStyles({
  groupedContained: {
    '&:not(:last-child)': {
      border: 'none',
    },
  },
});

const eyeImgStyle = {
  height: 18,
};

const handImgStyle = {
  height: 29,
};

export default function SmModeSelector(props) {
  const eyeClasses = eyeStyles();
  const handClasses = handStyles();
  const buttonGroupClasses = buttonGroupStyles();

  return(
    <ButtonGroup
      variant='contained'
      fullWidth
      classes={{...buttonGroupClasses}}
    >
      <ButtonBase
        classes={{
          root: eyeClasses.root,
          active: eyeClasses.active,
        }}
        onClick={() => {props.onModeClick("read")}}
      >
        <img src={eye} style={eyeImgStyle} alt="read"/>
      </ButtonBase>
      <ButtonBase
        classes={{
          root: handClasses.root,
          active: handClasses.active,
        }}
        onClick={() => {props.onModeClick("play")}}
      >
        <img src={hand} style={handImgStyle} alt="play"/>
      </ButtonBase>
    </ButtonGroup>
  );
};
