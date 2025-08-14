import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import '../styles/NavBar.css';

function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav className="navbar">
			<div className="nav-container">
				<div className='logo'>
					<Link to="/" onClick={closeMenu}>PPF-Service</Link>
				</div>

				<div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
					<Link to='/' onClick={closeMenu}>Hem</Link>
					<Link to='/about' onClick={closeMenu}>Om oss</Link>
					<Link to='/services' onClick={closeMenu}>Tjänster</Link>
					<Link to='/gallery' onClick={closeMenu}>Bilder</Link>
					<Link to='/contact' onClick={closeMenu}>Kontakt</Link>
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
					
					<div className="hamburger" onClick={toggleMenu}>
						{isMenuOpen ? <FaTimes /> : <FaBars />}
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
