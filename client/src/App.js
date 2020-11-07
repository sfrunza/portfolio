import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { create } from 'jss';
import { SnackbarProvider } from 'notistack';
import {
  createStyles,
  jssPreset,
  makeStyles,
  StylesProvider,
  ThemeProvider
} from '@material-ui/core';
import ScrollReset from 'src/components/ScrollReset';
import { createTheme } from 'src/theme';
import Routes from 'src/RoutesAlternative';
import 'swiper/swiper-bundle.css';
import 'aos/dist/aos.css';
import './assets/scss/index.scss';
import AOS from 'aos';

const history = createBrowserHistory();
const jss = create({ plugins: [...jssPreset().plugins] });

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%'
    },
    body: {
      height: '100%',
      width: '100%'
    },
    '#root': {
      height: '100%',
      width: '100%'
    }
  }
}));

function App() {
  useStyles();

  AOS.init({
    once: true,
    delay: 50,
    duration: 500,
    easing: 'ease-in-out',
  });
  return (
    <ThemeProvider theme={createTheme()}>
      <StylesProvider jss={jss}>
          <SnackbarProvider maxSnack={1}>
            <Router history={history}>
                <ScrollReset />
                <Routes />
            </Router>
          </SnackbarProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
