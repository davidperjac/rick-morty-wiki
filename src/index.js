import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import { FilterProvider, PageProvider, ThemeProvider } from './context/context';

ReactDOM.render(
	<BrowserRouter>
		<PageProvider>
			<FilterProvider>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</FilterProvider>
		</PageProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
