/*
Slider for starting an activity. Swipe right to start.
*/

import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
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

  const handleDragEnd = (event, info) => {
    if (info.point.x > containerRef.current.offsetWidth - 265) {
      props.onSwiped();
    }
  };

  return(
    <div className={classes.root} ref={containerRef}>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        dragElastic={1}
        onDragEnd={handleDragEnd}
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
