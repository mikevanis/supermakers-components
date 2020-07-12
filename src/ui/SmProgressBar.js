/*
Progress bar for "read" mode during gameplay.
*/
import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion, useAnimation } from 'framer-motion';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 20,
    backgroundColor: '#e6a0a0',
  },
  marker: {
    x: 0,
    width: 49,
    height: 20,
    marginTop: -20,
    position: 'absolute',
    backgroundColor: '#ff6d00',
    borderRadius: 10,
  },
  follower: {
    width: 0,
    height: 20,
    backgroundColor: '#182a74',
  },
});

export default function SmProgressBar(props) {
  const classes = useStyles();
  const markerControl = useAnimation();
  const followerControl = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    markerControl.start({
      x: (containerRef.current.offsetWidth * (parseFloat(props.progress) / 100.0) - (49/2)),
      transition: {duration: 0.5},
    });
    followerControl.start({
      width: props.progress,
      transition: {duration: 0.5},
    });
  });

  return(
    <div className={classes.root} ref={containerRef}>
      <motion.div className={classes.follower} animate={followerControl}></motion.div>
      <motion.div className={classes.marker} animate={markerControl}></motion.div>
    </div>
  );
}
