import { useState, useEffect } from "react";
import { useRouteMatch, useParams, Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import MovieCast from "../MovieCast";
import axiosRequest from "../../services/api";
import ReviewsList from "../ReviewsList";

export default function MovieDetailsPage() {

    const { url } = useRouteMatch();
    const { movieId } = useParams();

    const [singeBook, setSingleBook] = useState({});

    useEffect(() => {
        axiosRequest(`movie/${movieId}`)
            .then(book => setSingleBook(book.data))
    }, [])


    return (
        <>

            {singeBook &&
                <div>
                    <h2>{singeBook.title}</h2>
                    <p>
                        <NavLink to={`${url}/cast`}  >
                            cast
                        </NavLink>
                    </p>
                    <p>
                        <NavLink to={`${url}/reviews`}  >
                            reviews
                        </NavLink>
                    </p>
                </div>
            }

            <Switch>
                <Route exact path='/movies/:movieId/cast'>
                    <MovieCast />
                </Route>
                <Route exact path='/movies/:movieId/reviews'>
                    <ReviewsList />
                </Route>
            </Switch>


        </>
    )
}