import React from 'react';
import { motion } from 'framer-motion';

/*
Step 1 - duplicate file
Step 2 - change file name and function name to a new name
Step 3 - replace svg with copied code from the svg file
Step 4 - add animations. Add motion. in front of any path that needs
animating and make sure you have initial, animate, and transition attributes.
More info on animating here: https://www.framer.com/api/motion/
Step 5 - Import this file into the level that you want to use it in.
Step 6 - if you ever want to tweak the animation, come back and change this file.
*/

export default function LightReadStep1Led() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="204.751" height="292.368" viewBox="0 0 204.751 292.368">
      <g id="Group_1265" dataName="Group 1265" transform="translate(3878.947 -93.598)">
        <g id="Group_1255" dataName="Group 1255">
          <g id="Group_1252" dataName="Group 1252">
            <g id="Group_684" dataName="Group 684">
              <g id="Group_685" dataName="Group 685">
                <g id="Group_675" dataName="Group 675">
                  <g id="Group_676" dataName="Group 676">
                    <path id="Rectangle_187" dataName="Rectangle 187" d="M-3776.571,170.748h0a33.235,33.235,0,0,1,33.227,33.235v71.334H-3809.8V203.979a33.233,33.233,0,0,1,33.229-33.235h0Z" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
                    <path id="Path_235" dataName="Path 235" d="M-3789.938,298.948v86.517" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
                    <path id="Path_236" dataName="Path 236" d="M-3766.1,298.95v86.516" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
                    <rect id="Rectangle_188" dataName="Rectangle 188" width="66.463" height="23.628" transform="translate(-3809.803 275.319)" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <motion.path initial={{pathLength: 0}} animate={{pathLength: [0, 1, 1, 1, 1, 1]}} transition={{loop: Infinity}} d="M44.977 0 L0 0" y1="0.001" x2="44.977" transform="translate(-3878.447 209.159)" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
          <motion.path initial={{pathLength: 0}} animate={{pathLength: [0, 0, 1, 1, 1, 1]}} transition={{loop: Infinity}} d="M31.8 31.8 L0 0" transform="translate(-3860.303 129.469)" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
          <motion.path initial={{pathLength: 0}} animate={{pathLength: [0, 0, 0, 1, 1, 1]}} transition={{loop: Infinity}} d="M0 44.973 L0 0" transform="translate(-3776.573 94.098)" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
          <motion.path initial={{pathLength: 0}} animate={{pathLength: [0, 0, 0, 0, 1, 1]}} transition={{loop: Infinity}} d="M0 31.802 L31.802 0" y1="31.802" x2="31.802" transform="translate(-3724.643 129.468)" fill="none" stroke="#182a74" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
          <motion.path initial={{pathLength: 0}} animate={{pathLength: [0, 0, 0, 0, 0, 1]}} transition={{loop: Infinity}} d="M0 0.001 L44.977 0" transform="translate(-3719.673 209.159)" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
        </g>
        <g id="Group_1264" dataName="Group 1264">
          <motion.path initial={{translateY: 0}} animate={{translateY: 4}} transition={{yoyo: Infinity}} id="Path_457" dataName="Path 457" d="M-3769.494,203.468a6.239,6.239,0,0,1,4.422-1.831,6.239,6.239,0,0,1,4.419,1.831" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
          <motion.path initial={{translateY: 0}} animate={{translateY: 4}} transition={{yoyo: Infinity}} id="Path_458" dataName="Path 458" d="M-3792.493,203.468a6.233,6.233,0,0,1,4.42-1.831,6.238,6.238,0,0,1,4.42,1.831" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
          <path id="Path_459" dataName="Path 459" d="M-3765.073,218.186" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
          <ellipse id="Ellipse_115" dataName="Ellipse 115" cx="3.72" cy="4.987" rx="3.72" ry="4.987" transform="translate(-3768.793 234.45)" fill="#182a74"/>
          <ellipse id="Ellipse_115-2" dataName="Ellipse 115" cx="3.72" cy="4.987" rx="3.72" ry="4.987" transform="translate(-3791.793 234.45)" fill="#182a74"/>
        </g>
      </g>
    </svg>
  );
}
