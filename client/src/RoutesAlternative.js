import React, {
  lazy,
  Suspense,
  Component
} from 'react';
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';

class Routes extends Component {

  render() {

    return (
      <Suspense fallback={null}>
        <Switch>
          <Route
            exact
            path="/404"
            component={lazy(() => import('src/views/pages/Error404View'))}
          />

          <Route
            path="/"
            render={(props) => (
              <MainLayout {...props}>
                  <Switch>
                    <Route
                      exact
                      path="/"
                      component={lazy(() => import('src/views/pages/About'))}
                    />
                    <Route
                      exact
                      path="/resume"
                      component={lazy(() => import('src/views/pages/Resume'))}
                    />
                    <Route
                      exact
                      path="/projects"
                      component={lazy(() => import('src/views/pages/Projects'))}
                    />
                    <Route
                      exact
                      path="/contact"
                      component={lazy(() => import('src/views/pages/Contact'))}
                    />
                    <Redirect to="/404" />
                  </Switch>
              </MainLayout>
            )}
          />
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    );
  }
}

export default Routes;
