import { useContext } from 'react';
import { ThemeContext } from '../../context/context';

export const Select = ({ change, data, id, name, total }) => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const darkSelect = {
		border: `2px solid  ${darkMode ? '#2eb086' : '#313552'}`,
		color: darkMode ? '#2eb086' : '#313552',
	};

	return (
		<select
			style={darkSelect}
			onChange={change}
			className="form-select"
			id={data.name}
			defaultValue={id}
		>
			<option value="1">Choose...</option>
			{[...Array(total).keys()].map((x, index) => {
				return (
					<option value={x + 1} key={index}>
						{name} - {x + 1}
					</option>
				);
			})}
		</select>
	);
};
