import { useContext } from 'react';
import { Characters } from './components/Characters/Characters';
import { Header } from './components/Header/Header';
import { ThemeContext } from './context/context';
import { Filter } from './components/Filter/Filter';
import { Pagination } from './components/Pagination/Pagination';
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
		paddingBottom: '2rem',
	};

	return (
		<div className="App" style={darkStyle}>
			<Header />
			<Filter />
			<Characters />
			<Pagination pageLimit={10} dataLimit={20} />
			<h2 style={darkFont}>Powered by David Perez</h2>
		</div>
	);
}

export default App;
