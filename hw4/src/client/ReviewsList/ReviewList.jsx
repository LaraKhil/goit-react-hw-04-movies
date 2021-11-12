import { useEffect, useState } from "react";
import { useParams } from "react-router";

import axiosRequest from "../../services/api";

export default function MovieCast() {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axiosRequest(`/movie/${movieId}/reviews`)
            .then(item => setReviews([...item.data.results]))

        return () => {
            setReviews([])
        }
    }, []);

    return (
        <>
            {reviews.length ?
                <ul>
                    {reviews.map(({ author, content, id }) =>
                        <li key={id}>
                            <h2>{author}</h2>
                            <p>{content}</p>
                        </li>
                    )}
                </ul>
                : <p>dont have</p>}
        </>
    )
}