import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  makeStyles,
} from '@material-ui/core';
import Page from 'src/components/Page';
import CustomerForm from './CustomerForm'


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#a8dadc',
    minHeight: '100vh',
  },
  paddingMobile: {
    padding: '2em',
    maxWidth: 750,
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
  itemsContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    maxWidth: '750px',
    margin: 'auto',
    padding: '1em 1em',
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


function Contact() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Contact"
      data-aos={'fade'}
    >
      <Typography
        variant='h2'
        className={classes.title}
      >
      <div className={classes.shape} />
      Contact Me

      </Typography>
      <Container className={classes.paddingMobile}>
          <Paper className={classes.borderRadius}>
            <Grid container className={classes.itemsContainer}>
              <Grid
                item
                xs={12}
                md={3}
                className={classes.item}
              >
                <CustomerForm/>
              </Grid>

            </Grid>
          </Paper>
      </Container>
    </Page>
  );
}

export default Contact;
