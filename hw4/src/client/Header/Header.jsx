import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className="link" activeClassName="active-link">
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies" className="link" activeClassName="active-link">
                            movies
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}