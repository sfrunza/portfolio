import React from 'react';
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
  Button,
} from '@material-ui/core';
import Page from 'src/components/Page';
import { exp, edu, skills } from './data'
import clsx from 'clsx';
import ExpCard from './ExpCard'
import EducationCard from './EducationCard'
import SkillsCard from './SkillsCard'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#a8dadc',
    minHeight: '100vh',
  },
  paddingMobile: {
    maxWidth: 750,
  },
  title: {
    paddingTop: '6em',
    textAlign: 'center',
    fontWeight: '800',
    paddingBottom: '2em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      paddingTop: '5em',
    }
  },
  itemsContainer: {
    alignContent: 'center',
    maxWidth: '750px',
    justifyContent: 'space-between',
    margin: 'auto',
    // padding: '1em',
    // [theme.breakpoints.up('sm')]: {
    //   padding: '1em 3em',
    // },
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
  },
  category: {
    fontWeight: 800,
    fontSize: '1.5em',
  },
  marginT: {
    marginTop: '4em',
  },
  downButton: {
    borderRadius: '24px',
  }
}));


function Resume() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Resume"
      data-aos={'fade'}
    >
      <Typography
        variant='h2'
        className={classes.title}
      >
      <div className={classes.shape} />
        Resume
      </Typography>
      <Container className={classes.paddingMobile}>
        <Grid container className={classes.itemsContainer}>
          <Box mb={6}>
            <Typography
              variant='h4'
              className={classes.category}
            >
              Experience
            </Typography>
          </Box>
          <Box>
            <Button
              variant='contained'
              color='secondary'
              href="https://drive.google.com/file/d/1OuysDMslQ5y7_I0ZEd_BpGzVRarb3Dgp/view?usp=sharing"
              target="_blank"
              className={classes.downButton}
            >
              Download CV
            </Button>
          </Box>
          <ExpCard data={exp}/>
        </Grid>
        <Grid container className={clsx(classes.itemsContainer, classes.marginT)}>
          <Box mb={6}>
            <Typography
              variant='h4'
              className={classes.category}
            >
              Education
            </Typography>
          </Box>
          <EducationCard data={edu}/>
        </Grid>

        <Grid container className={clsx(classes.itemsContainer, classes.marginT)}>
          <SkillsCard data={skills}/>
        </Grid>

      </Container>
    </Page>
  );
}

export default Resume;
