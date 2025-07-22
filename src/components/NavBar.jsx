import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
	return (
		<nav>
			<Link to='/'>Start</Link> | <Link to='/about'>Om oss</Link> |{' '}
			<Link to='/gallery'>Bilder</Link> | <Link to='/contact'>Kontakt</Link>
		</nav>
	);
}

export default NavBar;
