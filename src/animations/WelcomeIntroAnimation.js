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
    display: "block",
    position: "absolute",
    maxHeight: "100%",
  },
});


export default function WelcomeIntroAnimation(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 665.435 695.31" preserveAspectRatio="xMidYMin" className={classes.svg}>
        <g id="Group_1630" data-name="Group 1630" transform="translate(-33.521 -252.946)">
          <g id="blue_cloud" data-name="Group 1402" transform="translate(277.746 27.32) rotate(90)">
            <g id="Group_913" data-name="Group 913" transform="translate(791.768 -220.19)">
              <g id="Group_912" data-name="Group 912" transform="translate(0)">
                <motion.g initial={{translateX: -140}} animate={{translateX: 0}} transition={{duration: 1, delay: 2 }} id="air_bottom" data-name="Group 911">
                  <path id="Path_314" data-name="Path 314" d="M872.466-45.669c-14.769,0-26.742,10.7-26.742,23.894,0,16.5,14.966,29.868,33.427,29.868,23.077,0,41.785-16.716,41.785-37.335,0-25.774-23.384-46.669-52.229-46.669H791.768v-60.273h76.938c28.845,0,52.231-20.9,52.231-46.669,0-20.62-18.708-37.335-41.783-37.335-18.461,0-33.428,13.373-33.428,29.868,0,13.2,11.973,23.895,26.742,23.895" transform="translate(-791.768 220.19)" fill="#182a74" />
                  <path id="Path_315" data-name="Path 315" d="M880.809-84.053c-14.769,0-26.741,10.7-26.742,23.895,0,16.5,14.966,29.868,33.427,29.868,23.077,0,41.784-16.716,41.784-37.335,0-25.774-23.384-46.669-52.229-46.669,28.845,0,52.229-20.894,52.231-46.669,0-20.62-18.707-37.335-41.784-37.335-18.461,0-33.427,13.373-33.427,29.868,0,13.2,11.973,23.895,26.742,23.895l-31.33,30.241Z" transform="translate(-800.111 228.436)" fill="#182a74" />
                </motion.g>
              </g>
            </g>
          </g>
          <g id="Led_top" data-name="Group 1400" transform="translate(-65.641 170.893)">
            <motion.g initial={{translateY: 120}} animate={{translateY: 0}} transition={{duration: 1, delay: 2 }} id="Group_673" data-name="Group 673">
              <path id="Rectangle_187" data-name="Rectangle 187" d="M449.592,114.108h0A23.952,23.952,0,0,1,473.54,138.06v51.417h-47.9V138.06A23.952,23.952,0,0,1,449.592,114.108Z" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
              <path id="Path_235" data-name="Path 235" d="M439.958,206.506V332.771a9.373,9.373,0,0,1-9.372,9.372h0" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
              <path id="Path_236" data-name="Path 236" d="M457.141,206.507v42.357a9.372,9.372,0,0,0,9.372,9.372h0" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
              <rect id="Rectangle_188" data-name="Rectangle 188" width="47.903" height="17.03" transform="translate(425.64 189.476)" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
            </motion.g>
            <motion.g initial={{translateY: 120}} animate={{translateY: 0}} transition={{duration: 1, delay: 2 }} id="Group_1399" data-name="Group 1399">
              <path id="Path_457" data-name="Path 457" d="M457.907,144.7a6.251,6.251,0,0,1,6.252,6.252" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
              <path id="Path_458" data-name="Path 458" d="M435.676,136.23a6.248,6.248,0,0,1,8.84,0" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
              <path id="Path_459" data-name="Path 459" d="M460.088,150.948" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
              <ellipse id="Ellipse_115" data-name="Ellipse 115" cx="3.72" cy="4.987" rx="3.72" ry="4.987" transform="translate(454.187 159.211)" fill="#182a74" />
              <ellipse id="Ellipse_115-2" data-name="Ellipse 115" cx="3.72" cy="4.987" rx="3.72" ry="4.987" transform="translate(436.768 159.211)" fill="#182a74" />
            </motion.g>
          </g>
          <g id="earth" data-name="Group 1405" transform="translate(33 -40)">
            <circle id="earth_ellipse" data-name="Ellipse 13" cx={217} cy={217} r={217} transform="translate(134 439)" fill="#96d5ef" />
            <g id="Group_1404" data-name="Group 1404">
              <g id="Group_194" data-name="Group 194" transform="translate(-143.938 -118.109)">
                <g id="Group_192" data-name="Group 192">
                  <path id="Path_97" data-name="Path 97" d="M494.806,773.978V742.109H494.8a31.869,31.869,0,0,0-31.862,31.869h31.868Z" />
                  <path id="Path_98" data-name="Path 98" d="M526.674,773.978H494.806v31.868A31.868,31.868,0,0,0,526.674,773.978Z" />
                </g>
                <g id="Group_193" data-name="Group 193">
                  <path id="Path_99" data-name="Path 99" d="M494.807,773.978h31.867v-.006a31.867,31.867,0,0,0-31.868-31.862h0Z" fill="#fff" />
                  <path id="Path_100" data-name="Path 100" d="M494.807,805.847V773.978H462.939A31.868,31.868,0,0,0,494.807,805.847Z" fill="#fff" />
                </g>
              </g>
              <motion.g initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 3 }} id="eyes" data-name="Group 195" transform="translate(-233.17 185.781)">
                <g id="Group_119" data-name="Group 119" transform="translate(506.301 345.78)">
                  <path id="Path_72" data-name="Path 72" d="M537.186,389.642c-19.317,0-30.885-9.819-30.885-21.931s11.568-21.931,30.885-21.931h0c19.317,0,30.885,9.819,30.885,21.931s-11.568,21.931-30.885,21.931Z" transform="translate(-506.301 -345.78)" fill="#fff" />
                  <circle id="Ellipse_15" data-name="Ellipse 15" cx="12.573" cy="12.573" r="12.573" transform="translate(18.312 9.358)" />
                </g>
                <g id="Group_120" data-name="Group 120" transform="translate(600.814 345.78)">
                  <path id="Path_73" data-name="Path 73" d="M642.742,389.642c-19.317,0-30.884-9.819-30.884-21.931s11.567-21.931,30.884-21.931h0c19.318,0,30.885,9.819,30.885,21.931s-11.567,21.931-30.885,21.931Z" transform="translate(-611.858 -345.78)" fill="#fff" />
                  <circle id="Ellipse_16" data-name="Ellipse 16" cx="12.573" cy="12.573" r="12.573" transform="translate(18.311 9.358)" />
                </g>
              </motion.g>
              <motion.g initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 3 }} id="plus_minus" data-name="Group 1401" transform="translate(-34 231)">
                <g id="Group_1266" data-name="Group 1266" transform="translate(-55.592 290.887)">
                  <g id="Group_684-2" data-name="Group 684-2">
                    <g id="Group_675-2" data-name="Group 675-2">
                      <path id="Ellipse_71-2-2" data-name="Ellipse 71-2-2" d="M41.185,0A41.185,41.185,0,1,1,0,41.185,41.185,41.185,0,0,1,41.185,0Z" transform="translate(310.592 205.113)" fill="#fff" />
                      <line id="Line_230" data-name="Line 230" x2={22} transform="translate(341.092 246.613)" fill="none" stroke="#182a74" strokeWidth={1} />
                    </g>
                    <g id="Group_676-2" data-name="Group 676-2">
                      <circle id="Ellipse_72" data-name="Ellipse 72" cx="41.185" cy="41.185" r="41.185" transform="translate(487.978 205.113)" fill="#fff" />
                      <line id="Line_228" data-name="Line 228" x2={22} transform="translate(518.092 246.613)" fill="none" stroke="#182a74" strokeWidth={1} />
                      <line id="Line_229" data-name="Line 229" x2={22} transform="translate(529.092 235.613) rotate(90)" fill="none" stroke="#182a74" strokeWidth={1} />
                    </g>
                  </g>
                  <g id="Group_1258" data-name="Group 1258">
                    <path id="Path_460" data-name="Path 460" d="M465.631,243.034a6.049,6.049,0,0,1,8.555,0" fill="rgba(0,0,0,0)" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
                    <path id="Path_461" data-name="Path 461" d="M406.754,243.034a6.05,6.05,0,0,1,8.556,0" fill="rgba(0,0,0,0)" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
                    <path id="Path_462" data-name="Path 462" d="M470.006,242.149c0,8.387-9.776,22.874-29.487,22.874s-29.487-14.487-29.487-22.874" fill="rgba(0,0,0,0)" stroke="#182a74" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1} />
                  </g>
                </g>
              </motion.g>
            </g>
          </g>
          <g id="capacitor" data-name="Group 1403" transform="translate(-952.166 -1037.836) rotate(-45)">
            <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 2, delay: 1 }} id="Line_89" data-name="Line 89" d="M0 0, L0, 65.379" transform="translate(-190.065 1752.299)" fill="none" stroke="#182a74" strokeMiterlimit={10} strokeWidth={1} />
            <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 2, delay: 1 }} id="Line_90" data-name="Line 90" d="M0 0, L0, 65.379" transform="translate(-220.548 1752.299)" fill="none" stroke="#182a74" strokeMiterlimit={10} strokeWidth={1} />
            <motion.g initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 3 }} id="capacitor2" >
            <rect id="Rectangle_166" data-name="Rectangle 166" width="68.913" height="131.339" rx="34.456" transform="translate(-239.763 1657.592)" fill="none" stroke="#182a74" strokeWidth={1} />
            <circle id="Ellipse_65" data-name="Ellipse 65" cx="35.456" cy="35.456" r="35.456" transform="translate(-240.763 1656.592)" fill="#fff" stroke="rgba(0,0,0,0)" strokeWidth={1} />
            <circle id="Ellipse_66" data-name="Ellipse 66" cx="15.242" cy="15.242" r="15.242" transform="translate(-220.548 1676.806)" fill="#182a74" stroke="rgba(0,0,0,0)" strokeWidth={1} />
            </motion.g>
          </g>
          <motion.g initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 3 }} id="brain" data-name="Group 188" transform="translate(104.223 259.086)">
            <motion.g initial={{scale: 1}} animate={{scale: 1.1}} transition={{delay:6, flip: Infinity}} id="brain_grow">
            <path id="Path_77" data-name="Path 77" d="M533.508,136.178a18.944,18.944,0,1,1-37.887,0c0-.11.007-.218.008-.326a18.931,18.931,0,0,1-12.619-22.236,18.935,18.935,0,0,1-3.963-23.3,18.937,18.937,0,0,1,3.963-23.3,18.93,18.93,0,0,1,12.619-22.235c0-.11-.008-.218-.008-.328a18.944,18.944,0,0,1,37.887,0h-.387a18.944,18.944,0,0,1,37.887,0c0,.11-.007.218-.008.328a18.93,18.93,0,0,1,12.619,22.235,18.937,18.937,0,0,1,3.963,23.3,18.935,18.935,0,0,1-3.963,23.3A18.931,18.931,0,0,1,571,135.852c0,.108.008.217.008.326a18.944,18.944,0,1,1-37.887,0Z" transform="translate(0 0)" fill="#fff" />
            <g id="Group_124" data-name="Group 124" transform="translate(499.479 60.107)">
              <line id="Line_34" data-name="Line 34" y2="49.485" transform="translate(35.08 5.462)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              <g id="Group_123" data-name="Group 123">
                <path id="Path_78" data-name="Path 78" d="M495.816,69.369a14.821,14.821,0,0,1,14.821-14.821" transform="translate(-495.816 -54.548)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                <path id="Path_79" data-name="Path 79" d="M542.265,54.548a14.821,14.821,0,0,1,14.821,14.821" transform="translate(-486.926 -54.548)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                <path id="Path_80" data-name="Path 80" d="M557.085,92.814a14.821,14.821,0,0,1-14.821,14.821" transform="translate(-486.927 -47.224)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                <path id="Path_81" data-name="Path 81" d="M510.637,107.635a14.821,14.821,0,0,1-14.821-14.821" transform="translate(-495.816 -47.224)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </g>
            </g>
            </motion.g>
          </motion.g>
          <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 2, delay: 1 }} id="hand_line" data-name="Path 501" d="M-23533.418-22313.594c-71.332,44.523,54.762,159.865-63.639,197.545" transform="translate(23715 23009)" fill="none" stroke="#182a74" strokeWidth={1} />
          <motion.g initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 3 }} id="hand" data-name="Group 189" transform="translate(-491.064 612.184)">
            <motion.g initial={{rotate: 0}} animate={{rotate: -20}} transition={{delay:4, flip: Infinity}} id="hand_rotate" >
              <path id="Path_74" data-name="Path 74" d="M580.4,178.031" transform="translate(4.857 1.33)" fill="#fff" />
              <path id="Path_75" data-name="Path 75" d="M590.588,178.031" transform="translate(7.513 1.33)" fill="#fff" />
              <path id="Path_76" data-name="Path 76" d="M573.113,192.308l.216-6.124a5.945,5.945,0,1,1,11.891,0v2.094l.131-9.406a5.945,5.945,0,1,1,11.89,0l.131,2.589a5.946,5.946,0,0,1,11.892,0s-1.257,43.391,1.5,50.428c3.261,8.314,6.042,4.474,12.052-1.627,2.73-2.771,7.278-6.463,9.956-.652,1.245,2.7-1.157,8.506-6.593,14.622-8.7,9.784-17.4,15.265-17.4,24.828v8.174s-.546,18.059-20.507,18.059-21.473-18.059-21.473-18.059c0-38.02-5.056-26.312-5.056-53.051,0-10.871.672-23.8.672-23.8a5.33,5.33,0,0,1,5.25-5.249,5.249,5.249,0,0,1,5.249,5.249l.192,1.862Z" fill="#fff" />
              <line id="Line_31" data-name="Line 31" y2="44.158" transform="translate(597.426 191.966)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              <line id="Line_32" data-name="Line 32" y2="41.019" transform="translate(585.253 197.008)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              <line id="Line_33" data-name="Line 33" y2="30.619" transform="translate(573.113 211.216)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </motion.g>
          </motion.g>
          <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 2, delay: 1 }} id="lamp_line" data-name="Path 101" d="M-17237.463-13089.941s-1.76,133.887-24.23,114.931,75.824-43.562,38.832,17.853-116.795,112.084-116.795,112.084" transform="translate(17897 13592)" fill="none" stroke="#000" strokeWidth={1} />
          <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 2, delay: 1 }} id="head_line" data-name="Path 502" d="M2882.931-2279.389c22.25,0,22.25,28.509,44.5,28.509s22.251-28.509,44.5-28.509,22.25,28.509,44.5,28.509,22.251-28.509,44.5-28.509,22.251,28.509,44.5,28.509,22.251-28.509,44.5-28.509,22.252,28.509,44.5,28.509,22.252-28.509,44.5-28.509" transform="translate(-2676.941 2722.133)" fill="none" stroke="#182a74" strokeMiterlimit={10} strokeWidth={1} />
          <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 2, delay: 1 }} id="fan_line" data-name="Line 106" d="M0 0, L0, 76.615" transform="translate(90.182 610.195) rotate(-90)" fill="none" stroke="#182a74" strokeMiterlimit={10} strokeWidth={1} />
          <motion.g initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 3 }} id="Lamp_yellow" data-name="Group 1045" transform="translate(3190.881 -5517.121)">
            <g id="Group_874" data-name="Group 874">
              <g id="Group_676" data-name="Group 676">
                <path id="Rectangle_187-2" data-name="Rectangle 187" d="M-2491.924,6008.185h0a19.382,19.382,0,0,1-19.382,19.379h-41.606V5988.8h41.606A19.382,19.382,0,0,1-2491.924,6008.185Z" fill="#ffdc20" />
              </g>
            </g>
          </motion.g>
          <motion.g initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 3 }} id="fan" data-name="Group 1408" transform="translate(23955 23066)">
            <motion.g initial={{rotate: 0}} animate={{rotate: -360}} transition={{delay: 5, yoyo: Infinity}} id="fan_rotate" >
              <path id="Union_10" data-name="Union 10" d="M23771.93,22561.477l-34.172-34.172c-.062-.062-.125-.125-.186-.189-.059.063-.119.123-.18.184l-34.178,34.178a13.251,13.251,0,0,1-18.738-18.74l34.176-34.172c.063-.062.127-.123.189-.186-.062-.061-.127-.121-.189-.186l-34.176-34.17a13.253,13.253,0,0,1,18.746-18.74l34.17,34.172c.061.064.121.125.186.189l.18-.189,34.178-34.172a13.249,13.249,0,0,1,18.734,18.74l-34.172,34.17c-.061.061-.125.127-.186.186.061.061.125.119.186.18l34.172,34.172a13.253,13.253,0,1,1-18.74,18.746Zm-34.537-52.912c.061.061.121.121.18.184.061-.064.123-.127.186-.189s.125-.119.191-.18c-.066-.059-.125-.125-.191-.186s-.119-.125-.18-.184c-.064.059-.125.125-.186.184s-.125.125-.187.186Z" transform="translate(-46352.379 1281.773) rotate(-90)" fill="#ffafa6" stroke="rgba(0,0,0,0)" strokeMiterlimit={10} strokeWidth={1} />
              <g id="Group_1409" data-name="Group 1409" transform="translate(-24331.898 -23223.07)">
              <g id="Group_192-2" data-name="Group 192" transform="translate(462.938 742.109)">
                <path id="Path_97-2" data-name="Path 97" d="M487.767,766.939v-24.83h0a24.83,24.83,0,0,0-24.824,24.83h24.829Z" transform="translate(-462.938 -742.109)" />
                <path id="Path_98-2" data-name="Path 98" d="M519.635,773.978H494.806v24.829A24.829,24.829,0,0,0,519.635,773.978Z" transform="translate(-469.977 -749.149)" />
                </g>
                <g id="Group_193-2" data-name="Group 193" transform="translate(462.939 742.11)">
                <path id="Path_99-2" data-name="Path 99" d="M494.807,766.939h24.828v0a24.828,24.828,0,0,0-24.829-24.824h0Z" transform="translate(-469.978 -742.11)" fill="#fff" />
                <path id="Path_100-2" data-name="Path 100" d="M487.768,798.808V773.978H462.939A24.829,24.829,0,0,0,487.768,798.808Z" transform="translate(-462.939 -749.149)" fill="#fff" />
                </g>
              </g>
            </motion.g>
          </motion.g>
          <g id="line_cloud" data-name="Group 1349" transform="translate(123.814 413.822) rotate(90)">
            <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 2, delay: 1 }} id="Path_487" data-name="Path 487" d="M-421.737-761.93a7.141,7.141,0,0,1-7.141-7.141A8.926,8.926,0,0,1-419.951-778a11.158,11.158,0,0,1,11.158,11.158,13.947,13.947,0,0,1-13.947,13.947h-62.688" transform="translate(500.81 777.997)" fill="none" stroke="#182a74" strokeLinecap="round" strokeWidth={1} />
            <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 2, delay: 1 }} id="Path_488" data-name="Path 488" d="M-443.966-739.907a7.141,7.141,0,0,1-7.141-7.141,8.926,8.926,0,0,1,8.926-8.926,11.158,11.158,0,0,1,11.158,11.158,13.947,13.947,0,0,1-13.947,13.947h-78.069" transform="translate(523.039 764.981)" fill="none" stroke="#182a74" strokeLinecap="round" strokeWidth={1} />
            <g id="Group_1348" data-name="Group 1348" transform="translate(0 34.111)">
              <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 2, delay: 1 }} id="Path_489" data-name="Path 489" d="M-396.682-663.526a7.141,7.141,0,0,0-7.141,7.141,8.926,8.926,0,0,0,8.926,8.926,11.158,11.158,0,0,0,11.158-11.158,13.947,13.947,0,0,0-13.947-13.947h-45.352" transform="translate(475.756 681.571)" fill="none" stroke="#182a74" strokeLinecap="round" strokeWidth={1} />
              <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 2, delay: 1 }} id="Path_490" data-name="Path 490" d="M-443.966-685.549a7.141,7.141,0,0,0-7.141,7.141,8.926,8.926,0,0,0,8.926,8.926,11.158,11.158,0,0,0,11.158-11.158,13.947,13.947,0,0,0-13.947-13.947h-78.069" transform="translate(523.039 694.587)" fill="none" stroke="#182a74" strokeLinecap="round" strokeWidth={1} />
            </g>
          </g>
          <motion.g initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 3 }} id="button" data-name="Group 1412" transform="translate(-3 -4)">
            <circle id="Ellipse_125" data-name="Ellipse 125" cx={55} cy={55} r={55} transform="translate(326 561)" fill="#ffdc20" />
            <g id="Group_1411" data-name="Group 1411" transform="translate(-163.291 -163.602)">
              <g id="Group_739" data-name="Group 739" transform="translate(424.184 740.565)">
                <g id="Group_532" data-name="Group 532" transform="translate(0)">
                  <rect id="Rectangle_156" data-name="Rectangle 156" width="158.541" height="78.603" rx="39.302" fill="#182a74" />
                  <circle id="Ellipse_48" data-name="Ellipse 48" cx="39.485" cy="39.485" r="39.485" fill="#ff6d00" />
                  <text id="Start" transform="translate(15.108 47.037)" fill="#fff" fontSize={21} fontFamily="Helvetica" letterSpacing="0.04em"><tspan x={0} y={0}>Start</tspan></text>
                </g>
              </g>
            </g>
          </motion.g>
        </g>
      </svg>
    </div>
  );
}
