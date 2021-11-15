import { NavLink } from "react-router-dom";
import s from './HeaderStyles.module.css';

export default function Header() {

    return (
        <header className={s.wrapper}>
            <nav>
                <ul className={s.headerList}>
                    <li className={s.headerItem}>
                        <NavLink className={s.navLink} exact to="/" activeClassName={s.activeNavLink} >
                            home
                        </NavLink>
                    </li>
                    <li className={s.headerItem}>
                        <NavLink className={s.navLink} activeClassName={s.activeNavLink} to="/movies" >
                            movies
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}