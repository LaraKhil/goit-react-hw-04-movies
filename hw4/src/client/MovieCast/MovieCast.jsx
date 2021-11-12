import { useEffect, useState } from "react";
import { useParams } from "react-router";

import axiosRequest from "../../services/api";

export default function MovieCast() {

    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        axiosRequest(`/movie/${movieId}/credits`)
            .then(item => setCast([...item.data.cast]))
    }, []);


    return (
        <ul>
            {cast.map(({ name, id }) =>
                <li key={id}>
                    {name}
                </li>
            )}
        </ul>
    )

}
