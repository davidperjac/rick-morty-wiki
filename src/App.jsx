import { useContext } from 'react';
import { Header } from './components/Header/Header';
import { ThemeContext } from './context/context';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Routes, Route } from 'react-router-dom';
import { CharacterPage } from './components/CharacterPage/CharacterPage';
import { LocationPage } from './components/LocationPage/LocationPage';
import { EpisodePage } from './components/EpisodePage/EpisodePage';

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
			<SearchBar />
			<Routes>
				<Route path="/" element={<CharacterPage />} />
				<Route path="/episodes" element={<EpisodePage />} />
				<Route path="/locations" element={<LocationPage />} />
			</Routes>
			<h2 style={darkFont}>Powered by David Perez</h2>
		</div>
	);
}

export default App;
