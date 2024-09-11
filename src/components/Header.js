import '../styles/main.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';


export default function Header() {

    // hook useLocation pour récupérer l'URL de la page actuelle
    const location = useLocation();

    return (
        <header>

            <Link to='/'>
                <img className='header__logo' src={logo} alt='Logo Kasa' />
            </Link>

            
            <nav className='navbar'>

                <Link   to='/' 
                        className={`navbar__link 
                        ${location.pathname === '/' ? 'navbar__link--active' : ''}`}>
                    Accueil
                </Link>
                <Link   to='/about' 
                        className={`navbar__link 
                        ${location.pathname === '/about' ? 'navbar__link--active' : ''}`}>
                    À Propos
                </Link>
            </nav>
        </header>
    )
}