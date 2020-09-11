import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import arrowDown from '../assets/svgs/menu/arrow-down.svg';

const useStyles = makeStyles({
  root: {
    background: "none",
    border: "none",
  },
  summary: {
    padding: "10px 0 0 0",
  },
  details: {
    padding: "5px 0 20px 0",
  },
  hideBorder: {
    '&.MuiAccordion-root:before': {
      display: 'none',
    },
  },
});

export default function MenuItemAccordion(props) {
  const classes = useStyles();

  return(
    <Accordion className={[classes.root, classes.hideBorder]}>
      <AccordionSummary className={classes.summary} expandIcon={<img src={arrowDown} alt=""/>}>
        <Typography style={{color: "#182a74", fontSize: 26}}>
          {props.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        <Typography style={{color: "#182a74", fontSize: 16}}>
          {props.body}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
