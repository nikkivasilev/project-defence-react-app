import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
        <nav>
            <img src="images/contrast.png" alt="sun"/>
            <a to="/">HOME</a>
            <ul>
                {/* // {% if request.user.is_authenticated %} */}
                    <li><Link to="/">CATALOGUE</Link></li>
                    <li><Link to="/">PROFILE</Link></li>
                    <li><Link to="/">LOG OUT</Link></li>

                {/* // {% else %} */}
                    <li><Link to="/">REGISTER</Link></li>
                    <li><Link to="/">LOG IN</Link></li>
                {/* // {% endif %} */}
                {/* // {% if request.user.is_staff %} */}
                    <li><Link to="/">STAFF</Link></li>
                {/* // {% endif %} */}

            </ul>
        </nav>
    </header>
    )
}