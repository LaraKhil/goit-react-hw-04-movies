import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosRequest from "../../services/api";



export default function HomeList() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axiosRequest('trending/movie/day')
            .then(movie => setMovies([...movies, ...movie.data.results]))

        // esling-disabled-next-line
    }, [])

    return (
        <section>
            <h1>Trending now</h1>
            <ul>
                {movies.length && movies.map(item =>
                    <li key={item.id}>
                        <Link to={`movies/${item.id}`}>
                            <p>{item.title}</p>
                        </Link>
                    </li>
                )}
            </ul>
        </section>
    )
}