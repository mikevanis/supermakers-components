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

export default function LightReadStep4Circuit() {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    	 width="574.4px" height="351.3px" viewBox="0 0 574.4 351.3" enable-background="new 0 0 574.4 351.3">
    <path id="Rectangle_187" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" d="M541.2,0.5L541.2,0.5
    	c12.8,0,23.2,10.4,23.2,23.2v49.9H518V23.7C518,10.9,528.4,0.5,541.2,0.5L541.2,0.5z"/>
    <motion.path initial={{strokeDasharray: "10,10", strokeDashoffset: 100}} animate={{strokeDasharray: "10,10", strokeDashoffset: 0}} transition={{ease: "linear", duration: 2, loop: Infinity}} id="top-wire" fill="none" stroke="#182a74" stroke-linecap="round" stroke-miterlimit="10" d="M531.8,90.1v122.4
    	c0,5-4.1,9.1-9.1,9.1l0,0l0,0h-125"/>
    <rect id="Rectangle_188" x="518" y="73.6" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" width="46.4" height="16.5"/>
    <g id="Group_1259" transform="translate(526.222 20.712)">
    	<path id="Path_457" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" d="M20.9,2.3
    		c2.4-2.4,6.2-2.4,8.6,0"/>
    	<path id="Path_458" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" d="M0.5,2.3
    		c2.4-2.4,6.2-2.4,8.6,0c0,0,0,0,0,0"/>
    	<path id="Path_459" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" d="M25.1,16.5"/>
    </g>
    <motion.path initial={{strokeDasharray: "10,10", strokeDashoffset: 100}} animate={{strokeDasharray: "10,10", strokeDashoffset: 0}} transition={{ease: "linear", duration: 2, loop: Infinity}} id="bottom-wire" fill="none" stroke="#182A74" stroke-miterlimit="10" d="M65.2,221.4C65.2,221.4,65.2,221.4,65.2,221.4
    	c-35.8,0-64.7,29-64.7,64.7c0,35.7,29,64.7,64.7,64.7h423.8v0h10.8c40.9,0,74-33.2,74-74V156.5c0-9-7.3-16.3-16.3-16.3l0,0l0,0l0,0
    	c-5,0-9.1-4.1-9.1-9.1V90.1"/>
    <ellipse id="Ellipse_115" fill="#182A74" cx="544.7" cy="57.9" rx="3.6" ry="4.8"/>
    <ellipse id="Ellipse_115-2" fill="#182A74" cx="527.8" cy="57.9" rx="3.6" ry="4.8"/>
    <g id="Group_1270" transform="translate(104.712 181.175)">
    	<g id="Group_684-2">
    		<g id="Group_675-2">
    			<path id="Rectangle_181" fill="#FFAFA6" stroke="#182A74" stroke-miterlimit="10" d="M40.4,0.5h172c22.1,0,39.9,17.9,39.9,39.9
    				l0,0l0,0c0,22.1-17.9,39.9-39.9,39.9c0,0,0,0,0,0h-172c-22.1,0-39.9-17.9-39.9-39.9l0,0l0,0C0.5,18.4,18.4,0.5,40.4,0.5
    				C40.4,0.5,40.4,0.5,40.4,0.5L40.4,0.5L40.4,0.5z"/>
    			<circle id="Ellipse_71-2-2" fill="none" stroke="#182A74" stroke-miterlimit="10" cx="40.4" cy="40.4" r="39.9"/>
    			<g id="Group_647" transform="translate(29.864 38.3)">
    				<rect id="Rectangle_184" x="0.5" y="0.5" fill="#182A74" width="21.3" height="3.5"/>
    			</g>
    		</g>
    		<g id="Group_676-2" transform="translate(171.998)">
    			<circle id="Ellipse_72" fill="#FFAFA6" stroke="#182A74" stroke-miterlimit="10" cx="40.4" cy="40.4" r="39.9"/>
    			<g id="Group_646" transform="translate(29.265 29.266)">
    				<rect id="Rectangle_182" x="9.4" y="0.5" fill="#182A74" width="3.5" height="21.3"/>
    				<rect id="Rectangle_183" x="0.5" y="9.4" fill="#182A74" width="21.3" height="3.5"/>
    			</g>
    		</g>
    	</g>
    	<g id="Group_1258" transform="translate(93.241 35.05)">
    		<path id="Path_460" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" d="M57.6,2.2
    			c2.3-2.3,6-2.3,8.3,0c0,0,0,0,0,0"/>
    		<path id="Path_461" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" d="M0.5,2.2c2.3-2.3,6-2.3,8.3,0
    			c0,0,0,0,0,0"/>
    		<path id="Path_462" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" d="M61.8,1.4
    			c0,8.1-9.5,22.2-28.6,22.2S4.6,9.5,4.6,1.4"/>
    	</g>
    </g>
    <g id="Group_1271" transform="translate(59.203 211.511)">
    	<g id="Group_682">
    		<g id="Group_653">
    			<circle id="Ellipse_73" fill="#FFFFFF" cx="10.2" cy="10.2" r="9.7"/>
    		</g>
    	</g>
    	<g id="Group_683" transform="translate(327.202)">
    		<g id="Group_653-2">
    			<circle id="Ellipse_73-2" fill="#FFFFFF" cx="10.2" cy="10.2" r="9.7"/>
    		</g>
    	</g>
    </g>
    </svg>
);
}
