import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingBottom: 32,
  },
  textWhite: {
    color: 'white',
  },
  cardMedia: {
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '1em',
      paddingTop: '2em',
    },
    display: 'flex',
    paddingLeft: '3em',
    paddingTop: '3em',
  },
  card: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '3px 3px 10px -3px #00000047',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em 0em',
    flex: 1,
  },
  cardHighlighted: {
    background: theme.palette.primary.main,
  },
  image: {
    objectFit: 'cover',
  },
  cardTitle: {
    fontWeight: 800,
    padding: '8px 1em',
    borderLeft: '8px solid #e63946',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },
  },
  button: {
    borderRadius: '24px',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
      width: 'fit-content',
    },
  },
  cardBody: {
    padding: '0px 3em',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      padding: '0px 1em',
    },
  },
  bottMarg: {
    marginBottom: 6,
  },
  textBold: {
    fontWeight: 800,
  },
  relevant: {
    fontWeight: 800,
    textDecoration: 'underline',
    marginBottom: 6
  },
  itemWidth: {
    width: '100%',
  },
  shape: {
    backgroundColor: '#e63946',
    width: 10,
    height: 10,
    marginRight: theme.spacing(1),
    display: 'inline-block',
  },
  skillPadding: {
    padding: '1em 0px',
  }
}));

const SkillsCard = props => {
  const {data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 8 : 4}>
        <Grid item className={classes.itemWidth}>
          <Grid container spacing={isMd ? 8 : 4} direction="column">
              <Grid item xs={12}  data-aos="fade">
                <Card className={classes.card}>

                  <CardMedia className={classes.cardMedia}>
                    <Typography
                      variant="h4"
                      color="secondary"
                      className={clsx(classes.textBold, classes.bottMarg)}
                    >
                      Technical skillset
                    </Typography>
                  </CardMedia>

                  <CardContent className={classes.cardContent}>
                    <Box className={classes.cardBody}>
                      {data.map((skill, i) => {
                        return (
                          <Grid item xs={6} key={i} className={classes.skillPadding}>
                            <Typography variant="h5" color="textPrimary">
                              <div className={classes.shape} />
                              {skill.skill}
                            </Typography>
                          </Grid>
                        )
                      })}
                    </Box>
                  </CardContent>

                </Card>
              </Grid>

          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

SkillsCard.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default SkillsCard;
