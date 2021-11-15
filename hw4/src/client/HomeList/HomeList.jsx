import { useEffect, useState } from "react";
import { NavLink, useLocation, useHistory, useRouteMatch } from "react-router-dom";
import axiosRequest from "../../services/api";
import imageNotFound from '../../Images/no-image.png';

import MovieCard from '../../shared/styles/MovieCard';
import s from './HomeListStyles.module.css'

export default function HomeList() {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const history = useHistory();
    const { url } = useRouteMatch();

    useEffect(() => {
        axiosRequest('trending/movie/day')
            .then(movie => setMovies([...movies, ...movie.data.results]));
        history.push(location.state?.from)

    }, [])

    return (
        <section className={s.wrapper}>
            <h1 className={s.title}>Trending now</h1>
            <MovieCard>
                {!!movies.length && movies.map(item =>
                    <NavLink key={item.id} to={{ pathname: `/movies/${item.id}`, state: { from: url } }} className='navLink'>
                        <li className='singleCard'>
                            <div className="imgContainer">
                                <div className="imgInner">
                                    <div className="innerSkew">
                                        <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : imageNotFound} alt={item.title} />
                                    </div>
                                </div>
                            </div>
                            <div className="textContainer">
                                <h3>{item.title}</h3>
                            </div>
                        </li>
                    </NavLink>
                )}
            </MovieCard>
        </section>
    )
}