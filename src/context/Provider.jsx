import {
	FilterProvider,
	InfoProvider,
	ThemeProvider,
	SelectProvider,
} from './context';

export const Provider = ({ children }) => {
	return (
		<SelectProvider>
			<FilterProvider>
				<InfoProvider>
					<ThemeProvider>{children}</ThemeProvider>
				</InfoProvider>
			</FilterProvider>
		</SelectProvider>
	);
};
