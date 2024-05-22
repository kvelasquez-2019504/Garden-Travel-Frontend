import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <header class="cabecera">
            <h1 class="cabecera-h1">
                <Link to="/home">
                    <img src="https://i.ibb.co/dW1PPhz/Icon-Garden-Travel-Hotel.png" border="0" alt="Logo-Garden" />
                    Garden Travel
                </Link>
            </h1>
            <nav class="cabecera-nav">
                <ul class="cabecera-ul">
                    <li class="cabecera-li"><Link to="/hoteles">Hotels</Link></li>
                    <li class="cabecera-li"><Link to="#">Reservations</Link></li>
                    <li class="cabecera-li"><Link to="#">Services</Link></li>
                    <li class='cabecera-li'><Link to="/facturas">Facturas</Link></li>
                </ul>
            </nav>
            <nav class="cabecera-nav">
                <ul class="cabecera-ul">
                    <li class="cabecera-li">
                        <Link to="/auth">Login</Link>
                    </li>
                    <li class="cabecera-li">
                        <Link href="#">Logout</Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}