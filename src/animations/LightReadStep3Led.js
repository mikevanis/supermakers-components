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

export default function LightReadStep3Led() {
  return (
    <svg transition={{yoyo: Infinity}} xmlns="http://www.w3.org/2000/svg" width="304" height="241.5" viewBox="0 0 304 241.5">
  <g id="Group_704" data-name="Group 704" transform="translate(-231 -626.5)">
    <g id="Group_663" data-name="Group 663" transform="translate(-70 89)">
      <text id="Minus" transform="translate(569 690)" fill="#182a74" font-size="26" font-family="Apercu-Regular, Apercu" letter-spacing="0.04em"><tspan x="-35.828" y="0">Minus</tspan></text>
      <g id="Group_662" data-name="Group 662" transform="translate(-40.723 -15.723)">
        <g id="Group_653" data-name="Group 653" transform="translate(534.385 688.459)">
          <circle id="Ellipse_73" data-name="Ellipse 73" cx="10" cy="10" r="10" fill="#fff"/>
        </g>
      </g>
    </g>
    <g id="Group_665" data-name="Group 665" transform="translate(114 148)">
      <text id="Plus" transform="translate(143 714)" fill="#182a74" font-size="26" font-family="Apercu-Regular, Apercu" letter-spacing="0.04em"><tspan x="-25.597" y="0">Plus</tspan></text>
      <g id="Group_660" data-name="Group 660" transform="translate(-326.385 8.277)">
        <g id="Group_653-2" data-name="Group 653" transform="translate(534.385 688.459)">
          <circle id="Ellipse_73-2" data-name="Ellipse 73" cx="10" cy="10" r="10" fill="#fff"/>
        </g>
      </g>
    </g>
    <g id="Group_1268" data-name="Group 1268" transform="translate(-1 195)">
      <g id="Group_1269" data-name="Group 1269" transform="translate(1023.502 317.892)">
        <g id="Group_673" data-name="Group 673">
          <path id="Rectangle_187" data-name="Rectangle 187" d="M-638.55,114.108h0A23.952,23.952,0,0,1-614.6,138.06v51.417h-47.9V138.06A23.951,23.951,0,0,1-638.55,114.108Z" fill="none" stroke="#182a74" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
          //legs
          <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 2}} id="Path_235" data-name="Path 235" d="M-648.184,206.506V332.771a9.373,9.373,0,0,1-9.372,9.372h0" fill="none" stroke="#182a74" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
          <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 2}} id="Path_236" data-name="Path 236" d="M-631,206.507v42.357a9.372,9.372,0,0,0,9.372,9.372h0" fill="none" stroke="#182a74" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
          <rect id="Rectangle_188" data-name="Rectangle 188" width="47.903" height="17.03" transform="translate(-662.502 189.476)" fill="none" stroke="#182a74" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
        </g>
        <g id="Group_1268-2" data-name="Group 1268">
          //eyebrows
          <motion.path initial={{translateY: 0, rotate: 0}} animate={{translateY: 4, rotate: -20}} transition={{yoyo: Infinity}} id="Path_457" data-name="Path 457" d="M-630.235,144.7a6.242,6.242,0,0,1,4.421,1.832,6.236,6.236,0,0,1,1.83,4.42" fill="none" stroke="#182a74" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
          <path id="Path_458" data-name="Path 458" d="M-652.466,136.23a6.232,6.232,0,0,1,4.42-1.832,6.24,6.24,0,0,1,4.42,1.832" fill="none" stroke="#182a74" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
          <path id="Path_459" data-name="Path 459" d="M-628.055,150.948" fill="none" stroke="#182a74" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
          <motion.ellipse initial={{rx: 3.72, ry: 4.987}} animate={{rx: 3.72*1.2, ry: 4.987*1.2}} transition={{yoyo: Infinity}} id="Ellipse_115" data-name="Ellipse 115" cx="3.72" cy="4.987" rx="3.72" ry="4.987" transform="translate(-633.956 159.211)" fill="#182a74"/>
          <motion.ellipse initial={{rx: 3.72, ry: 4.987}} animate={{rx: 3.72*1.2, ry: 4.987*1.2}} transition={{yoyo: Infinity}} id="Ellipse_115-2" data-name="Ellipse 115" cx="3.72" cy="4.987" rx="3.72" ry="4.987" transform="translate(-651.375 159.211)" fill="#182a74"/>
        </g>
      </g>
    </g>
  </g>
</svg>
);
}
