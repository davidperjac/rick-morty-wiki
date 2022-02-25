import {
	FilterProvider,
	PageProvider,
	ThemeProvider,
	EpisodeProvider,
	LocationProvider,
} from './context';

export const Provider = ({ children }) => {
	return (
		<EpisodeProvider>
			<LocationProvider>
				<PageProvider>
					<FilterProvider>
						<ThemeProvider>{children}</ThemeProvider>
					</FilterProvider>
				</PageProvider>
			</LocationProvider>
		</EpisodeProvider>
	);
};
