import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover({ handleAdd }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    handleAdd();
    setAnchorEl(event.currentTarget);
  };

  // for a one-liner, you can restate the arrow function without the curlies:
  const handleClose = () => setAnchorEl(null);
  

  const open = Boolean(anchorEl);
  // seems like this would do the same thing, so long as false works the same as undefined in the Popover mui component
  const id = open && 'simple-popover';

  return (
    <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        You ate this
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>Chomp.</Typography>
      </Popover>
    </div>
  );
}