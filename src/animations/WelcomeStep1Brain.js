import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

/*
Step 1 - duplicate file
Step 2 - change file name and function name to a new name
Step 3 - replace svg with copied code from the svg file
Step 4 - remove width and height from svg element
Step 5 - add animations. Add motion. in front of any path that needs
animating and make sure you have initial, animate, and transition attributes.
More info on animating here: https://www.framer.com/api/motion/
Step 6 - Import this file into the level that you want to use it in.
Step 7 - if you ever want to tweak the animation, come back and change this file.
*/

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "100%",
    height: "100%"
  },
  svg: {
    display: "block",
    position: "absolute",
    maxHeight: "100%",
  },
});

export default function WelcomeStep1Character(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <svg xmlns="http://www.w3.org/2000/svg" width="65.515" height="74.97" viewBox="0 0 65.515 74.97">
        <g id="Group_1581" data-name="Group 1581" transform="translate(-476.678 -25.502)">
          <path id="Path_77" data-name="Path 77" d="M509.548,89.515a10.957,10.957,0,1,1-21.913,0c0-.063,0-.126,0-.189a10.95,10.95,0,0,1-7.3-12.861,10.952,10.952,0,0,1-2.292-13.478,10.953,10.953,0,0,1,2.292-13.479,10.949,10.949,0,0,1,7.3-12.86c0-.063,0-.126,0-.189a10.957,10.957,0,0,1,21.913,0h-.224a10.957,10.957,0,0,1,21.913,0c0,.063,0,.126,0,.189a10.948,10.948,0,0,1,7.3,12.86,10.953,10.953,0,0,1,2.292,13.479,10.952,10.952,0,0,1-2.292,13.478,10.949,10.949,0,0,1-7.3,12.861c0,.063,0,.125,0,.189a10.957,10.957,0,1,1-21.913,0Z" transform="translate(0 0)" fill="#fff" />
          <g id="Group_124" data-name="Group 124" transform="translate(489.866 45.517)">
            <line id="Line_34" data-name="Line 34" y2="28.622" transform="translate(20.289 3.159)" fill="none" stroke="#182a74" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} />
            <g id="Group_123" data-name="Group 123">
              <path id="Path_78" data-name="Path 78" d="M495.816,63.12a8.572,8.572,0,0,1,8.572-8.572" transform="translate(-495.816 -54.548)" fill="none" stroke="#182a74" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} />
              <path id="Path_79" data-name="Path 79" d="M542.265,54.548a8.572,8.572,0,0,1,8.572,8.572" transform="translate(-510.258 -54.548)" fill="none" stroke="#182a74" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} />
              <path id="Path_80" data-name="Path 80" d="M550.836,92.814a8.572,8.572,0,0,1-8.572,8.572" transform="translate(-510.258 -66.446)" fill="none" stroke="#182a74" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} />
              <path id="Path_81" data-name="Path 81" d="M504.388,101.386a8.572,8.572,0,0,1-8.572-8.572" transform="translate(-495.816 -66.446)" fill="none" stroke="#182a74" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} />
            </g>
          </g>
        </g>
      </svg>

    </div>
  );
}
