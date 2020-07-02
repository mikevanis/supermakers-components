/*
Slider for starting an activity. Swipe right to start.
*/

import React, { Fragment } from 'react';
import Slider from '@material-ui/core/slider';
import Badge from '@material-ui/core/badge';
import { makeStyles } from '@material-ui/core/styles';

const sliderStyles = makeStyles({
  root: {
    width: 200,
    height: 54,
  },
  rail: {
    color: "#182A74",
    height: 54,
    opacity: 1,
  },
  track: {
    color: "#182A74",
  },
  thumb: {
    width: 54,
    height: 54,
    marginTop: 0,
  }
});

const badgeStyles = makeStyles({
  badge: {
    backgroundColor: '#ff6d00',
    width: 200,
    height: 54,
    fontSize: 26,
    color: '#fff',
    borderRadius: 100,
  },
});

export default function SmStartSlider() {
  const sliderClasses = sliderStyles();
  const badgeClasses = badgeStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Also change position of badge
  };

  return(
    <Fragment>
      <Badge
        badgeContent={"Let's go!"}
        classes={{
          badge: badgeClasses.badge,
        }}
      >
      <Slider
        classes ={{
          root: sliderClasses.root,
          rail: sliderClasses.rail,
          track: sliderClasses.track,
          thumb: sliderClasses.thumb,
        }}
        value={value}
        onChange={handleChange}
      />
      </Badge>
    </Fragment>
  );
}
