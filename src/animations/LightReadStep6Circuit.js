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

export default function LightReadStep6Circuit() {
  return (
    <svg version="1.1" id="Layer_1" x="0px" y="0px" width="574.9px" height="410.1px" viewBox="0 0 574.9 410.1">
    <path id="Rectangle_187" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" d="M541.7,0.5L541.7,0.5
    	c12.8,0,23.2,10.4,23.2,23.2v49.9h-46.5V23.7C518.4,10.9,528.9,0.5,541.7,0.5C541.7,0.5,541.7,0.5,541.7,0.5z"/>
    <motion.path initial={{strokeDasharray: "10,10", strokeDashoffset: -100}} animate={{strokeDasharray: "10,10", strokeDashoffset: 0}} transition={{ease: "linear", duration: 2, loop: Infinity}} id="wire-right" fill="none" stroke="#182a74" stroke-linecap="round" stroke-dasharray="10,10" stroke-miterlimit="10" d="M549,90.2v41.1c0,5,4.1,9.1,9.1,9.1l0,0l0,0l0,0c9,0,16.3,7.3,16.3,16.3c0,0,0,0,0,0V277c0,40.9-33.2,74.1-74.1,74.1h-10.8"/>
    <rect id="Rectangle_188" x="518.4" y="73.6" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" width="46.5" height="16.5"/>
    <g id="Group_677" transform="translate(246.855 287.056)">
    	<circle id="Ellipse_72-2" fill="#FFAFA6" stroke="#182A74" stroke-miterlimit="10" cx="126.2" cy="61.5" r="61"/>
    	<path id="Rectangle_181-2" fill="#FFAFA6" stroke="#182A74" stroke-miterlimit="10" d="M133.5,22.6h35.4c21.5,0,39,17.4,39,39
    		c0,0,0,0,0,0l0,0c0,21.5-17.4,39-39,39h-35.4c-21.5,0-39-17.4-39-39l0,0C94.5,40,111.9,22.6,133.5,22.6z"/>
    	<circle id="Ellipse_72-3" fill="#FFAFA6" stroke="#182A74" stroke-miterlimit="10" cx="169.3" cy="61.5" r="39"/>
    	<g id="ON-2">
    		<g enable-background="new    ">
    			<path fill="#182A74" d="M163.8,51.8c3,0,5.5,1.2,7.1,3.9c0.8,1.4,1.2,3.1,1.2,5c0,3.9-1.7,6.7-4.1,8c-1.2,0.6-2.6,0.9-4.1,0.9
    				c-3,0-5.5-1.2-7.1-3.9c-0.8-1.4-1.1-3-1.1-5c0-3.9,1.7-6.8,4.1-8C160.9,52.1,162.3,51.8,163.8,51.8z M163.8,54.8
    				c-1.4,0-2.6,0.5-3.5,1.5c-0.9,1-1.4,2.5-1.4,4.4s0.5,3.4,1.4,4.4c1,1,2.1,1.5,3.5,1.5s2.6-0.5,3.5-1.5c0.9-1,1.4-2.5,1.4-4.4
    				s-0.5-3.4-1.4-4.4C166.4,55.3,165.2,54.8,163.8,54.8z"/>
    			<path fill="#182A74" d="M185.8,52h3.2v17.5h-3.4L179.2,58v11.5H176V52h3.4l6.4,11.5V52z"/>
    		</g>
    	</g>
    </g>
    <g id="Group_684-2" transform="translate(0 181.344)">
    	<g id="Group_675-2">
    		<path id="Rectangle_181" fill="#FFAFA6" stroke="#182A74" stroke-miterlimit="10" d="M105.1,0.5h172.2c22.1,0,40,17.9,40,40l0,0
    			l0,0c0,22.1-17.9,40-40,40H105.1c-22.1,0-40-17.9-40-40l0,0l0,0C65.2,18.4,83.1,0.5,105.1,0.5C105.1,0.5,105.1,0.5,105.1,0.5
    			L105.1,0.5L105.1,0.5z"/>
    		<circle id="Ellipse_71-2-2" fill="none" stroke="#182A74" stroke-miterlimit="10" cx="105.1" cy="40.5" r="40"/>
    		<g id="Group_647" transform="translate(29.892 38.336)">
    			<rect id="Rectangle_184" x="65.2" y="0.5" fill="#182A74" width="21.4" height="3.5"/>
    		</g>
    	</g>
    	<g id="Group_676-2" transform="translate(172.159 0)">
    		<circle id="Ellipse_72" fill="#FFAFA6" stroke="#182A74" stroke-miterlimit="10" cx="105.1" cy="40.5" r="40"/>
    		<g id="Group_646" transform="translate(29.293 29.293)">
    			<rect id="Rectangle_182" x="74.1" y="0.5" fill="#182A74" width="3.5" height="21.4"/>
    			<rect id="Rectangle_183" x="65.2" y="9.4" fill="#182A74" width="21.4" height="3.5"/>
    		</g>
    	</g>
    </g>
    <g id="Group_1258" transform="translate(93.328 216.428)">
    	<path id="Path_460" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" d="M122.3,2.2
    		c2.3-2.3,6-2.3,8.3,0"/>
    	<path id="Path_461" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" d="M65.2,2.2c2.3-2.3,6-2.3,8.3,0
    		"/>
    	<path id="Path_462" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" d="M126.6,1.4
    		c0,8.1-9.5,22.2-28.6,22.2S69.3,9.5,69.3,1.4"/>
    </g>
    <ellipse id="Ellipse_115" fill="#182A74" cx="384.4" cy="266.7" rx="4.3" ry="5.8"/>
    <motion.path initial={{strokeDasharray: "10,10", strokeDashoffset: -100}} animate={{strokeDasharray: "10,10", strokeDashoffset: 0}} transition={{ease: "linear", duration: 2, loop: Infinity}} id="wire-mostleft" fill="none" stroke="#182a74" stroke-miterlimit="10" stroke-dasharray="10,10" d="M284.7,351.1H65.3c-35.8,0.1-64.9-28.7-65-64.5
    	c-0.1-35.8,28.7-64.9,64.5-65c0.2,0,0.3,0,0.5,0"/>
    <g id="Group_1274" transform="translate(526.714 20.731)">
    	<g id="Group_1259">
    		<path id="Path_457" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" d="M20.9,2.3
    			c2.4-2.4,6.2-2.4,8.6,0c0,0,0,0,0,0"/>
    		<path id="Path_458" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" d="M0.5,2.3
    			c2.4-2.4,6.2-2.4,8.6,0c0,0,0,0,0,0"/>
    		<path id="Path_459" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" d="M25.2,16.6"/>
    	</g>
    	<ellipse id="Ellipse_115-2" fill="#182A74" cx="23" cy="29.4" rx="3.6" ry="4.8"/>
    	<ellipse id="Ellipse_115-3" fill="#182A74" cx="6.1" cy="29.4" rx="3.6" ry="4.8"/>
    </g>
    <g id="Group_1275" transform="translate(353.216 263.045)">
    	<path id="Path_470" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" d="M14.3,3.7C9,1,3.7,3.7,3.7,3.7
    		"/>

    		<line id="Line_208" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" x1="3.7" y1="3.7" x2="0.5" y2="0.5"/>

    		<line id="Line_209" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" x1="3.7" y1="3.7" x2="0.5" y2="6.9"/>
    </g>
    <line id="Line_210" fill="none" stroke="#182A74" stroke-linecap="round" stroke-miterlimit="10" x1="356.9" y1="266.7" x2="353.1" y2="266.7"/>
    <g id="Group_1276" transform="translate(271.181 340.205)">
    	<g id="Group_682">
    		<g id="Group_653">
    			<circle id="Ellipse_73" fill="#FFFFFF" cx="10.2" cy="10.2" r="9.7"/>
    		</g>
    	</g>
    	<g id="Group_683" transform="translate(206.723)">
    		<g id="Group_653-2">
    			<circle id="Ellipse_73-2" fill="#FFFFFF" cx="10.2" cy="10.2" r="9.7"/>
    		</g>
    	</g>
    </g>
    <motion.path initial={{strokeDasharray: "10,10", strokeDashoffset: 100}} animate={{strokeDasharray: "10,10", strokeDashoffset: 0}} transition={{ease: "linear", duration: 2, loop: Infinity}} id="wire-left" fill="none" stroke="#182a74" stroke-linecap="round" stroke-miterlimit="10" d="M532.3,90.2v122.5
    	c0,5-4.1,9.1-9.1,9.1l0,0l0,0h-206"/>
    </svg>
);
}
