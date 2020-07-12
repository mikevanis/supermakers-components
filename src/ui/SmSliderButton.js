/*
Slider for starting an activity. Swipe right to start.
*/

import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion, useAnimation } from 'framer-motion';
import SmButton from './SmButton';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#182a74',
    width: '100%',
    borderRadius: 100,
  },
  button: {
    minWidth: 265,
  },
});

const clickableStyles = makeStyles({
  root: {
    backgroundColor: '#182a74',
    width: 159,
    borderRadius: 100,
  },
  button: {
    root: {
      width: 'auto',
    },
  },
})

export default function SmSliderButton(props) {
  const classes = useStyles();
  const clickableClasses = clickableStyles();
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const dragControl = useAnimation();

  const handleDragEnd = (event, info) => {
    if (info.point.x > containerRef.current.offsetWidth - buttonRef.current.offsetWidth) {
      dragControl.start({
        x: containerRef.current.offsetWidth - buttonRef.current.offsetWidth,
      });
      props.onSwiped();
    } else {
      dragControl.start({
        x: 0,
      });
    }
  };

  const handleButtonClick = (event, info) => {
    if (props.clickable) {
      dragControl.start({
        x: containerRef.current.offsetWidth - buttonRef.current.offsetWidth,
      }, () => {
        props.onSwiped();
      });
    }
  };

  return(
    <div
      className={props.clickable ? clickableClasses.root : classes.root}
      ref={containerRef}
    >
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
        }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        animate={dragControl}
      >
        <SmButton
          color='orange'
          onClick={handleButtonClick}
          ref={buttonRef}
          className={props.clickable ? clickableClasses.button : classes.button}
        >
          {props.children}
        </SmButton>
      </motion.div>
    </div>
  );
}
