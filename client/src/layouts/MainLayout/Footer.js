import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  IconButton,
  Box,
} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: 100,
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
  },
  icon: {
    width: 20,
  },
  socialIcon: {
    padding: 0,
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
  },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      padding: '0px 15%',
    },
  },
  displayNone: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  content: {
    fontWeight: 700,
  },
  iconsCont: {
    justifyContent: 'space-between',
    minWidth: 100,
  }
}));

const Footer = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid item className={classes.wrapper}>

        <Grid item xs={12} sm={12} className={classes.displayNone}>
        </Grid>

        <Grid item xs={12} sm={12} className={classes.itemsContainer}>
          <Box>
            <Box>
              <Typography
                className={classes.content}
                variant='h6'
              >
                Email
              </Typography>
            </Box>
            <Box>
              <Typography
                variant='body2'
                component="a"
                href="mailto:frunza.sergiu3@gmail.com"
              >
                frunza.sergiu3@gmail.com
              </Typography>
            </Box>
          </Box>

          <Box>
            <Box>
              <Typography
                className={classes.content}
                variant='h6'
              >
                Follow
              </Typography>
            </Box>
            <Box display='flex' className={classes.iconsCont}>
              <Typography
                variant='body2'
              >
                <IconButton
                  className={classes.socialIcon}
                  href="https://www.linkedin.com/in/sergiufrunza/"
                  target='_blank'
                >
                  <LinkedInIcon className={classes.icon} />
                </IconButton>
              </Typography>
              <Typography
                variant='body2'
              >
                <IconButton
                  className={classes.socialIcon}
                  href="https://github.com/sfrunza"
                  target='_blank'
                >
                  <GitHubIcon className={classes.icon} />
                </IconButton>
              </Typography>
              <Typography
                variant='body2'
              >
                <IconButton
                  className={classes.socialIcon}
                  href="https://www.instagram.com/f_sergg/"
                  target='_blank'
                >
                  <InstagramIcon className={classes.icon} />
                </IconButton>
              </Typography>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
