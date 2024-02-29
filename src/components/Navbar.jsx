import '../index.css'
import logo from '../assets/logo.png'
import imagen from '../assets/bgSimpson.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
    return(
    <nav className="navbar">
        <div className="container">
            <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="50" height="50" className="mr-2" />
            Katas UI
            </a>
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="https://sites.google.com/globant.com/tp-dojo/home">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://sites.google.com/globant.com/tp-dojo/about-katas">About Katas</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://sites.google.com/globant.com/tp-dojo/welcome-to-dojo">Welcome to Dojo</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="https://sites.google.com/globant.com/tp-dojo/challenges/challenges-web-ui" role="button" aria-expanded="false">Challenges</a>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/challenges/challenges-web-ui">Challenges Web UI</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="https://sites.google.com/globant.com/tp-dojo/wiki" role="button" aria-expanded="false">Wiki</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/css">CSS</a></li>
                    <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/javascript">JavaScript</a></li>
                    <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/react">React</a></li>
                    <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/react-native">React Native</a></li>
                    <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/react-native">Testing</a></li>
                    <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/design-patterns">Desing Patterns</a></li>
                    <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/architecture">Architecture</a></li>
                    <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/animations">Animations</a></li>
                    <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/fonts">Fonts</a></li>
                    <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/tools">Tools</a></li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://sites.google.com/globant.com/tp-dojo/blog">Blog</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://sites.google.com/globant.com/tp-dojo/faq">FAQ</a>
            </li>
            </ul>
            
            <div className="search-container">
                <button className="bi bi-search"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                
            </div>
        </div>

        <div>
            <img src={imagen} alt="Imagen de fondo" className="background-simpsons" />
            <h1 className='title'>The Simpsons Quotes</h1>
        </div>
    </nav>

    )
}

export default Navbar;