import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { FilterProvider, PageProvider, ThemeProvider } from './context/context';

ReactDOM.render(
	<React.StrictMode>
		<PageProvider>
			<FilterProvider>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</FilterProvider>
		</PageProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
