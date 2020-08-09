import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion, useAnimation } from 'framer-motion';

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
    height: "100%",
    marginBottom: "50px",
  },
});

const buttonVariants = {
  unpressed: {x: 0},
  pressed: {x: 111}
};

const rectVariants = {
  unpressed: {width: 276.872, x: 54},
  pressed: {width: 0, x: 224.372}
};

const handVariants = {
  unpressed: {x: 0},
  pressed: {x: 120}
};

export default function WelcomeStep4Button(props) {
  const classes = useStyles();

  const controls = useAnimation();
  const onButtonPress = async () => {
    console.log("Hi");
    await controls.start("pressed");
    return console.log("Exit");
  };

  return (
    <div className={classes.root}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 687.408 346.574" preserveAspectRatio="xMidYMin">
        <g id="Group_1632" data-name="Group 1632" transform="translate(-34.592 -507.627)">
          <rect id="Rectangle_306" data-name="Rectangle 306" width={687} height={346} transform="translate(35 508)" fill="#ffdc20" />
          <g id="Group_1614" data-name="Group 1614" transform="translate(0 60)">
            <g id="Group_1412" data-name="Group 1412" transform="translate(-125.625 -57.783)">
              <path id="Path_546" data-name="Path 546" d="M125.771,0A125.771,125.771,0,1,1,0,125.771,125.771,125.771,0,0,1,125.771,0Z" transform="translate(383.854 550.013)" fill="#04bf8a" />
              <g id="Group_1411" data-name="Group 1411" transform="translate(260.893 594.315)">
                <g id="Group_739" data-name="Group 739" transform="translate(0)">
                  <motion.rect initial={"unpressed"} animate={controls} variants={rectVariants} id="Rectangle_156" data-name="Rectangle 156" width="276.872" height="164.043" rx={82} transform="translate(54)" fill="#182a74" />
                  <motion.g onClick={onButtonPress} initial={"unpressed"} animate={controls} variants={buttonVariants} id="Group_532" data-name="Group 532" transform="translate(0)">
                    <circle id="Button" data-name="Ellipse 48" cx="82.403" cy="82.403" r="82.403" transform="translate(54)" fill="#ff6d00" />
                    <text id="GO_" data-name="GO!" transform="translate(88.732 98.468)" fill="#fff" fontSize={44} fontFamily="Helvetica" letterSpacing="0.04em"><tspan x={0} y={0}>GO!</tspan></text>
                  </motion.g>
                </g>
              </g>
            </g>
            <g id="Group_1609" data-name="Group 1609" transform="translate(34.592 565.494)">
              <motion.g initial={"unpressed"} animate={controls} variants={handVariants}>
                <motion.g id="Group_728" data-name="Group 728" transform="translate(0.001 0)">
                  <path id="Path_238" data-name="Path 238" d="M465.492-185.158" transform="translate(-301.953 212.12)" fill="#fff" />
                  <path id="Path_239" data-name="Path 239" d="M465.492-174.966" transform="translate(-301.953 220.05)" fill="#fff" />
                  <path id="Path_240" data-name="Path 240" d="M534.091-156.263H493.809s-23.259-44.059-67.627-44.059l-27.189.941s-25.476,2.135-25.476,30.291,25.476,28.927,25.476,28.927h11.531c13.49,0,21.221,12.269,35.025,24.537,8.625,7.669,16.812,11.058,20.624,9.3,8.2-3.778,2.991-10.194-.917-14.045-8.608-8.478-14.026-12.4-2.3-17,9.927-3.894,71.134-2.121,71.134-2.121a8.386,8.386,0,0,0,8.387-8.385A8.387,8.387,0,0,0,534.091-156.263Z" transform="translate(-373.517 200.322)" fill="#fff" />
                </motion.g>
                <path id="Path_241" data-name="Path 241" d="M448.547-164.377s-13.46-25.5-39.137-25.5" transform="translate(-345.589 208.451)" fill="none" stroke="#182a74" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                <path id="Path_242" data-name="Path 242" d="M428.979-169.955S422.249-182.7,409.41-182.7" transform="translate(-345.589 214.03)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </motion.g>

            </g>
            <g id="Group_1611" data-name="Group 1611" transform="translate(18398 24031)">
              <ellipse id="Ellipse_115-3" data-name="Ellipse 115-3" cx="9.453" cy="12.675" rx="9.453" ry="12.675" transform="translate(-17984.307 -23583.373)" fill="#182a74" />
              <ellipse id="Ellipse_115-4" data-name="Ellipse 115-4" cx="9.453" cy="12.675" rx="9.453" ry="12.675" transform="translate(-18048.576 -23583.373)" fill="#182a74" />
            </g>
            <g id="Group_1612" data-name="Group 1612" transform="translate(-54.702 -150.699)">
              <path id="Path_460" data-name="Path 460" d="M500.352,913.932a14.449,14.449,0,0,1,20.435,0l0,0" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
              <path id="Path_461" data-name="Path 461" d="M356.7,913.932a14.453,14.453,0,0,1,20.439,0" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
              <path id="Path_547" data-name="Path 547" d="M366.523,911.815a97.272,97.272,0,0,0,145.281,0" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
            </g>
          </g>
        </g>
      </svg>


    </div>
  );
}
