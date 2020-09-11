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
    borderRadius: 100,
  },
  button: {
    minWidth: 265,
  },
});

const clickableStyles = makeStyles({
  root: {
    backgroundColor: '#182a74',
    borderRadius: 100,
  },
  button: {
    root: {
      width: 'auto',
    },
  },
});

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

  const handleButtonClick = async (event, info) => {
    if (!props.disabled) {
      console.log("button clicked");
      if (props.clickable) {
        await dragControl.start({
          x: containerRef.current.offsetWidth - buttonRef.current.offsetWidth,
        });
        props.onSwiped();
        dragControl.start({
          x: 0,
        });
      }
    }
  };

  if (props.small) {
    return(
      <div
        className={props.clickable ? clickableClasses.root : classes.root}
        style={{width: 96, opacity: props.disabled ? 0.5 : 1}}
        ref={containerRef}
      >
        <motion.div
          drag={props.disabled ? "" : "x"}
          dragConstraints={{
            left: 0,
          }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          animate={dragControl}
        >
          <SmButton
            color={props.small ? 'small' : 'orange'}
            onClick={handleButtonClick}
            ref={buttonRef}
            disabled={props.disabled}
            className={props.clickable ? clickableClasses.button : classes.button}
          >
            {props.children}
          </SmButton>
        </motion.div>
      </div>
    );
  } else {
    return(
      <div
        className={props.clickable ? clickableClasses.root : classes.root}
        style={props.fullWidth ? {width: "100%"} : {width: 159}}
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
            color={props.small ? 'small' : 'orange'}
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
}
