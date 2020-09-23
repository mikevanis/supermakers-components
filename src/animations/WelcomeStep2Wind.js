import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

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
  },
});

export default function WelcomeStep2Wind(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 644 316.728" preserveAspectRatio="xMinYMid slice">
        <g id="Group_1598" data-name="Group 1598" transform="translate(-62 -511.5)">
          <motion.g initial={{translateX: -300}} animate={{translateX: 620}} transition={{duration: 2, delay: 1, loop: Infinity }} id="wind1_motion">
          <path id="wind" data-name="Path 534" d="M150.789,825.364a11.457,11.457,0,0,0-11.457,11.457,14.321,14.321,0,0,0,14.321,14.321,17.9,17.9,0,0,0,17.9-17.9,22.378,22.378,0,0,0-22.378-22.378H67.938" transform="translate(126.158 -23.414)" fill="none" stroke="#182a74" strokeMiterlimit={10} strokeWidth={1} />
          </motion.g>
          <motion.g initial={{scale: 0.95, rotate: 0}} animate={{scale:0.95, rotate: 5}} transition={{duration: 0.2,delay:1, flip: Infinity}} id="wings_motion">
          <path id="Path_382" data-name="Path 382" d="M-2653.214,5889.486c1.991-108.912,160.5-114.593,191.972-89.135,52.914,66.258-120.912,115.872-183.018,109.723,53.046,1.309,126.833,65.7,182.14,80.591,11.485,3.092,12.387,20.94,5.267,28.276-50.889,27.363-155.851-7.467-184.412-41.354-11.051-15.375-15.245-35.658-26.422-51.2,5.134,22.6,2.255,58.406-20.762,64.836-105.507,29.472-139.572-134.569-101.118-150.493,36.419-15.08-2.809,93.614,109.577,101.6,36.512,2.6-7.662-40.54-24.58-44.262-21.369-6.921-29.63-45.857-24.423-66.12,20.979-81.643,94.4-109.834,105.192-75.5,18.943,30.643-57.818,118.362-36.238,147.21" transform="translate(3051.269 -5229.811)" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
          </motion.g>
          <g id="body" data-name="Group 781" transform="translate(304.322 594.496)">
            <g id="Group_1595" data-name="Group 1595" transform="translate(0 0)">
              <path id="Path_536" data-name="Path 536" d="M373.083,335.965c0-5.544-59.635-6.857-87.882-10.4-.3-2.93-.724-5.82-1.263-8.672,21.643-3.242,62.2-4.664,62.2-9.991,0-5.921-50.105-7.016-68.65-11.151q-1.393-3.244-3-6.369c12.479-4.46,51.439-5.438,51.439-11.54,0-6.549-57.394-7.2-68.707-12.581a100.918,100.918,0,0,0-72.879-31.016c-55.993,0-101.384,45.542-101.384,101.721s45.391,101.721,101.384,101.721a100.92,100.92,0,0,0,72.88-31.017c11.315-5.386,68.707-6.033,68.707-12.582,0-6.1-38.956-7.081-51.437-11.541q1.607-3.124,3-6.371c18.546-4.135,68.647-5.232,68.647-11.154,0-5.327-40.555-6.748-62.2-9.991.539-2.851.967-5.741,1.263-8.671C313.45,342.822,373.083,341.509,373.083,335.965Z" transform="translate(-82.958 -234.248)" fill="#96d5ef" />
            </g>
            <g id="black_white_group" data-name="Group 777" transform="translate(80.182 136.572)">
              <motion.g initial={{rotate: 0}} animate={{rotate: -360}} transition={{delay: 1, yoyo: Infinity}} id="black_white_rotate">
              <g id="Group_192" data-name="Group 192" transform="translate(0.005)">
                <path id="Path_97" data-name="Path 97" d="M-2584.958,6081.75v-14.893h0a14.892,14.892,0,0,0-14.887,14.893h14.887Z" transform="translate(2599.846 -6066.857)" />
                <path id="Path_98" data-name="Path 98" d="M-2562.854,6088.965h-14.893v14.894A14.894,14.894,0,0,0-2562.854,6088.965Z" transform="translate(2592.634 -6074.072)" />
              </g>
              <g id="black_white_circle" data-name="Group 193" transform="translate(0 0.006)">
                <path id="Path_99" data-name="Path 99" d="M-2577.745,6081.754h14.892a14.892,14.892,0,0,0-14.892-14.888h0Z" transform="translate(2592.638 -6066.866)" fill="#fff" />
                <path id="Path_100" data-name="Path 100" d="M-2584.96,6103.859v-14.893h-14.893a14.892,14.892,0,0,0,14.892,14.893Z" transform="translate(2599.853 -6074.079)" fill="#fff" />
              </g>
              </motion.g>
            </g>
            <g id="eye" data-name="Group 778" transform="translate(30.175 44.871)">
              <g id="Group_119" data-name="Group 119">
                <path id="Path_72" data-name="Path 72" d="M-2659.652,5951.228c-9.027,0-14.434-4.588-14.434-10.249s5.406-10.249,14.434-10.249h0c9.027,0,14.434,4.588,14.434,10.249S-2650.625,5951.228-2659.652,5951.228Z" transform="translate(2674.086 -5930.73)" fill="#fff" />
                <circle id="Ellipse_15" data-name="Ellipse 15" cx="5.876" cy="5.876" r="5.876" transform="translate(8.557 4.373)" />
              </g>
              <g id="eye2" data-name="Group 120" transform="translate(44.168)">
                <path id="Path_73" data-name="Path 73" d="M-2594.088,5951.228c-9.027,0-14.433-4.588-14.433-10.249s5.405-10.249,14.433-10.249h0c9.027,0,14.433,4.588,14.433,10.249S-2585.061,5951.228-2594.088,5951.228Z" transform="translate(2608.521 -5930.73)" fill="#fff" />
                <circle id="Ellipse_16" data-name="Ellipse 16" cx="5.876" cy="5.876" r="5.876" transform="translate(8.557 4.373)" />
              </g>
            </g>
          </g>
          <path id="mouth" data-name="Path 308" d="M-2509.263,6045.845a35.174,35.174,0,0,1-35.174,35.173" transform="translate(2966.272 -5328.932)" fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={1} />
          <ellipse id="mouth_dot" data-name="Ellipse 83" cx="9.094" cy="8.757" rx="9.094" ry="8.757" transform="translate(446.996 712.381)" fill="#fff" />
          <circle id="face_dot" data-name="Ellipse 84" cx="8.757" cy="8.757" r="8.757" transform="translate(354.607 712.381)" fill="#fff" />
          <g id="Group_1045" data-name="Group 1045" transform="translate(396.842 674.486)">
            <g id="Group_874" data-name="Group 874" transform="translate(0 0)">
              <g id="Group_676" data-name="Group 676">
                <motion.path initial={{opacity: 0.2}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 1, loop: Infinity}} id="light" data-name="Rectangle 187" d="M-2511.828,6001.86h0a13.056,13.056,0,0,1-13.057,13.055h-28.028V5988.8h28.028A13.057,13.057,0,0,1-2511.828,6001.86Z" transform="translate(2562.196 -5988.803)" fill="#ffdc20" />
                <rect id="light_base" data-name="Rectangle 188" width="9.284" height="26.113" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
              </g>
            </g>
          </g>
            <motion.g initial={{translateX: -300}} animate={{translateX: 620}} transition={{duration: 2, delay: 1, loop: Infinity }} id="wind2_motion">
              <path id="wind2" data-name="Path 535" d="M127.069,836.642a11.457,11.457,0,0,1-11.457-11.458,14.322,14.322,0,0,1,14.321-14.321,17.9,17.9,0,0,1,17.9,17.9,22.378,22.378,0,0,1-22.378,22.378H-4.745" transform="translate(160.744 -298.863)" fill="none" stroke="#182a74" strokeMiterlimit={10} strokeWidth={1} />
            </motion.g>
          <g id="Group_1597" data-name="Group 1597" transform="translate(62 597.322)">
            <g id="Group_913" data-name="Group 913" transform="translate(0 0)">
              <g id="Group_912" data-name="Group 912">
                <motion.g initial={{scale: 1}} animate={{scale: 1.1}} transition={{delay:1, flip: Infinity}} id="wind_left" data-name="Group 911">
                  <path id="Path_314" data-name="Path 314" d="M855.368-82.645c-11.64,0-21.076,8.43-21.076,18.831,0,13,11.795,23.54,26.344,23.54,18.188,0,32.932-13.174,32.932-29.425,0-20.313-18.43-36.781-41.164-36.781H791.768v-47.5h60.637c22.734,0,41.165-16.468,41.165-36.781,0-16.251-14.744-29.425-32.931-29.425-14.55,0-26.346,10.54-26.346,23.54,0,10.4,9.436,18.832,21.076,18.832" transform="translate(-791.768 220.19)" fill="#fff" />
                  <path id="Path_315" data-name="Path 315" d="M874.171-108.258c-11.64,0-21.075,8.432-21.076,18.832,0,13,11.795,23.54,26.345,23.54,18.188,0,32.932-13.174,32.932-29.425,0-20.313-18.43-36.781-41.164-36.781,22.734,0,41.164-16.467,41.165-36.781,0-16.251-14.744-29.425-32.932-29.425-14.55,0-26.345,10.54-26.345,23.54,0,10.4,9.436,18.832,21.076,18.832L849.48-132.093Z" transform="translate(-810.571 222.051)" fill="#fff" />
                </motion.g>
              </g>
            </g>
          </g>
            <motion.g initial={{translateX: -700}} animate={{translateX: 320}} transition={{duration: 2, delay: 1.5, loop: Infinity }}id="wind_short_move">
              <line  id="wind_short_line" data-name="Line 254" x2={94} transform="translate(612 656)" fill="none" stroke="#182a74" strokeWidth={1} />
            </motion.g>
        </g>
      </svg>


    </div>
  );
}
