import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  textWhite: {
    color: 'white',
  },
  cardMedia: {
    width: '40%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    height: 350,
  },
  card: {
    padding: 0,
    display: 'flex',
    boxShadow: '3px 3px 10px -3px #00000047',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      paddingTop: '2em',
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 0,
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
  }
}));

const ProjectCard = props => {
  const {data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 8 : 4}>
        <Grid item >
          <Grid container spacing={isMd ? 8 : 4} direction="column">
            {data.map((item, index) => (
              <Grid item xs={12} key={index} data-aos="fade">
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h4" color="secondary" className={classes.cardTitle}>
                      {item.title}
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.title}
                      >
                        Check it Out!
                      </Button>
                    </Typography>
                    <Box className={classes.cardBody} p={3}>
                      <Box>
                        <Typography variant="h5" color="textPrimary">
                          Description
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                          {item.description}
                        </Typography>
                      </Box>
                      <Box mt={4}>
                        <Typography variant="h5" color="textPrimary">
                          Technologies
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                          {item.tech}
                        </Typography>
                      </Box>

                    </Box>


                  </CardContent>
                  <CardMedia className={classes.cardMedia}>
                    <img
                      src={item.cover.src}
                      alt={item.title}
                      width='100%'
                      height='100%'
                      className={classes.image}
                    />
                  </CardMedia>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

ProjectCard.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default ProjectCard;
