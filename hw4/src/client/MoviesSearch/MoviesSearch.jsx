import axios from "axios";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import MovieCard from "../../shared/styles/MovieCard";
import s from './MovieSearchStyles.module.css';
import imageNotFound from '../../Images/no-image.png';

export default function MoviesSearch() {
    const [inputValue, setInputValue] = useState('');
    const [movies, setMovies] = useState([]);

    const history = useHistory();
    const location = useLocation();


    const handleSubmit = (e) => {
        e.preventDefault();
        const query = inputValue.toLowerCase();
        history.push({
            ...location,
            search: `query=${query}`

        })
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=217783f9674e62b18b0d5c10d6ab29e5&query=${query}`)
            .then(item => {
                setMovies(item.data.results);
                setInputValue('')
            }
            );
    }

    const onChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
    }

    return (
        <section className={s.wrapper}>
            <form onSubmit={handleSubmit} className={s.movieForm} >
                <input type="text" value={inputValue} onChange={onChange} className={s.movieInput} placeholder="Find movie" autoFocus />
                <button type='sumbit' className={s.movieBtn}>FIND</button>
            </form>

            <MovieCard>
                {!!movies.length && movies.map(item =>
                    <NavLink key={item.id} to={{
                        pathname: `movies/${item.id}`,
                        state: { from: location }
                    }} className='navLink'>
                        <li className='singleCard'>
                            <div className="imgContainer">
                                <div className="imgInner">
                                    <div className="innerSkew">
                                        <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : imageNotFound} alt={item.title} style={{}} />
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
};