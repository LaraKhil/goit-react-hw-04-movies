import { useEffect, useState } from "react";
import { useParams } from "react-router";
import s from './ReviewListStyles.module.css';

import axiosRequest from "../../services/api";

export default function MovieCast() {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        axiosRequest(`/movie/${movieId}/reviews`)
            .then(item => setReviews([...item.data.results]))

        return () => {
            setReviews([])
        }
    }, []);

    if (reviews === null) return <></>

    return (
        <>
            {!!reviews.length ?
                <ul className={s.reviewsList}>
                    {reviews.map(({ author, content, id }) =>
                        <li key={id} className={s.reviewsItem}>
                            <h2 className={s.reviewsTitle}>{author}</h2>
                            <p className={s.reviewsDesc}>{content}</p>
                        </li>
                    )}
                </ul>
                : <p className={s.noReview}>We don't have any reviews yet</p>}
        </>
    )
}