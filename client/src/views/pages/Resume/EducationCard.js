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
  },
  textWhite: {
    color: 'white',
  },
  cardMedia: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      paddingLeft: '1em',
      paddingTop: '2em',
      height: 'fit-content',
    },
    width: '40%',
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '3em',
    paddingTop: '3em',
  },
  card: {
    padding: 0,
    display: 'flex',
    boxShadow: '3px 3px 10px -3px #00000047',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    paddingTop: '3em',
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
    padding: '0px 2em'
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
  }
}));

const EducationCard = props => {
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
            {data.map((item, index) => (
              <Grid item xs={12} key={index} data-aos="fade">
                <Card className={classes.card}>

                  <CardMedia className={classes.cardMedia}>
                    <Typography
                      variant="h4"
                      color="secondary"
                      className={clsx(classes.textBold, classes.bottMarg)}
                    >
                      {item.period}
                    </Typography>
                    <Typography
                      variant="h6"
                      className={clsx(classes.textBold, classes.bottMarg)}
                    >
                      {item.institute}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      className={classes.bottMarg}
                    >
                      {item.degree}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                    >
                      {item.location}
                    </Typography>
                  </CardMedia>

                  <CardContent className={classes.cardContent}>
                    <Box className={classes.cardBody} p={3}>
                      <Typography
                        variant="h5"
                        className={classes.relevant}
                      >
                        Relevant Coursework:
                      </Typography>
                      {item.actions.map((action, i) => {
                        return (
                          <Box mb={2} key={i}>
                            <Typography variant="h5" color="textPrimary">
                              <ul><li>{action}</li></ul>
                            </Typography>
                          </Box>
                        )
                      })}
                    </Box>
                  </CardContent>

                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

EducationCard.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
};

export default EducationCard;
