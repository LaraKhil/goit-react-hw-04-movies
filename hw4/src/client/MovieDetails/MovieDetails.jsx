import { useState, useEffect } from "react";
import { useRouteMatch, useParams, Route, Switch, useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import MovieCast from "../MovieCast";
import axiosRequest from "../../services/api";
import ReviewsList from "../ReviewsList";
import s from './MovieDetailsStyles.module.css'

import imgNotFound from '../../Images/no-image.png';

export default function MovieDetailsPage() {

    const { url } = useRouteMatch();
    const { movieId } = useParams();
    const history = useHistory();
    const location = useLocation();

    const [singeBook, setSingleBook] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axiosRequest(`movie/${movieId}`)
            .then(book => {
                setSingleBook(book.data);
                setGenres(book.data.genres);
            });
    }, []);

    const onGoBackClick = () => {
        history.push(location.state?.from);
    }

    return (
        <section>
            <button className={s.goBackBtn} type='button' onClick={onGoBackClick}>
                &larr;
            </button>
            {singeBook &&
                <>
                    <div className={s.movieCard}>
                        <div className={s.container}>
                            <img src={singeBook.poster_path ? `https://image.tmdb.org/t/p/w500${singeBook.poster_path}` : imgNotFound} alt={singeBook.title} />
                        </div>
                        <div className={s.hero}>
                            <div className={s.details}>
                                <div className={s.title1}>
                                    <h2>{singeBook.title}</h2>
                                </div>
                            </div>
                        </div>
                        <div className={s.description}>
                            <div className={s.column1}>
                                {genres.map(({ name, id }) =>
                                    <span key={id} className={s.tag}>{name}</span>
                                )}
                            </div>

                            <div className={s.column2}>
                                <p>{singeBook.overview}</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <span>
                            <NavLink to={{
                                pathname: `${url}/cast`,
                                state: { from: location.state?.from }
                            }}
                                style={{ padding: '10px 15px', textAlign: 'left', backgroundColor: '#061161', borderRadius: '5px', textDecoration: 'none', color: '#fff', marginLeft: '20px' }}>
                                Cast
                            </NavLink>
                        </span>
                        <span>
                            <NavLink to={{
                                pathname: `${url}/reviews`,
                                state: { from: location.state?.from }
                            }}
                                style={{ padding: '10px 15px', textAlign: 'left', backgroundColor: '#061161', borderRadius: '5px', textDecoration: 'none', color: '#fff', marginLeft: '20px' }} >
                                Reviews
                            </NavLink>
                        </span>

                    </div>
                </>
            }

            <Switch>
                <Route exact path='/movies/:movieId/cast'>
                    <MovieCast />
                </Route>
                <Route exact path='/movies/:movieId/reviews'>
                    <ReviewsList />
                </Route>
            </Switch>

        </section>
    )
}