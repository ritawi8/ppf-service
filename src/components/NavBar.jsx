import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import '../styles/NavBar.css';

function NavBar() {
	return (
		<nav>
			<div className='logo'>PPF-Service</div>

			<div className='nav-menu'>
				<Link to='/'>Start</Link>
				<Link to='/about'>Om oss</Link>
				<Link to='/services'>Tjänster</Link>
				<Link to='/gallery'>Bilder</Link>
				<Link to='/contact'>Kontakt</Link>
			</div>

			<div className='right-section'>
				<div className='social-media'>
					<a href='#' className='social-link'>
						<FaInstagram />
					</a>
					<a href='#' className='social-link'>
						<FaFacebook />
					</a>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
