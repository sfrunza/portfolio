import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, IconButton} from '@material-ui/core';
import { Image } from 'src/components/atoms';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  folioItem: {
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    boxShadow: '3px 3px 10px -3px #00000047',
    flexDirection: 'column',
    margin: theme.spacing(0, 4),
    borderRadius: theme.spacing(1),
    backgroundColor: '#f1faee',
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2),
    },
    '&:last-child': {
      [theme.breakpoints.up('md')]: {
        marginBottom: 0,
      },
    },
  },
  image: {
    objectFit: 'cover',
    height: 200,
    borderRadius: '50%',
    width: 200,
  },
  imgCont: {
    padding: '2em',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  folioInfoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  folioTitle: {
    fontWeight: '800',
    width: '25%',
    textAlign: 'center',
  },
  folioSubtitle: {
    margin: theme.spacing(1, 0),
    letterSpacing: 8,
    textTransform: 'uppercase',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 500,
      margin: '0 auto',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      maxWidth: '100%',
    },
  },
  gridWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  folioDivider: {
    width: '40px',
    backgroundColor: '#e63946',
    height: '2px',
    margin: theme.spacing(2, 0)
  },
  folioSocial: {
    backgroundColor: '#fff',
    width: '100%',
    marginTop: theme.spacing(4)
  },
  socialContainer: {
    justifyContent: 'space-around',
    width: '60%',
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
  icon: {
    fontSize: 24,
  },
}));

const InfoCard = props => {
  const {className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest} data-aos="fade">
      <div className={classes.grid}>
          <div className={classes.gridWrapper}>
              <div className={classes.folioItem}>
                <div className={classes.imgCont}>
                  <Image
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="asdas"
                    className={clsx('folio__image', classes.image)}
                    lazy={false}
                  />
                </div>
                <div
                  className={clsx(
                    'folio__info-wrapper',
                    classes.folioInfoWrapper,
                  )}
                >
                  <Typography
                    variant="h3"
                    className={classes.folioTitle}
                    color="textPrimary"
                  >
                    Sergiu Frunza
                  </Typography>
                  <Typography
                    variant="h3"
                    className={classes.folioDivider}
                  >
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.folioSubtitle}
                    color="textSecondary"
                  >
                    Web Developer
                  </Typography>
                  <List className={classes.folioSocial}>
                    <ListItem className={classes.socialContainer}>
                      <IconButton className={classes.socialIcon}>
                        <FacebookIcon className={classes.icon} />
                      </IconButton>
                      <IconButton className={classes.socialIcon}>
                        <InstagramIcon className={classes.icon} />
                      </IconButton>
                      <IconButton className={classes.socialIcon}>
                        <TwitterIcon className={classes.icon} />
                      </IconButton>
                      <IconButton className={classes.socialIcon}>
                        <PinterestIcon className={classes.icon} />
                      </IconButton>
                    </ListItem>
                  </List>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  className: PropTypes.string,
};

export default InfoCard;
