// https://api.themoviedb.org/3/movie/550?api_key=217783f9674e62b18b0d5c10d6ab29e5
import axios from 'axios';


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '217783f9674e62b18b0d5c10d6ab29e5';

const setParams = params => {
    return axios.defaults.params = { api_key: API_KEY, ...params }
};


const axiosRequest = (params) => {
    setParams();


    return (
        axios
            .get(params)
        // .then(res => {
        //     // if (res.status >= 200 && res.data < 300) {
        //     //     return res.data
        //     // }
        //     // return Promise.reject(new Error('oops'))
        //     return res
        // })

    )
}


export default axiosRequest;