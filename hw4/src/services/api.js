// https://api.themoviedb.org/3/movie/550?api_key=217783f9674e62b18b0d5c10d6ab29e5
import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '?api_key=217783f9674e62b18b0d5c10d6ab29e5'


const axiosRequest = (params) => {

    return (
        axios
            .get(`${baseURL}${params}${API_KEY}`)

    )
}

export default axiosRequest;