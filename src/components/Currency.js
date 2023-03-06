//import { type } from '@testing-library/user-event/dist/type';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
	const { dispatch} = useContext(AppContext);
	const chgCurrency = (val) => {
		dispatch({
			type: 'CHG_CURRENCY',
			payload: val
		});
	};
	return (
		<span className="alert bg-success">
			Currency(
			<select 
				className="alert" 
				onChange={(event) => chgCurrency(event.target.value)}
				style={{backgroundColor:"#198754"}}
				>
				<option value="$" name="dollar">$ Dollar</option>
				<option value="£" name="pound" selected>£ Pound</option>
				<option value="€" name="euro">€ Euro</option>
				<option value="₹" name="rupee">₹ Rupee</option>
			</select>)
		</span>
	);
}

export default Currency;