import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 0),
    background: '#fff',
    overflow: 'hidden',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: theme.spacing(2, 0),
    color: '#fff',

    minWidth: '370px',
    margin: 'auto',
  },
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid className={classes.root}>
        <Grid item className={classes.wrapper}>
          <Typography className={classes.content}>
            © {new Date().getFullYear()}
          </Typography>
          <Typography className={classes.content}>
            <FacebookIcon className={classes.icon} />
          </Typography>
          <Typography className={classes.content}>
            <InstagramIcon className={classes.icon} />
          </Typography>
          <Typography className={classes.content}>
            <TwitterIcon className={classes.icon} />
          </Typography>
          <Typography className={classes.content}>
            <PinterestIcon className={classes.icon} />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
