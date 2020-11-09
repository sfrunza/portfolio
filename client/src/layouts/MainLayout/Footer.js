import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  IconButton,
} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: 100,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 0),
    color: '#fff',
    minWidth: '250px',
    margin: 'auto',
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: '#000',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  followBox: {
    display: 'flex',
  }
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
            <IconButton
              className={classes.socialIcon}
              href="https://www.linkedin.com/in/sergiufrunza/"
              target='_blank'
            >
              <LinkedInIcon className={classes.icon} />
            </IconButton>
          </Typography>
          <Typography className={classes.content}>
            <IconButton
              className={classes.socialIcon}
              href="https://github.com/sfrunza"
              target='_blank'
            >
              <GitHubIcon className={classes.icon} />
            </IconButton>
          </Typography>
          <Typography className={classes.content}>
            <IconButton
              className={classes.socialIcon}
              href="https://www.instagram.com/f_sergg/"
              target='_blank'
            >
              <InstagramIcon className={classes.icon} />
            </IconButton>
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
