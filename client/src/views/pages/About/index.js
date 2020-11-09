import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Page from 'src/components/Page';
import { Section } from 'src/components/organisms';
import Card from './Card'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      height: '65rem',
    },
  },
  pagePaddingTop: {
    [theme.breakpoints.up('md')]: {
      zIndex: 15,
      left: '35%',
      top: '10%',
      margin: '-100px 0 0 -150px',
      padding: '13em 0',
    },
    top: 0,
    padding: '10em 0',
    maxWidth: 900,
    margin: 'auto',
    position: 'absolute',
  },
  right: {
    height: '100hv',
    flex: 2,
    [theme.breakpoints.down('xs')]: {
      flex: 0.5,
    },
  },
  left: {
    backgroundColor: '#a8dadc',
    height: '100hv',
    flex: 1.5,
    [theme.breakpoints.down('xs')]: {
      flex: 1
    },
  },
  card: {
    top: '50%',
    left: '50%',
    display: 'block',
    position: 'absolute',
    width: 750,
    height: 417,
    marginTop: '-208.5px',
    marginLeft: '-375px',
  }
}));



const About = props => {
  const classes = useStyles();
  return (
    <Page title="Resume | SergiuFrunza" className={classes.root} data-aos={'fade'}>
      <Section className={classes.pagePaddingTop}>
        <Card />
      </Section>

      <div className={classes.left}></div>
      <div className={classes.right}></div>


    </Page>
  );
};

export default About;
