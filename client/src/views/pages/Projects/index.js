import React from 'react';
import {
  Container,
  Typography,
  makeStyles,
} from '@material-ui/core';
import Page from 'src/components/Page';
import ProjectCard from './ProjectCard';
import { news } from './data'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#a8dadc',
    minHeight: '100vh',
  },
  paddingMobile: {
    maxWidth: 750,
    paddingBottom: 32,
  },
  title: {
    paddingTop: '6em',
    textAlign: 'center',
    fontWeight: '800',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      paddingTop: '5em',
    }
  },
  subTitle: {
    marginTop: '8px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '6em',
  },
  itemsContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    maxWidth: '750px',
    margin: 'auto',
    padding: '1em',
    [theme.breakpoints.up('sm')]: {
      padding: '1em 3em',
    },
  },
  item:{
    width: '100%',
    maxWidth: '100%'
  },

  borderRadius: {
    borderRadius: '8px',
    boxShadow: '3px 3px 10px -3px #00000047',
  },

  shape: {
    backgroundColor: '#e63946',
    width: 22,
    height: 22,
    marginRight: theme.spacing(1),
    display: 'inline-block',
    [theme.breakpoints.down('xs')]: {
      width: 16,
      height: 16,
    },
  }
}));


function Projects() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Projects"
      data-aos={'fade'}
    >
      <Typography
        variant='h2'
        className={classes.title}
      >
      <div className={classes.shape} />
        Projects
      </Typography>
      <Typography
        variant='body1'
        className={classes.subTitle}
      >
        Check out some of my projects down below!
      </Typography>
      <Container className={classes.paddingMobile}>

              <ProjectCard data={news} />

      </Container>
    </Page>
  );
}

export default Projects;
