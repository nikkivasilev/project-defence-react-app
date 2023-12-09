import { useContext } from 'react';
import { Link } from "react-router-dom";
import AuthContext from '../../contexts/authContext'

export default function Header() {
    const {
        isAuthenticated,
    } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <img src="/images/contrast.png" alt="sun" />
        <Link to="/">HOME</Link>
        <ul>
        <li>
                <Link to="/catalogue">CATALOGUE</Link>
              </li>
          {isAuthenticated && (
            <>
              
              <li>
                <Link to="/product/create">CREATE PRODUCT</Link>
              </li>
              <li>
                <Link to="/user/details">PROFILE</Link>
              </li>
              <li>
                <Link to="/logout">LOG OUT</Link>
              </li>
            </>
          )}
          {!isAuthenticated && (
            <>
              <li>
                <Link to="/register">REGISTER</Link>
              </li>
              <li>
                <Link to="/login">LOG IN</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
