import { useContext } from 'react';
import { Header } from './components/Header/Header';
import { ThemeContext } from './context/context';
import { Routes, Route } from 'react-router-dom';
import { CharacterPage } from './components/CharacterPage/CharacterPage';
import { Episodes } from './components/Episodes/Episodes';
import { Locations } from './components/Locations/Locations';
import './App.scss';

function App() {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const darkStyle = {
		backgroundColor: darkMode ? '#313552' : '#eee6ce',
		transition: 'linear 0.3s',
	};

	const darkFont = {
		color: darkMode ? '#2eb086' : '#313552',
		transition: 'linear 0.3s',
		padding: '5rem',
	};

	return (
		<div className="App" style={darkStyle}>
			<Header />
			<Routes>
				<Route path="/rick-morty-wiki" element={<CharacterPage />} />
				<Route path="/rick-morty-wiki/episodes" element={<Episodes />} />
				<Route path="/rick-morty-wiki/locations" element={<Locations />} />
			</Routes>
			<h2 style={darkFont}>Powered by David Perez</h2>
		</div>
	);
}

export default App;
