import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Box, Typography, Button } from '@material-ui/core';
import InfoCard from './InfoCard'
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    fontWeight: '800',
    fontSize: '5em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '4em',
    },
  },
  benefit: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    maxWidth: '350px',
    '& div': {
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('sm')]: {
      height: 350,
      padding: '0em 1em',
    },
  },
  secPargf: {
    marginTop: theme.spacing(3),
  },
  links: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
  },
  button: {
    borderRadius: '24px',
    padding: '6px 36px',
  },
  projectsButton: {
    borderColor: '#000',
    transition: '0.3s',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#fff',
    },
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
    }

  }
}));

const Card = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2} >
        <Grid
          item
          container
          justify={isMd ? 'flex-start' : 'center'}
          xs={12}
          md={6}
        >
          <InfoCard
          />
        </Grid>
        <Grid item container alignItems="center" xs={12} md={6} display='felx'>
          <Box className={classes.benefit}>
            <Typography
              variant='h1'
              className={classes.title}
            >
              Hello
            </Typography>
            <Typography
              className={classes.links}
            >
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                size={isMd ? 'large' : 'medium'}
                component={RouterLink}
                to='/resume'
                >
                Resume
              </Button>
                <Button
                  variant="outlined"
                  className={clsx(classes.button, classes.projectsButton)}
                  size={isMd ? 'large' : 'medium'}
                  component={RouterLink}
                  to='/projects'
                  >
                  Projects
                </Button>
              </Typography>
            <Box>
              <Typography
                variant='body1'
              >
                Hello, I'm Sergiu, a Web Developer and Content Creator based in Boston.
              </Typography>
              <Typography
                variant='body1'
                className={classes.secPargf}
              >
                I enjoy programming React applications, going hiking and playing soccer.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
};

export default Card;
