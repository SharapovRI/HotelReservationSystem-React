import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <div className="headerContainer">
            <NavLink to={'/'}>
                <h2>Hotel Reservation</h2>
            </NavLink>
            <h2>SignIn/ LogIn</h2>
        </div>
    )
}

export default Header;