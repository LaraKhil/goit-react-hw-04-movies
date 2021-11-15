import { Route, Switch, Redirect } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Header from './client/Header/Header';
import { GlobalStyles } from './shared/styles/GlobalStyles';

const HomePage = lazy(() => import('./pages/HomePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const MoviePage = lazy(() => import('./pages/MoviesPage'));

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/movies/:movieId' component={MovieDetailsPage} />
          <Route path='/movies' component={MoviePage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  )
};
