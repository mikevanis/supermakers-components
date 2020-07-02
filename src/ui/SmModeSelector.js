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
    width: '50%',
    height: 65,
  },
});

const handStyles = makeStyles({
  root: {
    backgroundColor: '#ffdc20',
    borderRadius: 0,
    width: '50%',
    height: 65,
  },
})

const eyeImgStyle = {
  height: 18,
};

const handImgStyle = {
  height: 29,
};

export default function SmModeSelector() {
  const eyeClasses = eyeStyles();
  const handClasses = handStyles();

  return(
    <ButtonGroup
      variant='contained'
      fullWidth={true}
    >
      <ButtonBase
        classes={{
          root: eyeClasses.root,
          active: eyeClasses.active,
        }}
      >
        <img src={eye} style={eyeImgStyle} alt="read"/>
      </ButtonBase>
      <ButtonBase
        classes={{
          root: handClasses.root,
          active: handClasses.active,
        }}
      >
        <img src={hand} style={handImgStyle} alt="play"/>
      </ButtonBase>
    </ButtonGroup>
  );
};
