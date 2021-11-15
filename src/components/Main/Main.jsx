import React from 'react';
import { lazy, Suspense } from 'react';
import { Switch } from 'react-router';
import { ToastContainer } from 'react-toastify';

import LoaderSpinner from '../_shared/LoaderSpinner/LoaderSpinner';
import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';

import { routes } from '../../routes/routes';

import styles from './Main.module.scss';

const AuthPage = lazy(() =>
  import('../../pages/AuthPage/AuthPage' /* webpackChunkName: "auth-page" */),
);
const HomePage = lazy(() =>
  import('../../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const TestPage = lazy(() =>
  import('../../pages/TestPage/TestPage' /* webpackChunkName: "test-page" */),
);
const ResultsPage = lazy(() =>
  import(
    '../../pages/ResultsPage/ResultsPage' /* webpackChunkName: "results-page" */
  ),
);
const MaterialsPage = lazy(() =>
  import(
    '../../pages/MaterialsPage/MaterialsPage' /* webpackChunkName: "materials-page" */
  ),
);
const OurTeamPage = lazy(() =>
  import(
    '../../pages/OurTeamPage/OurTeamPage' /* webpackChunkName: "team-page" */
  ),
);
const NotFoundPage = lazy(() =>
  import(
    '../../pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "not-found-page" */
  ),
);

export default function Main() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          <PublicRoute path={routes.auth} restricted redirectedTo={routes.home}>
            <AuthPage />
          </PublicRoute>

          <PrivateRoute path={routes.home} redirectedTo={routes.auth} exact>
            <HomePage />
          </PrivateRoute>

          <PrivateRoute path={routes.test} redirectedTo={routes.auth}>
            <TestPage />
          </PrivateRoute>

          <PrivateRoute path={routes.results} redirectedTo={routes.auth}>
            <ResultsPage />
          </PrivateRoute>

          <PrivateRoute path={routes.materials} redirectedTo={routes.auth}>
            <MaterialsPage />
          </PrivateRoute>

          <PublicRoute path={routes.ourTeam}>
            <OurTeamPage />
          </PublicRoute>

          <PublicRoute>
            <NotFoundPage />
          </PublicRoute>
        </Switch>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </main>
  );
}
