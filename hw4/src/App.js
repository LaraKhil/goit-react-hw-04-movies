import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviePage from './pages/MoviesPage';
import Header from './client/Header/Header';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/movies/:movieId' component={MovieDetailsPage} />
        <Route path='/movies' component={MoviePage} />
      </Switch>
    </>
  )
};
