/*
Generic button
*/

import Button from '@material-ui/core/button';
import { withStyles } from '@material-ui/core/styles';

const SmButton = withStyles({
  root: {
    borderRadius: 100,
    color: 'white',
    padding: '0 56px',
  },
  label: {
    fontSize: 26,
    textTransform: 'capitalize',
  },
})(Button);

export default SmButton;
