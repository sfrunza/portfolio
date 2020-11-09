import React, { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
  colors,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    background: theme.palette.white,
    borderBottom: `1px solid ${colors.grey[200]}`,
    backgroundColor: '#fff',
    position: 'fixed',
    height: 100,
    justifyContent: 'center',
    top: 0,
    zIndex: 1000,
  },
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    maxWidth: 1600,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  listItem: {
    width: 'auto',
    textTransform: 'uppercase',
    paddingBottom: 0,
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
    '&:hover': {
      color: theme.palette.primary.dark,
      cursor: 'pointer',
    },
  },
  iconButton: {
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  logoContainer: {
    width: 'fit-content',
    display: 'flex',
    alignItems: 'baseline',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },
  },
  logoTitle: {
    fontWeight: '800',
  },
  logoSubtitle: {
    textTransform: 'uppercase',
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },

  },
  logoDivider: {
    margin: theme.spacing(0, 1),
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  shape: {
    backgroundColor: '#e63946',
    width: 16,
    height: 16,
    marginBottom: 2,
    marginRight: theme.spacing(1),
    display: 'inline-block',
    [theme.breakpoints.down('xs')]: {
      width: 13,
      height: 13,
    },
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref}>
    <RouterLink {...props} />
  </div>
));

function Topbar({ className, onSidebarOpen, pages, ...rest }) {
  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      position="relative"
      className={clsx(classes.root, className)}
    >
      <Toolbar disableGutters className={classes.toolbar}>
        <div className={classes.logoContainer}>

          <Typography
            variant="h3"
            className={classes.logoTitle}
            component={CustomRouterLink}
            to="/"
          >
            <div className={classes.shape} />
            Sergei Frunza
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.logoDivider}
          >
            /
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.logoSubtitle}
            component={CustomRouterLink}
            to="/"
          >
            Web Developer
          </Typography>
        </div>
        <div className={classes.flexGrow} />
        <Hidden smDown>
          <List className={classes.navigationContainer}>
            <ListItem className={classes.listItem}>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.listItemText}
                component={CustomRouterLink}
                to="/"
              >
                About Me
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.listItemText}
                component={CustomRouterLink}
                to="/projects"
              >
                Projects
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.listItemText}
                component={CustomRouterLink}
                to="/resume"
              >
                Resume
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.listItemText}
                component={CustomRouterLink}
                to="/contact"
              >
                Contact
              </Typography>
            </ListItem>
          </List>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.iconButton}
            onClick={onSidebarOpen}
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
};

export default Topbar;
