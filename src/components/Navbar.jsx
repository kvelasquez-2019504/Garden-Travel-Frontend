import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <header class="cabecera">
            <h1 class="cabecera-h1">
                <a href="#">
                    <img src="https://i.ibb.co/dW1PPhz/Icon-Garden-Travel-Hotel.png" border="0" alt="Logo-Garden" />
                    Garden Travel Hotel
                </a>
            </h1>
            <nav class="cabecera-nav">
                <ul class="cabecera-ul">
                    <li class="cabecera-li"><a href="#">Hotels</a></li>
                    <li class="cabecera-li"><a href="#">Reservations</a></li>
                    <li class="cabecera-li"><a href="#">Services</a></li>
                </ul>
            </nav>
            <nav class="cabecera-nav">
                <ul class="cabecera-ul">
                    <li class="cabecera-li">

                        <a href="#">Login</a>
                    </li>
                    <li class="cabecera-li"><a href="#">Logout</a></li>
                </ul>
            </nav>
        </header>

    )
}