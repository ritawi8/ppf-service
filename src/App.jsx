import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import OurServices from './pages/OurServices';
import './styles/App.css';
import Footer from './components/Footer';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/services' element={<OurServices />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
