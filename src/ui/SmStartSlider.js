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
    borderRadius: 200,
  },
  button: {
    width: 265,
  },
});

export default function SmStartSlider(props) {
  const classes = useStyles();
  const containerRef = useRef(null);
  const dragControl = useAnimation();

  const handleDragEnd = (event, info) => {
    if (info.point.x > containerRef.current.offsetWidth - 264) {
      dragControl.start({
        x: containerRef.current.offsetWidth - 265,
      });
      props.onSwiped();
    } else {
      dragControl.start({
        x: 0,
      });
    }
  };

  return(
    <div className={classes.root} ref={containerRef}>
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
          color='primary'
          variant='contained'
          className={classes.button}
        >
          {props.children}
        </SmButton>
      </motion.div>
    </div>
  );
}
