import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
        <nav>
            <img src="images/contrast.png" alt="sun"/>
            <Link to="/">HOME</Link>
            <ul>
                {/* // {% if request.user.is_authenticated %} */}
                    <li><Link to="/catalogue">CATALOGUE</Link></li>
                    <li><Link to="/">CREATE PRODUCT</Link></li>
                    <li><Link to="/user/details">PROFILE</Link></li>
                    <li><Link to="/">LOG OUT</Link></li>

                {/* // {% else %} */}
                    <li><Link to="/">REGISTER</Link></li>
                    <li><Link to="/">LOG IN</Link></li>
                {/* // {% endif %} */}

            </ul>
        </nav>
    </header>
    )
}