import { useEffect, useState } from "react";
import { useParams } from "react-router";
import s from './MovieCastStyle.module.css';
import imageNotFound from '../../Images/HD_transparent_picture.png';

import axiosRequest from "../../services/api";

export default function MovieCast() {

    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        axiosRequest(`/movie/${movieId}/credits`)
            .then(item => setCast([...item.data.cast]))
    }, []);

    return (
        <section className={s.profileSection}>
            <ul className={s.profileImagesList}>
                {cast.map(({ name, id, profile_path, title }) =>
                    <li key={id} className={s.profileItem}>
                        <p className={s.profileTitle}>
                            {name}
                        </p>
                        <div className={s.profileImagesContainer}>
                            <img src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : imageNotFound} alt={title} />
                        </div>
                    </li>
                )}
            </ul>

        </section>
    );
};
